DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;


USE employee_db;


SELECT DATABASE();

CREATE TABLE department (
  
  id INT AUTO_INCREMENT PRIMARY KEY,
  
  department_name VARCHAR(30) 
);

CREATE TABLE role (

   id INT AUTO_INCREMENT PRIMARY KEY,

   title VARCHAR(30),

   salary DECIMAL,

   department_id INT
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_name VARCHAR(30)
);