DROP DATABASE IF EXISTS sommeWine;

-- CREATE DATABASE sommeWine;

-- USE sommeWine;

CREATE TABLE "wines" (
  "id" SERIAL,
  "name" text, 
  "region" text,
  "winery" text, 
  "price" INTEGER,
  "vintage" INTEGER,
  "type" text,
  "link" text,
  "image" text,
  "rating" INTEGER  
  PRIMARY KEY ("id")
);

CREATE TABLE "users" (
  "id" SERIAL,
  "username" text,
  "password" text,
  "name" text,
  "email" text,
  PRIMARY KEY ("id")
);
  -- "firstTime" boolean,

-- essencially a user's favorite wines 
CREATE TABLE user_wines (
  user_id int,
  wine_id int,
  notes text, 
  photo text
)

CREATE TABLE user_preferences (
  user_id int, 
  preference_id int
)

CREATE TABLE preferences (
  "id" serial, 
  "note" text,
  PRIMARY KEY ("id")
);

INSERT INTO preferences (note) VALUES ('Red');
INSERT INTO preferences (note) VALUES ('White');
INSERT INTO preferences (note) VALUES ('Rose');
INSERT INTO preferences (note) VALUES ('Sweet');
INSERT INTO preferences (note) VALUES ('Dry');
INSERT INTO preferences (note) VALUES ('Floral');
INSERT INTO preferences (note) VALUES ('Fruity');
INSERT INTO preferences (note) VALUES ('Spicy');
INSERT INTO preferences (note) VALUES ('Nuts/Vanilla');
INSERT INTO preferences (note) VALUES ('Woody');
INSERT INTO preferences (note) VALUES ('France');
INSERT INTO preferences (note) VALUES ('United States');
INSERT INTO preferences (note) VALUES ('Argentina');
INSERT INTO preferences (note) VALUES ('Canada');
INSERT INTO preferences (note) VALUES ('El Salvador');
INSERT INTO preferences (note) VALUES ('Puerto Rico');
INSERT INTO preferences (note) VALUES ('Austria');
INSERT INTO preferences (note) VALUES ('Belgium');
INSERT INTO preferences (note) VALUES ('Denmark');
INSERT INTO preferences (note) VALUES ('Estonia');
INSERT INTO preferences (note) VALUES ('France');
INSERT INTO preferences (note) VALUES ('Germany');
INSERT INTO preferences (note) VALUES ('Great Britain');
INSERT INTO preferences (note) VALUES ('Hungary');
INSERT INTO preferences (note) VALUES ('Irelan');
INSERT INTO preferences (note) VALUES ('Italy');
INSERT INTO preferences (note) VALUES ('Malta');
INSERT INTO preferences (note) VALUES ('Netherlands');
INSERT INTO preferences (note) VALUES ('Spain');
INSERT INTO preferences (note) VALUES ('Switzerland');
INSERT INTO preferences (note) VALUES ('United Kingdom');
INSERT INTO preferences (note) VALUES ('Norway');
INSERT INTO preferences (note) VALUES ('Poland');
INSERT INTO preferences (note) VALUES ('Portugal');
INSERT INTO preferences (note) VALUES ('Russia');
INSERT INTO preferences (note) VALUES ('Hong Kong');
INSERT INTO preferences (note) VALUES ('Japan');
INSERT INTO preferences (note) VALUES ('Malaysia');
INSERT INTO preferences (note) VALUES ('Singapore');
INSERT INTO preferences (note) VALUES ('Austalia');
INSERT INTO preferences (note) VALUES ('New Zealand');




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
