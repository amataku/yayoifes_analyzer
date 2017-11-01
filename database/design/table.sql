CREATE TABLE customer(
  id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- ID
  visit_date DATETIME NOT NULL, -- 来た時刻
  sex ENUM('female', 'male', 'neither'), -- 性別
  age INT NOT NULL -- 年齢
);

