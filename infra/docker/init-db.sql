-- Initialize Kidverse database

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create family accounts table
CREATE TABLE IF NOT EXISTS family_accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create filter rules table
CREATE TABLE IF NOT EXISTS filter_rules (
    id SERIAL PRIMARY KEY,
    rule_type VARCHAR(50) NOT NULL,
    pattern TEXT NOT NULL,
    action VARCHAR(50) NOT NULL,
    priority INTEGER DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create activity log table
CREATE TABLE IF NOT EXISTS activity_log (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    activity_type VARCHAR(100) NOT NULL,
    details JSONB,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_activity_log_user_id ON activity_log(user_id);
CREATE INDEX idx_activity_log_timestamp ON activity_log(timestamp);

-- Insert sample data for development
INSERT INTO filter_rules (rule_type, pattern, action, priority) VALUES
    ('url', 'inappropriate-site.com', 'block', 10),
    ('keyword', 'badword', 'flag', 5),
    ('category', 'violence', 'block', 8)
ON CONFLICT DO NOTHING;