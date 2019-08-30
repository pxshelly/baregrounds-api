-- DROP DATABASE IF EXISTS baregrounds; 

-- CREATE DATABASE baregrounds;

-- \c baregrounds; 

CREATE TABLE disposal (
  item_id SERIAL PRIMARY KEY,
  item VARCHAR,
  bin VARCHAR
);

\copy disposal(item,bin) FROM '/Users/shelly/Desktop/baregrounds/database/data.csv' DELIMITER ',' CSV;