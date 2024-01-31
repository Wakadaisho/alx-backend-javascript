const sinon = require('sinon');

const chai = require('chai');
const request = require('request');
expect = chai.expect;

describe('Index page', () => {
  it('Correct status code', () => {
    request.get('http://localhost:7865', (err, res, body) => {
    
      expect(res.statusCode).to.equal(200);
    });
  });
  it('Correct result', () => {
    request.get('http://localhost:7865', (err, res, body) => {
    
      expect(body).to.equal('Welcome to the payment system');
    });
  });
  it('Only GET method', () => {
    request.post('http://localhost:7865', (err, res, body) => {
    
      expect(body).to.not.equal('Welcome to the payment system');
    });
  });
});


describe('Cart page', () => {
  it('Correct status code', () => {
    request.get('http://localhost:7865/cart/3', (err, res, body) => {
    
      expect(res.statusCode).to.equal(200);
    });
  });
  it('Correct result', () => {
    const id = Math.round(Math.random()*100);
    request.get(`http://localhost:7865/cart/${id}`, (err, res, body) => {
    
      expect(body).to.match(/^Payment methods for cart /);
    });
  });
  it('Id not a number - correct status code', () => {
    request.post('http://localhost:7865/cart/hi', (err, res, body) => {
    
      expect(res.statusCode).to.equal(404);
    });
  });
  it('Id not a number - correct result', () => {
    request.post('http://localhost:7865/cart/hi', (err, res, body) => {
    
      expect(body).to.not.equal('Cart not found');
    });
  });
});
