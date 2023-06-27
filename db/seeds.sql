INSERT INTO department (department_name)
VALUES ("Sales"),
       ("engineering"),
       ("Quality control"),
       ("Human resources");

 INSERT INTO role (title, salary, department_id)
 VALUES ("marketing", 43000, 1), 
        ("testing", 59000, 2),
        ("debugging", 67000, 3),
        ("case application", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Daniel", "Roh", 2, null),
       ("Steven", "Schrimmer", 3, 1),
       ("Dustin", "Bonilla", 3, 1),
       ("Luke", "DenHartog", 3, 2);