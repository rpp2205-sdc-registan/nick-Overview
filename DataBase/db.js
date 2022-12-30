require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");
const sql = require("../sqlData.js")


const connection = mysql.createConnection({
  host: sql.host,
  port: sql.port,
  user: sql.user,
  database: sql.database,
  password: sql.password,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log("Successfully Connected to DB"))
  .catch((err) => console.log(err));

module.exports = db;

//172.31.6.145
//3307
