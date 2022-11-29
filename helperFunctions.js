//////////////////////////////////////////////////////////////////////////////////////////////////////
// App Routes that called for the function that parsed the text data. Feel free to ask any questions! //
//****************************************************************************************************** */


app.get('/', (req, res) => {
  // etl.getProducts()
  // etl.getFeatures()
  //etl.getStyles()
  // etl.getPhotosOne()
  // etl.getPhotosTwo()
  // etl.getPhotosThree()
  // etl.getPhotosFour()
  // etl.getSkus()
  // etl.getSkusTwo()
  // etl.getSkusThree()
  // etl.getSkusFour()
  // etl.getSkusFive()
  // etl.getSkusSix()
  // etl.getSkusSeven()
  // etl.getSkusEight()
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
      for (var i = 1; i < Math.ceil(rows.length/4 + 1); i++) {
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
      for (var i = Math.ceil(rows.length/4); i < Math.ceil(rows.length/2); i++) {
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
      for (var i = Math.ceil(rows.length/2); i < Math.ceil((rows.length/4 * 3)); i++) {
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
      for (var i = Math.ceil(rows.length/4 * 3); i < Math.ceil(rows.length); i++) {
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
      for (var i = 1; i < Math.ceil(rows.length/8); i++) {
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

app.get('/skusTwo', (req, res) => {
  console.log("Calling Data")
  fs.readFile("./Data_Set/skus.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var skusResult = [];
      for (var i = Math.ceil(rows.length/8); i < Math.ceil(rows.length/4); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        skusResult.push(containerObj);
      }
      console.log("Sending Data")
      res.send(skusResult);
    })
  })
})

app.get('/skusThree', (req, res) => {
  console.log("Calling Data")
  fs.readFile("./Data_Set/skus.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var skusResult = [];
      for (var i = Math.ceil(rows.length/4); i < Math.ceil(rows.length/8 * 3); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        skusResult.push(containerObj);
      }
      console.log("Sending Data")
      res.send(skusResult);
    })
  })
})

app.get('/skusFour', (req, res) => {
  console.log("Calling Data")
  fs.readFile("./Data_Set/skus.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var skusResult = [];
      for (var i = Math.ceil(rows.length/8 * 3); i < Math.ceil(rows.length/2); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        skusResult.push(containerObj);
      }
      console.log("Sending Data")
      res.send(skusResult);
    })
  })
})

app.get('/skusFive', (req, res) => {
  console.log("Calling Data")
  fs.readFile("./Data_Set/skus.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var skusResult = [];
      for (var i = Math.ceil(rows.length/2); i < Math.ceil(rows.length/8 * 5); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        skusResult.push(containerObj);
      }
      console.log("Sending Data")
      res.send(skusResult);
    })
  })
})

app.get('/skusSix', (req, res) => {
  console.log("Calling Data")
  fs.readFile("./Data_Set/skus.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var skusResult = [];
      for (var i = Math.ceil(rows.length/8 * 5); i < Math.ceil(rows.length/8 * 6); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        skusResult.push(containerObj);
      }
      console.log("Sending Data")
      res.send(skusResult);
    })
  })
})

app.get('/skusSeven', (req, res) => {
  console.log("Calling Data")
  fs.readFile("./Data_Set/skus.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var skusResult = [];
      for (var i = Math.ceil(rows.length/8 * 6); i < Math.ceil(rows.length/8 * 7); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        skusResult.push(containerObj);
      }
      console.log("Sending Data")
      res.send(skusResult);
    })
  })
})

app.get('/skusEight', (req, res) => {
  console.log("Calling Data")
  fs.readFile("./Data_Set/skus.csv", (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => {
      var skusResult = [];
      for (var i = Math.ceil(rows.length/8 * 7); i < Math.ceil(rows.length); i++) {
        var containerObj = {};
        containerObj[rows[0][0]] = rows[i][0];
        containerObj[rows[0][1]] = rows[i][1];
        containerObj[rows[0][2]] = rows[i][2];
        containerObj[rows[0][3]] = rows[i][3];
        containerObj[rows[0][4]] = rows[i][4];
        skusResult.push(containerObj);
      }
      console.log("Sending Data")
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