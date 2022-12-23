require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");


const connection = mysql.createConnection({
  host: 'host.docker.internal',
  user: 'root',
  database: 'atelier',
  password: 'atelier',
  port: '3307'
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log("Successfully Connected to DB"))
  .catch((err) => console.log(err));

module.exports = db;
