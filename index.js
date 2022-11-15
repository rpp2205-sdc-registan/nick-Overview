const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require("fs");
const csvParser = require("csv-parser");
const axios = require("axios");
const port = 3000;

const etl = require("./DataBase/etl.js")
//const products = require("./Data_Set/product.csv")
// const testData = require("./Data_Set/test.csv")

const result = [];

// fs.createReadStream("./Data_Set/test.csv")
//   .pipe(csvParser())
//   .on("data", (data) => {
//     result.push(data);
//   })
//   .on("end", () => {
//     console.log(result)
//   });


app.use(bodyParser.json())

app.get('/', (req, res) => {
  etl.getProducts();
  res.send("SUCCESS!!!");
})

app.get('/products', (req, res) => {
  fs.createReadStream("./Data_Set/test.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", () => {
    res.send(result)
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})