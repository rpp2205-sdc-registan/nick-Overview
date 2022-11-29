const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require("fs");
const { parse } = require("csv-parse");
const axios = require("axios");
const port = 3000;

const etl = require("./DataBase/etl.js")


app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})