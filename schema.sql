DROP DATABASE IF EXISTS sommeWine;

CREATE DATABASE sommeWine;

USE sommeWine;

-- CREATE TABLE items (
--   id int NOT NULL AUTO_INCREMENT,
--   quantity integer NOT NULL,
--   description varchar(50) NOT NULL,
--   PRIMARY KEY (ID)
-- );

CREATE TABLE wines (
  id int AUTO_INCREMENT,
  name text, 
  region text,
  varietal text, 
  msrp int,
  type text,
  link text,
  image text,
  vintage int,
  rating int  
  PRIMARY KEY (id)
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
