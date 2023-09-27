CREATE TABLE employee(
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR (40),
    birth_day DATE,
    sex VARCHAR(1),
    salary INT,
    super_id INT,
    branch_id INT
);
CREATE TABLE branch(
    branch_id INT primary key,
    branch_name VARCHAR(40),
    mgr_id INT,
    mgr_start_date DATE,
    FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
);

ALTER TABLE employee
ADD FOREIGN KEY(branch_id)
REFERENCES branch(branch_id) ON DELETE SET NULL;

ALTER TABLE employee
ADD FOREIGN KEY(super_id) REFERENCES employee(emp_id) ON DELETE SET NULL;

CREATE TABLE client(
    client_id INT PRIMARY KEY,
    client_name VARCHAR(40),
    branch_id INT,
    FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE SET NULL
);
SELECT * FROM client;

CREATE TABLE work_with(
    emp_id INT, 
    client_id INT,
    total_sales INT,
    PRIMARY KEY(emp_id,client_id),
    FOREIGN KEY(emp_id) REFERENCES employee(emp_id) ON DELETE CASCADE,
    FOREIGN KEY(client_id) REFERENCES client(client_id) ON DELETE CASCADE
);
SELECT * FROM work_with;

CREATE TABLE branch_supplier(
    branch_id INT,
    supplier_name VARCHAR(40),
    suplier_type VARCHAR(40),
    PRIMARY KEY(branch_id,supplier_name),
    FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE CASCADE
);
SELECT * FROM branch_supplier;

INSERT INTO employee VALUES(100,"David","wallece","1997-11-17","m",250000,NULL, NULL);
INSERT INTO branch VALUES (1,"corparate",100,"2006-02-09");
UPDATE employee
SET branch_id =1
WHERE emp_id=100;

INSERT INTO employee VALUES(101, 'Jan', 'Levinson', '1961-05-11', 'F', 110000, 100, 1);
INSERT INTO employee VALUES(102,'Michael', 'Scott', '1964-03-15', 'M',7500,100,NULL);
INSERT INTO branch VALUES(2,"scranton",102,"1992-04-06");
UPDATE employee
SET branch_id=2
WHERE emp_id=102;
INSERT INTO employee VALUES(103, 'Angela', 'Martin', '1971-06-25', 'F', 63000, 102, 2);
INSERT INTO employee VALUES(104, 'Kelly', 'Kapoor', '1980-02-05', 'F', 55000, 102, 2);
INSERT INTO employee VALUES(105, 'Stanley', 'Hudson', '1958-02-19', 'M', 69000, 102, 2);

INSERT INTO employee VALUES(106, 'Josh', 'Porter', '1969-09-05', 'M', 78000, 100, NULL);

INSERT INTO branch VALUES(3, 'Stamford', 106, '1998-02-13');

UPDATE employee
SET branch_id = 3
WHERE emp_id = 106;
INSERT INTO employee VALUES(107, 'Andy', 'Bernard', '1973-07-22', 'M', 65000, 106, 3);
INSERT INTO employee VALUES(108, 'Jim', 'Halpert', '1978-10-01', 'M', 71000, 106, 3);

