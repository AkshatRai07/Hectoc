package main

import (
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/Hectoc/backend/internal/auth"
	"github.com/Hectoc/backend/internal/database"
	"github.com/google/uuid"
)

func (apiCfg *apiConfig) handlerRegister(w http.ResponseWriter, r *http.Request) {
	type parameters struct {
		Username string `json:"username"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	decoder := json.NewDecoder(r.Body)
	params := parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		respondWithError(w, 400, "Error parsing JSON")
		return
	}

	hashedPassword, err := auth.HashPassword(params.Password)
	if err != nil {
		respondWithError(w, 500, "Error hashing password")
		return
	}

	user, err := apiCfg.DB.CreateUser(r.Context(), database.CreateUserParams{
		ID:           uuid.New(),
		CreatedAt:    time.Now().UTC(),
		UpdatedAt:    time.Now().UTC(),
		Username:     params.Username,
		Email:        params.Email,
		PasswordHash: hashedPassword,
	})

	if err != nil {
		respondWithError(w, 409, "User with this email or username already exists")
		return
	}

	respondWithJSON(w, 201, databaseUserToUser(user))
}

func (apiCfg *apiConfig) handlerLogin(w http.ResponseWriter, r *http.Request) {
	type parameters struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	decoder := json.NewDecoder(r.Body)
	params := parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		respondWithError(w, 400, "Error parsing JSON")
		return
	}

	user, err := apiCfg.DB.GetUserByEmail(r.Context(), params.Email)
	if err != nil {
		respondWithError(w, 401, "Invalid email or password")
		return
	}

	err = auth.CheckPasswordHash(params.Password, user.PasswordHash)
	if err != nil {
		respondWithError(w, 401, "Invalid email or password")
		return
	}

	secret := os.Getenv("JWT_SECRET")
    if secret == "" {
        respondWithError(w, 500, "JWT Secret not found on server")
        return
    }

	token, err := auth.MakeJWT(user.ID, secret, time.Hour)
    if err != nil {
        respondWithError(w, 500, "Error creating access token")
        return
    }

	respondWithJSON(w, 200, struct {
        User  User   `json:"user"`
        Token string `json:"token"`
    }{
        User:  databaseUserToUser(user),
        Token: token,
    })
}
