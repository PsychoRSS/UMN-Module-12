DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;

USE store_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT ,
    dep_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE roles (
    id INT NOT NULL,
    title VARCHAR(30) NOT null,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY(role_id)
    REFERENCES roles(id)
);

