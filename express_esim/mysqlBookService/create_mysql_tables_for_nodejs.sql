# create database nodedemo;
use nodedemo;

DROP TABLE if exists Book;

CREATE TABLE Book (id INTEGER NOT NULL AUTO_INCREMENT, bid INTEGER, name VARCHAR(255), price DECIMAL(6,2), authors VARCHAR(255), PRIMARY KEY ( id ));
Insert into Book (bid, name, price, authors) values (1, "Core Java", 26.99, "Cay Horstmann");
Insert into Book (bid, name, price, authors) values (2, "JavaScript Ninja", 33.50, "John Resig");
Insert into Book (bid, name, price, authors) values (3, "Thinking Of Java", 19.95, "Bruce Eckel"); 
Insert into Book (bid, name, price, authors) values (4, "HTML5 Missing Manual", 34.95, "Matthew MacDonald");
Insert into Book (bid, name, price, authors) values (5, "Pro JPA 2", 38.50, "Mike Keith");