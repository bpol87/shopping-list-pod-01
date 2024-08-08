-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Database name is: fs-react-shopping

CREATE TABLE shoppingList (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL(65, 2) NOT NULL,
    "unit" VARCHAR(20)
);

INSERT INTO shoppingList
("name", "quantity", "unit")
VALUES
('bananas', 1, 'bunch'),
('avocado', 4, 'whole'),
('blueberries', 1, 'clamshell'),
('lemons', 5, 'whole'),
('bread (pumpernickel)', 3, 'loaves'),
('bleach', 1, 'gallon');
