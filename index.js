const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require("fs");
const { parse } = require("csv-parse");
// const csvParser = require("csv-parser");
const axios = require("axios");
const port = 3000;

const etl = require("./DataBase/etl.js")
//const products = require("./Data_Set/product.csv")
// const testData = require("./Data_Set/test.csv")

// const productsResult = [];
// const featuresResult = [];
// const photosResult = [];
// const skusResult = [];
// const stylesResult = [];
// const testResult = [];


app.use(bodyParser.json())

app.get('/', (req, res) => {
  // etl.getProducts()
  // etl.getFeatures()
  // etl.getStyles()
  // etl.getPhotos()
  // etl.getSkus()
  res.send("In Progress...");
})

app.get('/products', (req, res) => {
  var productsResult = [];
  fs.createReadStream("./Data_Set/product.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    productsResult.push(data);
  })
  .on("end", () => {
    //res.send('Got Products')
    //console.log(productsResult);
    res.send(productsResult)
  });
})

app.get('/features', (req, res) => {
  var featuresResult = [];
  fs.createReadStream("./Data_Set/features.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    featuresResult.push(data);
  })
  .on("end", () => {
    //res.send('Got Features')
    res.send(featuresResult)
  });
})

app.get('/photos', (req, res) => {
  var photosResult = [];
  fs.createReadStream("./Data_Set/photos.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    photosResult.push(data);
  })
  .on("end", () => {
   console.log(photosResult);
    // res.send(photosResult);
  });
})

app.get('/skus', (req, res) => {
  var skusResult = [];
  fs.createReadStream("./Data_Set/skus.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    skusResult.push(data);
  })
  .on("end", () => {
    // res.send('Got SKUS')
    res.send(skusResult)
  });
})

app.get('/styles', (req, res) => {
  var stylesResult = [];
  fs.createReadStream("./Data_Set/styles.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    stylesResult.push(data);
  })
  .on("end", () => {
    //res.send('Got Styles')
    res.send(stylesResult)
  });
})

app.get('/test', (req, res) => {
  fs.readFile("./Data_Set/test.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var testData = [];
      for (var i = 1; i < rows.length; i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        testData.push(containerObj);
      }
      res.send(testData);
    })
  })



})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})