DROP DATABASE IF EXISTS restaurant_reservations;

CREATE DATABASE restaurant_reservations;

USE restaurant_reservations;

CREATE TABLE tables(
    id INT NOT NULL AUTO_INCREMENT,
    table_type VARCHAR(30) NOT NULL,
    seats INT NOT NULL,
    PRIMARY KEY (id),
);

CREATE TABLE reservation(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    party_number INT NULL,
    PRIMARY KEY (id)
);