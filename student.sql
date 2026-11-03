-- CREATE DATABASE
CREATE DATABASE IF NOT EXISTS CollegeDB;

USE CollegeDB;

-- CREATE TABLE
DROP TABLE IF EXISTS Student_Practical;

CREATE TABLE Student_Practical (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    email VARCHAR(100)
);

-- INSERT RECORDS
INSERT INTO Student_Practical
(id, name, age, department, email)
VALUES
(1, 'Tejas', 20, 'CSD', 'tejas@gmail.com'),
(2, 'Rahul', 21, 'Computer', 'rahul@gmail.com'),
(3, 'Amit', 22, 'IT', 'amit@gmail.com');

-- READ RECORDS
SELECT * FROM Student_Practical;

-- UPDATE RECORD
UPDATE Student_Practical
SET age = 21
WHERE id = 1;

-- DISPLAY UPDATED RECORDS
SELECT * FROM Student_Practical;

-- DELETE RECORD
DELETE FROM Student_Practical
WHERE id = 3;

-- FINAL OUTPUT
SELECT * FROM Student_Practical;