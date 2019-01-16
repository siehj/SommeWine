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
  "rating" INTEGER,  
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
CREATE TABLE "user_wines" (
  "id" SERIAL,
  "user_id" INTEGER REFERENCES users ("id"),
  "wine_id" INTEGER REFERENCES wines ("id"),
  "notes" text, 
  "photo" text,
  PRIMARY KEY ("id")
);

CREATE TABLE "user_preferences" (
  "id" SERIAL,
  "user_id" INTEGER REFERENCES users ("id"), 
  "preference_id" INTEGER REFERENCES "preferences" ("id"),
  PRIMARY KEY ("id")
);

CREATE TABLE "preferences" (
  "id" serial, 
  "note" text,
  "category" text,
  "region" text,
  PRIMARY KEY ("id")
);

INSERT INTO preferences (note, category) VALUES ('Red', 'type');
INSERT INTO preferences (note, category) VALUES ('White', 'type');
INSERT INTO preferences (note, category) VALUES ('Rose', 'type');
INSERT INTO preferences (note, category) VALUES ('Champagne', 'type');
INSERT INTO preferences (note, category) VALUES ('Sweet', 'flavor');
INSERT INTO preferences (note, category) VALUES ('Dry', 'flavor');
INSERT INTO preferences (note, category) VALUES ('Floral', 'flavor');
INSERT INTO preferences (note, category) VALUES ('Fruity', 'flavor');
INSERT INTO preferences (note, category) VALUES ('Spicy', 'flavor');
INSERT INTO preferences (note, category) VALUES ('Nuts/Vanilla', 'flavor');
INSERT INTO preferences (note, category) VALUES ('Woody', 'flavor');
INSERT INTO preferences (note, category, region) VALUES ('United States', 'Country', 'North America');
INSERT INTO preferences (note, category, region) VALUES ('Canada', 'Country', 'North America');
INSERT INTO preferences (note, category, region) VALUES ('Argentina', 'Country', 'South America');
INSERT INTO preferences (note, category, region) VALUES ('El Salvador', 'Country', 'South America');
INSERT INTO preferences (note, category, region) VALUES ('Puerto Rico', 'Country', 'South America');
INSERT INTO preferences (note, category, region) VALUES ('France', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Austria', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Belgium', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Denmark', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Estonia', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Germany', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Hungary', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Ireland', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Italy', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Malta', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Netherlands', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Spain', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Switzerland', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('United Kingdom', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Norway', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Poland', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Portugal', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Russia', 'Country', 'Europe');
INSERT INTO preferences (note, category, region) VALUES ('Hong Kong', 'Country', 'Asia');
INSERT INTO preferences (note, category, region) VALUES ('Japan', 'Country', 'Asia');
INSERT INTO preferences (note, category, region) VALUES ('Malaysia', 'Country', 'Asia');
INSERT INTO preferences (note, category, region) VALUES ('Singapore', 'Country', 'Asia');
INSERT INTO preferences (note, category, region) VALUES ('Austalia', 'Country', 'Oceania');
INSERT INTO preferences (note, category, region) VALUES ('New Zealand', 'Country', 'Oceania');




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
