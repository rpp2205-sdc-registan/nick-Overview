require("dotenv").config();
const mysql = require("mysql2");
const Promise = require("bluebird");


const connection = mysql.createConnection({
  host: 'ec2-34-209-246-59.us-west-2.compute.amazonaws.com',
  port: '3307',
  user: 'root',
  database: 'atelier',
  password: 'atelier',
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log("Successfully Connected to DB"))
  .catch((err) => console.log(err));

module.exports = db;

//172.31.6.145
//3307
