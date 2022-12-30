const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");
const { parse } = require("csv-parse");
const axios = require("axios");
const db = require('./DataBase/db.js');
const morgan = require('morgan');
// const text = require('/Users/ncassano/Desktop/FEC_SDC/SDC_BackUp/nick-Overview/load.txt')
const port = 3000;


app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/test', (req, res) => {
  res.send('This Test Worked!')
});

app.get('/loaderio-7169e6fc7704cdce9712a2c0303c1f89/', (req, res) => {
  res.send('loaderio-7169e6fc7704cdce9712a2c0303c1f89')
})

// app.get('/loaderio-7169e6fc7704cdce9712a2c0303c1f89.txt', (req, res) => {
//   res.send('loaderio-7169e6fc7704cdce9712a2c0303c1f89')
// })

app.get("/loaderio-7169e6fc7704cdce9712a2c0303c1f89.txt", function (req,res) {
  fs.readFile("/Users/ncassano/Desktop/FEC_SDC/SDC_BackUp/nick-Overview/load.txt", "utf8", function (err,data) {
      res.send(data);
  });
});



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
  var stylesQuery = `select * from styles where (style_ref_Id = ${product_id})`;
  var styleData = db.queryAsync(stylesQuery);
  dataPromises.push(styleData);
  Promise.all(dataPromises)
    .then((results) => {
      if (results[0][0].length <= 0) {
        res.send('no other styles found for this item')
      } else {
        dataPromises = [];
        var styles = results[0][0]
        var ref_id = styles[0].style_ref_Id;
        var photoQuery = `select * from photos where (photos_ref_Id = ${ref_id})`;
        var skuQuery = `select * from skus where (skus_ref_Id = ${ref_id})`;
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
          .catch((err) => {
            res.send(err);
          })
      }
    })
    .catch((err) => {
      res.send(err);
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
    .catch((err) => {
      res.send(err);
    })
})

// app.get('/test/:product_id/styles', (req, res) => {
//   var dataPromises = [];
//   var product_id = Number(req.params.product_id);
//   var stylesQuery = `select * from styles, photos, skus where styles.style_ref_id = ${product_id} and photos.photos_ref_Id = styles.id and skus.skus_ref_Id = styles.id`;
//   var styleData = db.queryAsync(stylesQuery);
//   dataPromises.push(styleData);
//   Promise.all(dataPromises)
//     .then((results) => {
//       if (results[0][0].length <= 0) {
//         res.send('No Style Data Found for This Item')
//       } else {
//         var styleData = results[0][0];
//         var resultObj = {};
//         resultObj.product_id = '' + styleData[0].style_ref_Id;
//         resultObj.results = [];
//         var trackerObj = {};
//         for (var i = 0; i < styleData.length; i++) {
//           var styleObj = {}
//           if (trackerObj[styleData[i].name] === undefined) {
//             trackerObj[styleData[i].name] = styleData[i].name;
//             styleObj.style_id = styleData[i].id;
//             styleObj.name = styleData[i].name;
//             styleObj.original_price = '' + styleData[i].original_price + '.00'
//               if (styleData[i].sale_price === 'null') {
//                 styleObj.sale_price = null
//               } else {
//                 styleObj.sale_price = '' + styleData[i].sale_price + '.00'
//               }
//               if (styleData[i].isDefault > 0) {
//                 styleObj['default?'] = true;
//               } else {
//                 styleObj['default?'] = false;
//               }
//               styleObj.photos = [];
//               styleObj.skus = {};
//               resultObj.results.push(styleObj);
//           }
//         }
//         var photoArray = []
//         for (var j = 0; j < styleData.length; j++) {
//           if (trackerObj[styleData[j].thumbnail_url] === undefined) {
//               trackerObj[styleData[j].thumbnail_url] = styleData[j].thumbnail_url;
//               var photoObj = {};
//               photoObj.name = styleData[j].name;
//               photoObj.thumbnail_url = styleData[j].thumbnail_url;
//               photoObj.url = styleData[j].url;
//               photoArray.push(photoObj);
//           }
//         }
//         for (var i = 0; i < resultObj.results.length; i++) {
//           for (var j = 0; j < photoArray.length; j++) {
//             if (resultObj.results[i].name === photoArray[j].name) {
//               var container = {};
//               container.thumbnail_url = photoArray[j].thumbnail_url;
//               container.url = photoArray[j].url;
//               resultObj.results[i].photos.push(container);
//             }
//           }
//         }
//         var newTracker = {};
//         for (var j = 0; j < styleData.length; j++) {
//             if (!newTracker[styleData[j].name]) {
//               newTracker[styleData[j].name] = {};
//             }
//             var stringID = '' + styleData[j].id;
//             newTracker[styleData[j].name].id = stringID;
//             newTracker[styleData[j].name].quantity = styleData[j].quantity;
//             newTracker[styleData[j].name].size = styleData[j].size;
//         }
//         for (var m = 0; m < resultObj.results.length; m++) {
//           for (var key in newTracker) {
//             if (resultObj.results[m].name === key) {
//               resultObj.results[m].skus[newTracker[key].id] = {};
//               resultObj.results[m].skus[newTracker[key].id].quantity = newTracker[key].quantity;
//               resultObj.results[m].skus[newTracker[key].id].size = newTracker[key].quantity;
//             }
//           }
//         }

//       }
//       res.send(resultObj);
//     })
// })


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})