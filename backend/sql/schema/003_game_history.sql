-- +goose Up
CREATE TABLE game_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    puzzle_digits TEXT NOT NULL,
    solution_expression TEXT NOT NULL,
    is_solved BOOLEAN DEFAULT FALSE,
    time_taken_ms INT NOT NULL,
    is_daily_challenge BOOLEAN DEFAULT FALSE
);

-- +goose Down
DROP TABLE IF EXISTS game_history;