INSERT INTO branch_supplier VALUES(2, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier VALUES(2, 'Uni-ball', 'Writing Utensils');
INSERT INTO branch_supplier VALUES(3, 'Patriot Paper', 'Paper');
INSERT INTO branch_supplier VALUES(2, 'J.T. Forms & Labels', 'Custom Forms');
INSERT INTO branch_supplier VALUES(3, 'Uni-ball', 'Writing Utensils');
INSERT INTO branch_supplier VALUES(3, 'Hammer Mill', 'Paper');
INSERT INTO branch_supplier VALUES(3, 'Stamford Lables', 'Custom Forms');

INSERT INTO client VALUES(400, 'Dunmore Highschool', 2);
INSERT INTO client VALUES(401, 'Lackawana Country', 2);
INSERT INTO client VALUES(402, 'FedEx', 3);
INSERT INTO client VALUES(403, 'John Daly Law, LLC', 3);
INSERT INTO client VALUES(404, 'Scranton Whitepages', 2);
INSERT INTO client VALUES(405, 'Times Newspaper', 3);
INSERT INTO client VALUES(406, 'FedEx', 2);

INSERT INTO work_with VALUES(105, 400, 55000);
INSERT INTO work_with VALUES(102, 401, 267000);
INSERT INTO work_with VALUES(108, 402, 22500);
INSERT INTO work_with VALUES(107, 403, 5000);
INSERT INTO work_with VALUES(108, 403, 12000);
INSERT INTO work_with VALUES(105, 404, 33000);
INSERT INTO work_with VALUES(107, 405, 26000);
INSERT INTO work_with VALUES(102, 406, 15000);
INSERT INTO work_with VALUES(105, 406, 130000);
SELECT * FROM employee;
SELECT * FROM  branch;
SELECT * FROM  branch_supplier;
SELECT * FROM  work_with;
--find all employees order by salary etc
SELECT * FROM employee 
ORDER by emp_id;
--find all employees order by salary etc from DESC AND ASC
SELECT * FROM employee 
ORDER by salary ASC;
--find first 5 employees in the table
SELECT * FROM employee
LIMIT 5;
SELECT * FROM employee
ORDER BY salary A DESC
LIMIT 5;
--find the first and the last names of the employee
SELECT first_name,last_name FROM employee;
SELECT salary FROM employee;
--find the fornames and surnames of all employees
SELECT first_name AS FORNAME,last_name AS SURNAME FROM employee;
--find all the diffrence in gender
SELECT DISTINCT sex FROM employee; 
--SQL FUNCTIONS
--find the number of employees
SELECT COUNT(emp_id) FROM employee;
--how many employees has supervisors
SELECT COUNT(super_id) FROM employee;
--find the female employees born in 1970
SELECT COUNT(emp_id) FROM employee
WHERE  sex="f" AND birth_day > "1971-01-01";
--find the average of all employee salary
SELECT AVG(salary) FROM employee;
--find the average of all employee salary who are males
SELECT AVG(salary) FROM employee
WHERE sex="m";
--find the sum of all employees's salary
SELECT SUM(salary) FROM employee;
--find the sum of all employees's salary who are males
SELECT SUM(salary) FROM employee
WHERE sex="m";
--FUNCTION: AGREGATION---is where we can use these functions and display in ahelthy way;
--find out how many males and females they are
SELECT COUNT(sex) FROM employee;
--find out how many males and females they are in seperate ;
SELECT COUNT(sex), sex  FROM employee
GROUP BY sex;
--find the total sales in each salesman
SELECT SUM(total_sales) emp_id FROM work_with
GROUP BY emp_id;
--find the total sales in each client
SELECT SUM(total_sales), client_id FROM work_with
GROUP BY client_id;
-- WHILDCARDS
-- % =any # charectors, _= one charector
--find any client's who are in LLC
SELECT * FROM client 
WHERE client_name LIKE '%LLC';
--find any branch supplier who are in label business
SELECT * FROM branch_supplier
WHERE supplier_name LIKE "%labels%";
--find any employee born in octoper
SELECT * FROM employee
WHERE birth_day LIKE '____-10%';
SELECT * FROM employee;
--find any client who are schools
SELECT * FROM client
WHERE client_name LIKE '%school%';
-- FUNCTION:UNION
--find a list of employee and branch names
SELECT first_name FROM employee;
SELECT branch_name FROM branch;
--other ways to do by using UNION KEY word;
SELECT first_name FROM employee
UNION
SELECT branch_name FROM branch;
--find a list of employee  branch names and client name
SELECT first_name FROM employee
UNION
SELECT branch_name FROM branch
UNION
SELECT client_name FROM client;
--find a list of employee names (by chenging the name) branch names and client name
SELECT first_name AS company_name FROM employee
UNION
SELECT branch_name FROM branch
UNION
SELECT client_name FROM client;

--find a list of  branch names and client name with branch ids

SELECT supplier_name,branch_supplier.branch_id FROM branch_supplier
UNION
SELECT client_name, client.branch_id FROM client;
--find all mony earned or spent by the company
SELECT salary FROM employee
UNION
SELECT total_sales FROM work_with;
--JOINS
INSERT INTO branch VALUES(4,"BUFFALO",NULL,NULL);
SELECT * FROM branch;
SELECT employee.emp_id,employee.first_name,branch.branch_name FROM employee
JOIN branch ON employee.emp_id=branch.mgr_id;
--onother way
SELECT employee.emp_id, employee.first_name ,branch.branch_name FROM employee
LEFT JOIN branch ON employee.emp_id=branch.mgr_id;
SELECT employee.emp_id, employee.first_name ,branch.branch_name FROM employee
RIGHT JOIN branch ON employee.emp_id=branch.mgr_id;

--NESTED QUERRY
-- find names of all employees who have sold over 30,000 to asingle client;
SELECT employee.first_name,employee.last_name FROM employee
WHERE employee.emp_id IN(
SELECT work_with.emp_id from work_with
WHERE work_with.total_sales >30000
);
--  Find all clients who are handled by the branches that micheal scott manages
   --asume that you now micheal's id

SELECT client.client_name FROM client
WHERE  client.branch_id=(
   SELECT branch.branch_id FROM branch
   WHERE branch.mgr_id=102
);
--you can limit to one branch
SELECT client.client_name FROM client
WHERE  client.branch_id=(
   SELECT branch.branch_id FROM branch
   WHERE branch.mgr_id=102
   LIMIT 1
);
--DELETING
-- Deleting micheal scotta from the database
   --What is the diifrence btw set NULL and CASCADE 
     --SET NULL
     CREATE TABLE branch(
    branch_id INT primary key,
    branch_name VARCHAR(40),
    mgr_id INT,
    mgr_start_date DATE,
    FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
);
    DELETE FROM employee
    WHERE emp_id=102;

    SELECT * FROM branch;
    SELECT * FROM employee;
    -- CASCADE
    CREATE TABLE branch_supplier(
    branch_id INT,
    supplier_name VARCHAR(40),
    suplier_type VARCHAR(40),
    PRIMARY KEY(branch_id,supplier_name),
    FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE CASCADE
);
    DELETE FROM branch
    WHERE branch_id=2;

    SELECT * FROM branch;
    SELECT * FROM branch_supplier;

--TRIGGER
CREATE TABLE trigger_test(
    MESSASGE VARCHAR(100)
);

--CREATE
--     TRIGGER `event_name` BEFORE/AFTER INSERT/UPDATE/DELETE
--     ON `database`.`table`
--     FOR EACH ROW BEGIN
-- 		-- trigger body
-- 		-- this code is applied to every
-- 		-- inserted/updated/deleted row
--     END;


INSERT INTO employee VALUES(109,"oscar","martinez",'1968-02-19',"m",69000,106,3);
select*from trigger_test;

-- CREATE TRIGGER my_trigger BEFORE INSERT ON employee FOR EACH ROW BEGIN INSERT INTO trigger_test VALUES(NEW.first_name); END$$











