-- name: CreateGameHistory :one
INSERT INTO game_history (
    user_id,
    puzzle_digits,
    solution_expression,
    is_solved,
    time_taken_ms,
    is_daily_challenge
) VALUES (
    $1, $2, $3, $4, $5, $6
)
RETURNING *;

-- name: GetUserHistory :many
SELECT 
    id, 
    puzzle_digits, 
    solution_expression, 
    is_solved, 
    time_taken_ms, 
    created_at
FROM game_history
WHERE user_id = $1
ORDER BY created_at DESC
LIMIT $2 OFFSET $3;

-- name: CountUserHistory :one
SELECT COUNT(*) 
FROM game_history 
WHERE user_id = $1;

-- name: GetGlobalRecentGames :many
SELECT gh.id, u.username, gh.time_taken_ms, gh.created_at
FROM game_history gh
JOIN users u ON gh.user_id = u.id
WHERE gh.is_solved = true
ORDER BY gh.created_at DESC
LIMIT 10;
