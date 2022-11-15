const axios = require('axios');

const getProducts = function() {
  axios.get('http://localhost:3000/products')
  .then((results) => {
    console.log('RESULTS', results.data);
  })
}

module.exports = {
  getProducts: getProducts,

}