DROP DATABASE IF EXISTS political_quiz_db;
CREATE DATABASE political_quiz_db;

DROP DATABASE IF EXISTS political_quiz_db;
CREATE DATABASE political_quiz_db;

USE political_quiz_db;

CREATE TABLE user_results
(
  id INTEGER(11)AUTO_INCREMENT NOT NULL,
  complete BOOLEAN DEFAULT false,
  result VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

  SELECT * FROM user_results;

CREATE TABLE questions
(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  question VARCHAR(200),
  category VARCHAR(20),
  PRIMARY KEY (id)
);

  SELECT * FROM questions
