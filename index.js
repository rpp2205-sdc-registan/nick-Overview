const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require("fs");
const { parse } = require("csv-parse");
const axios = require("axios");
const port = 3000;

const etl = require("./DataBase/etl.js")


app.use(bodyParser.json())

app.get('/', (req, res) => {
  // etl.getProducts()
  // etl.getFeatures()
  //etl.getStyles()
  // etl.getPhotosOne()
  // etl.getPhotosTwo()
  // etl.getPhotosThree()
  etl.getPhotosFour()
  // etl.getSkus()
  res.send("In Progress...");
})

app.get('/products', (req, res) => {
  fs.readFile("./Data_Set/product.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var productsResult = [];
      for (var i = 1; i < rows.length; i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        productsResult.push(containerObj);
      }
      res.send(productsResult);
    })
  })
})

app.get('/features', (req, res) => {
  fs.readFile("./Data_Set/features.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var featuresResult = [];
      for (var i = 1; i < rows.length; i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        featuresResult.push(containerObj);
      }
      res.send(featuresResult);
    })
  })
})

app.get('/photosOne', (req, res) => {
  fs.readFile("./Data_Set/photos.csv", (err, data) => {
    parse(data, {columns: false, trim: true, quote: '' }, (err, rows) => {
      var photoResult = [];
      for (var i = 1; i < Math.floor(rows.length/4 + 1); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        photoResult.push(containerObj);
      }
      console.log("SENDING DATA")
      res.send(photoResult);
    })
  })
})

app.get('/photosTwo', (req, res) => {
  fs.readFile("./Data_Set/photos.csv", (err, data) => {
    parse(data, {columns: false, trim: true, quote: '' }, (err, rows) => {
      var photoResult = [];
      for (var i = Math.ceil(rows.length/4); i < Math.floor(rows.length/2 + 1); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        photoResult.push(containerObj);
      }
      console.log("SENDING DATA")
      res.send(photoResult);
    })
  })
})

app.get('/photosThree', (req, res) => {
  fs.readFile("./Data_Set/photos.csv", (err, data) => {
    parse(data, {columns: false, trim: true, quote: '' }, (err, rows) => {
      var photoResult = [];
      for (var i = Math.ceil(rows.length/2); i < Math.floor((rows.length/4 * 3) + 1); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        photoResult.push(containerObj);
      }
      console.log("SENDING DATA")
      res.send(photoResult);
    })
  })
})

app.get('/photosFour', (req, res) => {
  fs.readFile("./Data_Set/photos.csv", (err, data) => {
    parse(data, {columns: false, trim: true, quote: '' }, (err, rows) => {
      var photoResult = [];
      for (var i = Math.ceil(rows.length/4 * 3); i < Math.floor(rows.length); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        photoResult.push(containerObj);
      }
      console.log("SENDING DATA")
      res.send(photoResult);
    })
  })
})

app.get('/skus', (req, res) => {
  fs.readFile("./Data_Set/skus.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var skusResult = [];
      for (var i = 1; i < rows.length; i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        skusResult.push(containerObj);
      }
      res.send(skusResult);
    })
  })
})

app.get('/styles', (req, res) => {
  fs.readFile("./Data_Set/styles.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var stylesResult = [];
      for (var i = 1; i < rows.length; i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        stylesResult.push(containerObj);
      }
      res.send(stylesResult);
    })
  })
})

// app.get('/test', (req, res) => {
//   fs.readFile("./Data_Set/test.csv", (err, data) => {
//     parse(data, {columns: false, trim: true}, (err, rows) => {
//       var testData = [];
//       for (var i = 1; i < rows.length; i++) {
//         var containerObj = {};
//         containerObj[rows[0][0]] = rows[i][0];
//         containerObj[rows[0][1]] = rows[i][1];
//         containerObj[rows[0][2]] = rows[i][2];
//         containerObj[rows[0][3]] = rows[i][3];
//         containerObj[rows[0][4]] = rows[i][4];
//         testData.push(containerObj);
//       }
//       res.send(testData);
//     })
//   })



// })

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})