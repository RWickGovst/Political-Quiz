DROP DATABASE IF EXISTS political_quiz_db;
CREATE DATABASE political_quiz_db;

DROP DATABASE IF EXISTS political_quiz_db;
CREATE DATABASE political_quiz_db;

USE political_quiz_db;

USE political_quiz_db;

CREATE TABLE user_results (
  
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
 
 complete BOOLEAN DEFAULT false,

 result VARCHAR(30) NOT NULL,
q1 VARCHAR(10),
q2 VARCHAR(10),
q3 VARCHAR(10),
q4 VARCHAR(10),
q5 VARCHAR(10),
q6 VARCHAR(10),
q7 VARCHAR(10),
q8 VARCHAR(10),
q9 VARCHAR(10),
q10 VARCHAR(10),
q11 VARCHAR(10),
q12 VARCHAR(10),
q13 VARCHAR(10),
q14 VARCHAR(10),
q15 VARCHAR(10),
q16 VARCHAR(10),
q17 VARCHAR(10),
q18 VARCHAR(10),
q19 VARCHAR(10),
q20 VARCHAR(10),
PRIMARY KEY (id)
);

SELECT * FROM user_results;
-- CREATE TABLE questions (
-- id INTEGER(11) AUTO_INCREMENT NOT NULL,
-- question VARCHAR(200),
-- category VARCHAR(20),
-- rep VARCHAR(10),
-- const VARCHAR(10),
-- green VARCHAR(10),
-- lib VARCHAR(10),
-- dem VARCHAR(10),
-- PRIMARY KEY (id)
-- );

-- SELECT * FROM questions
