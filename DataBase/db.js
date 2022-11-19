require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "atelier",
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .catch((err) => console.log(err));

module.exports = db;

// LOAD DATA INFILE 'Data_Set/product.csv'
// INTO TABLE 'products'
// FIELDS TERMINATED BY ','
// ENCLOSED BY '"'
// LINES TERMINATED BY '\n'
// IGNORE 1 ROWS;