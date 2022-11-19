const axios = require('axios');
const db = require('./db.js')

const testMethod = function() {
  axios.get('http://localhost:3000/test')
  .then((results) => {
    console.log('results: ', results)
  })
}

const getProducts = function() {
  const success = 'Products Succesfully Added!';
  axios.get('http://localhost:3000/products')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    for (var i = 0; i < resultArray.length; i++) {
      db.queryAsync(
        `INSERT INTO products (id, name, slogan, description, default_price) VALUES (${Number(resultArray[i].id)},
        "${resultArray[i].name}", "${resultArray[i].slogan}", "${resultArray[i].description}",
        "${resultArray[i].default_price}")`
      )
    }
    return success;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
}

const getFeatures = function() {
  const success = 'Features Succesfully Added!';
  axios.get('http://localhost:3000/features')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    for (var i = 0; i < resultArray.length; i++) {
      db.queryAsync(
        `INSERT INTO features (id, feats_ref_Id, feature, value) VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].product_id)}, "${resultArray[i].feature}", "${resultArray[i].value}")`
      )
    }
    return success;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
}

const getPhotos = function() {
  const success = 'Photos Succesfully Added!';
  axios.get('http://localhost:3000/photos')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    for (var i = 0; i < resultArray.length; i++) {
      db.queryAsync(
        `INSERT INTO photos (id, photos_ref_Id, thumbnail_url, url) VALUES (${Number(resultArray[i].id)},${Number(resultArray[i].styleId)}, "${resultArray[i].thumbnail_url}", "${resultArray[i].url}")`
      )
    }
    return success;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
}

const getSkus = function() {
  const success = 'Skus Succesfully Added!';
  axios.get('http://localhost:3000/skus')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    for (var i = 0; i < resultArray.length; i++) {
      db.queryAsync(
        `INSERT INTO skus (id, skus_ref_Id, quantity, size) VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].styleId)}, "${resultArray[i].quantity}", "${resultArray[i].size}")`
      )
    }
    return success;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
}

const getStyles = function() {
  const success = 'Styles Succesfully Added!';
  axios.get('http://localhost:3000/styles')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    for (var i = 0; i < resultArray.length; i++) {
      db.queryAsync(
        `INSERT INTO styles (id, style_ref_Id, name, sale_price, original_price, isDefault) VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].productId)}, "${resultArray[i].name}", "${resultArray[i].sale_price}","${resultArray[i].original_price}", "${resultArray[i].default_style}")`
      )
    }
    return success;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports = {
  testMethod: testMethod,
  getProducts: getProducts,
  getFeatures: getFeatures,
  getPhotos: getPhotos,
  getSkus: getSkus,
  getStyles: getStyles
}