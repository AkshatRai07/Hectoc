-- +goose Up
-- +goose StatementBegin
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';
-- +goose StatementEnd

-- +goose StatementBegin
CREATE OR REPLACE FUNCTION create_user_stats_row()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO user_stats (user_id) VALUES (NEW.id);
    RETURN NEW;
END;
$$ language 'plpgsql';
-- +goose StatementEnd

CREATE TRIGGER update_users_modtime BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_stats_modtime BEFORE UPDATE ON user_stats FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER on_auth_user_created AFTER INSERT ON users FOR EACH ROW EXECUTE PROCEDURE create_user_stats_row();

-- +goose Down
DROP TRIGGER IF EXISTS on_auth_user_created ON users;
DROP TRIGGER IF EXISTS update_stats_modtime ON user_stats;
DROP TRIGGER IF EXISTS update_users_modtime ON users;
DROP FUNCTION IF EXISTS create_user_stats_row;
DROP FUNCTION IF EXISTS update_updated_at_column;
