var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];
    assert.equal(arr.length, 0);
  });
});

describe('Products API', function() {
  it('SHOULD RETURN CORRECT DATA FROM API FOR PRODUCT_ID 1', () => {
    chai.request('http://localhost:3000')
      .get('/products/1')
      .end((err, res) => {
        assert.equal(res.status, 200, 'status is 200');
        assert.equal(typeof res.body, 'object', 'it returns an object');
        assert.equal(res.body.id, 1, 'it returns the correct product_id');
        assert.equal(res.body.name, 'Camo Onesie');
        assert.equal(res.body.features[0].feature, 'Fabric');
      })
  })
  it('SHOULD RETURN CORRECT DATA FROM API FOR PRODUCT_ID 1000', () => {
    chai.request('http://localhost:3000')
      .get('/products/1000')
      .end((err, res) => {
        assert.equal(res.status, 200, 'status is 200');
        assert.equal(typeof res.body, 'object', 'it returns an object');
        assert.equal(res.body.id, 1000, 'it returns the correct product_id');
        assert.equal(res.body.name, 'Katlynn Jacket');
        assert.equal(res.body.features[0].feature, 'Cut');
      })
  })
})

describe('Styles API', function() {
  it('SHOULD RETURN CORRECT DATA FROM API FOR PRODUCT_ID 1', () => {
    chai.request('http://localhost:3000')
      .get('/products/1/styles')
      .end((err, res) => {
        assert.equal(res.status, 200, 'status is 200');
        assert.equal(typeof res.body, 'object', 'it returns an object');
        assert.equal(res.body.product_id, '1', 'it returns the correct product_id');
        assert.equal(res.body.results[0].name, 'Forest Green & Black');
        assert.equal(res.body.results[0].photos[0].url, '\"https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80\"');
        assert.equal(res.body.results[0].skus['1'].quantity, '8');
      })
  })
  it('SHOULD RETURN CORRECT DATA FROM API FOR PRODUCT_ID 1002', () => {
    chai.request('http://localhost:3000')
      .get('/products/1002/styles')
      .end((err, res) => {
        assert.equal(res.status, 200, 'status is 200');
        assert.equal(typeof res.body, 'object', 'it returns an object');
        assert.equal(res.body.product_id, '1002', 'it returns the correct product_id');
        assert.equal(res.body.results[0].name, 'Orange');
        assert.equal(res.body.results[0].photos[0].url, '\"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80\"');
        assert.equal(res.body.results[0].skus['5822'].quantity, '50');
      })
  })
  it('SHOULD RETURN MESSAGE FROM API FOR PRODUCTS WITH NO STYLES', () => {
    chai.request('http://localhost:3000')
      .get('/products/1000/styles')
      .end((err, res) => {
        assert.equal(res.status, 200, 'status is 200');
        assert.equal(typeof res.body, 'object', 'it returns an object');
      })
  })
})