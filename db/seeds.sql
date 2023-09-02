INSERT INTO department (dep_name) VALUES
(
     "bath"
),
(
    "cleaning"
);

INSERT INTO roles ( id,title,salary,department_id) VALUES
(
1,"bath_worder",20.00,1
),
(
2, "cleaning expert", 300.29, 2
);
     

INSERT INTO employee ( id,first_name,last_name,role_id, manager_id ) VALUES
(
     1,"alex","lara", 1, 2
),
(
     2,"carl", "jr",2,2
);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;