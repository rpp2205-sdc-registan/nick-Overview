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
