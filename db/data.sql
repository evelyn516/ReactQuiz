DROP TABLE IF EXISTS userScore;

CREATE TABLE userScore (
    id serial PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    score int NOT NULL,
    frequency int NOT NULL.
);

