-- +goose Up
CREATE INDEX idx_user_stats_wins ON user_stats(total_wins DESC);
CREATE INDEX idx_user_stats_streak ON user_stats(current_streak DESC);
CREATE INDEX idx_history_user ON game_history(user_id);

-- +goose Down
DROP INDEX IF EXISTS idx_history_user;
DROP INDEX IF EXISTS idx_user_stats_streak;
DROP INDEX IF EXISTS idx_user_stats_wins;
