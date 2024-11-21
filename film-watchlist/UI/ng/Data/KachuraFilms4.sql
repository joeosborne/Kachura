-- Creating the database (if you are pasting this into the SQLite shell)
PRAGMA foreign_keys = ON;


DROP TABLE IF EXISTS FilmList_Film;
DROP TABLE IF EXISTS Film_Genre;
DROP TABLE IF EXISTS FilmList;
DROP TABLE IF EXISTS Genre;
DROP TABLE IF EXISTS Film;
DROP TABLE IF EXISTS User;


-- Film Table
CREATE TABLE IF NOT EXISTS Film (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    original_language TEXT NOT NULL,
    title TEXT NOT NULL,
    genres TEXT,
    overview TEXT,
    percentage_rating REAL CHECK(percentage_rating BETWEEN 0 AND 100),
    poster_path TEXT,
    release_date DATE
);

-- User Table - contains typical fields for registered users
CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT 1
);

-- Genre Table - storing common genres
CREATE TABLE IF NOT EXISTS Genre (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    description TEXT
);

-- Intermediate table to handle the many-to-many relationship between Film and Genre
CREATE TABLE IF NOT EXISTS Film_Genre (
    film_id INTEGER,
    genre_id INTEGER,
    FOREIGN KEY (film_id) REFERENCES Film(id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES Genre(id) ON DELETE CASCADE,
    PRIMARY KEY (film_id, genre_id)
);

-- FilmList Table - for user-created watchlists
CREATE TABLE IF NOT EXISTS FilmList (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);

-- Intermediate table to link films with FilmList (watchlists)
CREATE TABLE IF NOT EXISTS FilmList_Film (
    film_list_id INTEGER,
    film_id INTEGER,
    FOREIGN KEY (film_list_id) REFERENCES FilmList(id) ON DELETE CASCADE,
    FOREIGN KEY (film_id) REFERENCES Film(id) ON DELETE CASCADE,
    PRIMARY KEY (film_list_id, film_id)
);

-- Insert sample data into tables in the correct order

-- Step 1: Insert sample users
INSERT INTO User (username, email, password) VALUES
('john_doe', 'john.doe@example.com', 'password123'),
('jane_smith', 'jane.smith@example.com', 'securepassword');

-- Step 2: Insert sample genres
INSERT INTO Genre (name, description) VALUES
('Action', 'Fast-paced, high-energy films'),
('Comedy', 'Light-hearted, humorous films'),
('Drama', 'Emotionally-driven, realistic stories'),
('Horror', 'Scary, thriller elements, designed to frighten'),
('Sci-Fi', 'Science-based, futuristic stories'),
('Romance', 'Focus on love and relationships');

-- Step 3: Insert sample films
INSERT INTO Film (original_language, title, genres, overview, percentage_rating, poster_path, release_date) VALUES
('en', 'Example Film 1', 'Action, Comedy', 'An example action-comedy film', 85, '/path/to/poster1.jpg', '2023-01-01'),
('fr', 'Exemple Film 2', 'Drama, Romance', 'An example French drama-romance film', 78, '/path/to/poster2.jpg', '2022-05-15');


-- Step 4: Create user watchlists after users exist in User table
INSERT INTO FilmList (user_id, name) VALUES
(1, 'John''s Favorite Action Films'), -- Using '' to escape the single quote in "John's"
(2, 'Jane''s Rom-Com Collection');


-- Step 5: Link films to genres in the Film_Genre table
INSERT INTO Film_Genre (film_id, genre_id) VALUES
(1, 1), -- Example Film 1 linked with Action
(1, 2), -- Example Film 1 linked with Comedy
(2, 3), -- Example Film 2 linked with Drama
(2, 6); -- Example Film 2 linked with Romance

-- Step 6: Add films to user watchlists in FilmList_Film
INSERT INTO FilmList_Film (film_list_id, film_id) VALUES
(1, 1), -- John's watchlist includes Example Film 1
(2, 2); -- Jane's watchlist includes Example Film 2
