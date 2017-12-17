### Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (500) NOT NULL,
	devoured BOOLEAN,
	date_burger TIMESTAMP,
	PRIMARY KEY (id)
);