const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require("fs");
const { parse } = require("csv-parse");
const axios = require("axios");
const db = require('./DataBase/db.js')
const port = 3000;


app.use(bodyParser.json())


// app.get('/products/:product_id', (req, res) => {
//   var dataPromises = [];
//   var product_id = Number(req.params.product_id);
//   var productQuery = `SELECT * FROM PRODUCTS WHERE (id = ${product_id})`;
//   var featureQuery = `SELECT * FROM FEATURES WHERE (feats_ref_Id = ${product_id})`;
//   var productData = db.queryAsync(productQuery);
//   var featureData = db.queryAsync(featureQuery);
//   dataPromises.push(productData);
//   dataPromises.push(featureData);

//   Promise.all(dataPromises)
//     .then((results) => {
//       var resultObj = {};
//       var product = results[0][0][0];
//       var featureList = results[1][0];
//       resultObj.id = product.id;
//       resultObj.name = product.name;
//       resultObj.slogan = product.slogan;
//       resultObj.description = product.description;
//       resultObj.category = product.category;
//       resultObj.default_price = '' + product.default_price + '.00';
//       resultObj.features = [];

//       for (var i = 0; i < featureList.length; i++) {
//         var container = {};
//         container.feature = featureList[i].feature;
//         container.value = featureList[i].value;
//         resultObj.features.push(container);
//       }
//       res.send(resultObj);
//     })
// })

//****************************************** */
// REFRACTOR TO MAKE ONE DATA CALL FROM DB
// select * from styles, photos, skus where styles.style_ref_id = 1 and photos.photos_ref_Id = styles.id and skus.skus_ref_Id = styles.id;
//****************************************** */

app.get('/products/:product_id/styles', (req, res) => {
  var dataPromises = [];
  var product_id = Number(req.params.product_id);
  var stylesQuery = `SELECT * FROM STYLES WHERE (style_ref_Id = ${product_id})`;
  var styleData = db.queryAsync(stylesQuery);
  dataPromises.push(styleData);
  Promise.all(dataPromises)
    .then((results) => {
      if (results[0][0].length <= 0) {
        res.send('No Other Styles Found for This Item')
      } else {
        dataPromises = [];
        var styles = results[0][0]
        var ref_id = styles[0].style_ref_Id;
        var photoQuery = `SELECT * FROM PHOTOS WHERE (photos_ref_Id = ${ref_id})`;
        var skuQuery = `SELECT * FROM SKUS WHERE (skus_ref_Id = ${ref_id})`;
        var photoData = db.queryAsync(photoQuery)
        var skuData = db.queryAsync(skuQuery)
        dataPromises.push(photoData);
        dataPromises.push(skuData);

        Promise.all(dataPromises)
          .then((resultsArray) => {
            var resultObj = {};
            resultObj.product_id = '' + product_id;
            resultObj.results = [];
            for (var l = 0; l < styles.length; l++) {
              var styleObj = {}
              styleObj.style_id = styles[l].id;
              styleObj.name = styles[l].name;
              styleObj.original_price = '' + styles[l].original_price + '.00'
              if (styles[l].sale_price === 'null') {
                styleObj.sale_price = null
              } else {
                styleObj.sale_price = '' + styles[l].sale_price + '.00'
              }
              if (styles[l].isDefault > 0) {
                styleObj['default?'] = true;
              } else {
                styleObj['default?'] = false;
              }
              styleObj.photos = [];
              styleObj.skus = {};
              var photos = resultsArray[0][0];
              var skus = resultsArray[1][0];
              for (var i = 0; i < photos.length; i++) {
                var container = {};
                container.thumbnail_url = photos[i].thumbnail_url;
                container.url = photos[i].url;
                styleObj.photos.push(container);
              }
              for (var j = 0; j < skus.length; j++) {
                var sku_id = skus[j].id;
                styleObj.skus[sku_id] = {}
                styleObj.skus[sku_id].quantity = skus[j].quantity;
                styleObj.skus[sku_id].size = skus[j].size;
              }
              resultObj.results.push(styleObj);
            }

            res.send(resultObj);
          })
      }
    })
})

app.get('/products/:product_id', (req, res) => {
  var dataPromises = [];
  var product_id = Number(req.params.product_id);
  var testQuery = `select * from products, features where products.id = ${product_id} AND features.feats_ref_Id = products.id`
  var productData = db.queryAsync(testQuery);
  dataPromises.push(productData);
  Promise.all(dataPromises)
    .then((results) => {
      var resultObj = {};
      var product = results[0][0][0];
      var featureList = results[0][0];
      resultObj.id = product.id;
      resultObj.name = product.name;
      resultObj.slogan = product.slogan;
      resultObj.description = product.description;
      resultObj.category = product.category;
      resultObj.default_price = '' + product.default_price + '.00';
      resultObj.features = [];
      for (var i = 0; i < featureList.length; i++) {
        var container = {};
        container.feature = featureList[i].feature;
        container.value = featureList[i].value;
        resultObj.features.push(container);
      }
      res.send(resultObj);
    })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})