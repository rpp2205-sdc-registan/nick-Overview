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
    var promiseArray = []
    for (var i = 0; i < resultArray.length; i++) {
      promiseArray.push(db.queryAsync(
        `INSERT INTO products (id, name, slogan, description, category) VALUES (${Number(resultArray[i].id)},
        "${resultArray[i].name}", "${resultArray[i].slogan}", "${resultArray[i].description}",
        "${resultArray[i].default_price}")`
      ))
    }
    return promiseArray;
  })
  .then((promiseArray) => {
    return Promise.all(promiseArray)
  })
  .then((result) => {
    console.log(success);
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
    var promiseArrays = [];
    var promiseArrayOne = [];
    var promiseArrayTwo = [];
    for (var i = 0; i < 1000000; i++) {
      promiseArrayOne.push(db.queryAsync(
        `INSERT INTO features (id, feats_ref_Id, feature, value)
        VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].product_id)},
        "${resultArray[i].feature}", "${resultArray[i].value}")`
      ))
    }

    for (var i = 1000001; i < resultArray.length; i++) {
      promiseArrayTwo.push(db.queryAsync(
        `INSERT INTO features (id, feats_ref_Id, feature, value)
        VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].product_id)},
        "${resultArray[i].feature}", "${resultArray[i].value}")`
      ))
    }
    promiseArrays.push(promiseArrayOne);
    promiseArrays.push(promiseArrayTwo);
    return promiseArrays;
  })
  .then((promiseArray) => {
    return Promise.all([Promise.all(promiseArray[0]), Promise.all(promiseArray[1])]);
  })
  .then((result) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  })

}

const getPhotosOne = function() {
  const success = 'Photos Succesfully Added!';
  axios.get('http://localhost:3000/photosOne')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    console.log("RETURNED DATA")
    var promiseArrays = [];
    for (var i = 0; i < resultArray.length; i++) {
      promiseArrays.push(db.queryAsync(
        `INSERT INTO photos (id, photos_ref_Id, thumbnail_url, url)
        VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].styleId)}, '${resultArray[i].thumbnail_url}', '${resultArray[i].url}')`
      ))
    }
    return promiseArrays;
  })
  .then((promiseArray) => {
    console.log("STARTING PROMISES OF DATA")
    return Promise.all(promiseArray)
  })
  .then((result) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  })
}

const getPhotosTwo = function() {
  const success = 'Photos Succesfully Added!';
  axios.get('http://localhost:3000/photosTwo')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    console.log("RETURNED DATA")
    var promiseArrays = [];
    for (var i = 0; i < resultArray.length; i++) {
      promiseArrays.push(db.queryAsync(
        `INSERT INTO photos (id, photos_ref_Id, thumbnail_url, url)
        VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].styleId)}, '${resultArray[i].thumbnail_url}', '${resultArray[i].url}')`
      ))
    }
    return promiseArrays;
  })
  .then((promiseArray) => {
    console.log("STARTING PROMISES OF DATA")
    return Promise.all(promiseArray)
  })
  .then((result) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  })
}

const getPhotosThree = function() {
  const success = 'Photos Succesfully Added!';
  axios.get('http://localhost:3000/photosThree')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    console.log("RETURNED DATA")
    var promiseArrays = [];
    for (var i = 0; i < resultArray.length; i++) {
      promiseArrays.push(db.queryAsync(
        `INSERT INTO photos (id, photos_ref_Id, thumbnail_url, url)
        VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].styleId)}, '${resultArray[i].thumbnail_url}', '${resultArray[i].url}')`
      ))
    }
    return promiseArrays;
  })
  .then((promiseArray) => {
    console.log("STARTING PROMISES OF DATA")
    return Promise.all(promiseArray)
  })
  .then((result) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  })
}

const getPhotosFour = function() {
  const success = 'Photos Succesfully Added!';
  axios.get('http://localhost:3000/photosFour')
  .then((results) => {
    return results.data;
  })
  .then((resultArray) => {
    console.log("RETURNED DATA")
    var promiseArrays = [];
    for (var i = 0; i < resultArray.length; i++) {
      promiseArrays.push(db.queryAsync(
        `INSERT INTO photos (id, photos_ref_Id, thumbnail_url, url)
        VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].styleId)}, '${resultArray[i].thumbnail_url}', '${resultArray[i].url}')`
      ))
    }
    return promiseArrays;
  })
  .then((promiseArray) => {
    console.log("STARTING PROMISES OF DATA")
    return Promise.all(promiseArray)
  })
  .then((result) => {
    console.log(success);
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
    var promiseArray = []
    for (var i = 0; i < resultArray.length; i++) {
      promiseArray.push(db.queryAsync(
        `INSERT INTO skus (id, skus_ref_Id, quantity, size) VALUES
        (${Number(resultArray[i].id)}, ${Number(resultArray[i].styleId)},
        "${resultArray[i].quantity}", "${resultArray[i].size}")`
      ))
    }
    return promiseArray;
  })
  .then((promiseArray) => {
    return Promise.all(promiseArray)
  })
  .then((result) => {
    console.log(success);
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
    var promiseArray = []
    for (var i = 0; i < resultArray.length; i++) {
      promiseArray.push(db.queryAsync(
        `INSERT INTO styles (id, style_ref_Id, name, sale_price, original_price, isDefault)
        VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].productId)}, "${resultArray[i].name}",
        "${resultArray[i].sale_price}","${resultArray[i].original_price}", "${resultArray[i].default_style}")`
      ))
    }
    return promiseArray;
  })
  .then((promiseArray) => {
    return Promise.all(promiseArray)
  })
  .then((result) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  })

}

module.exports = {
  testMethod: testMethod,
  getProducts: getProducts,
  getFeatures: getFeatures,
  getPhotosOne: getPhotosOne,
  getPhotosTwo: getPhotosTwo,
  getPhotosThree: getPhotosThree,
  getPhotosFour: getPhotosFour,
  getSkus: getSkus,
  getStyles: getStyles
}

// db.queryAsync(
//   `INSERT INTO features (id, feats_ref_Id, feature, value) VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].product_id)}, "${resultArray[i].feature}", "${resultArray[i].value}")`
// )

// db.queryAsync(
//   `INSERT INTO photos (id, photos_ref_Id, thumbnail_url, url) VALUES (${Number(resultArray[i].id)},${Number(resultArray[i].styleId)}, "${resultArray[i].thumbnail_url}", "${resultArray[i].url}")`
// )

// db.queryAsync(
//   `INSERT INTO skus (id, skus_ref_Id, quantity, size) VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].styleId)}, "${resultArray[i].quantity}", "${resultArray[i].size}")`
// )

// db.queryAsync(
//   `INSERT INTO styles (id, style_ref_Id, name, sale_price, original_price, isDefault) VALUES (${Number(resultArray[i].id)}, ${Number(resultArray[i].productId)}, "${resultArray[i].name}", "${resultArray[i].sale_price}","${resultArray[i].original_price}", "${resultArray[i].default_style}")`
// )