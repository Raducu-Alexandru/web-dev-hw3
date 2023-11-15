-- Create users table

CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255),
        role VARCHAR(255),
        created_at TIMESTAMP
    );

-- Create follows table with foreign keys

CREATE TABLE
    follows (
        following_user_id INT,
        followed_user_id INT,
        created_at TIMESTAMP,
        FOREIGN KEY (following_user_id) REFERENCES users(id),
        FOREIGN KEY (followed_user_id) REFERENCES users(id)
    );

-- Create posts table with foreign key

CREATE TABLE
    posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        body TEXT,
        user_id INT,
        status VARCHAR(255),
        created_at TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );