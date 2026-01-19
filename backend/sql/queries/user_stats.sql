-- name: GetUserStats :one
SELECT * FROM user_stats WHERE user_id = $1;

-- name: UpdateUserStatsWin :exec
UPDATE user_stats
SET 
    total_games_played = total_games_played + 1,
    total_wins = total_wins + 1,
    current_streak = current_streak + 1,
    max_streak = GREATEST(max_streak, current_streak + 1),
    updated_at = NOW()
WHERE user_id = $1;

-- name: UpdateUserStatsLoss :exec
UPDATE user_stats
SET 
    total_games_played = total_games_played + 1,
    current_streak = 0,
    updated_at = NOW()
WHERE user_id = $1;

-- name: GetLeaderboardByWins :many
SELECT u.username, s.total_wins, s.total_games_played
FROM user_stats s
JOIN users u ON s.user_id = u.id
ORDER BY s.total_wins DESC
LIMIT 10;

-- name: GetLeaderboardByStreak :many
SELECT u.username, s.current_streak
FROM user_stats s
JOIN users u ON s.user_id = u.id
ORDER BY s.current_streak DESC
LIMIT 10;
