package main

import "net/http"

type Response struct {
	Response string `json:"response"`
}

func handlerReadiness(w http.ResponseWriter, r *http.Request) {
	respondWithJSON(w, 200, Response {
		Response: "ok",
	})
}
