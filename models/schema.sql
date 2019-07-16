DROP DATABASE IF EXISTS political_quiz_db;
CREATE DATABASE political_quiz_db;

USE political_quiz_db;

CREATE TABLE political_quiz (
  
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
 
 complete BOOLEAN DEFAULT false,

 result VARCHAR(30) NOT NULL,

PRIMARY KEY (id)
);