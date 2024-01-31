const sinon = require('sinon');

const chai = require('chai');
const request = require('request');
expect = chai.expect;

describe('Index page', () => {
  it('Correct status code', () => {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) {
        console.log(err);
      }
      expect(res.statusCode).to.equal(200);
    });
  });
  it('Correct result', () => {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) {
        console.log(err);
      }
      expect(body).to.equal('Welcome to the payment system');
    });
  });
  it('Only GET method', () => {
    request.post('http://localhost:7865', (err, res, body) => {
      if (err) {
        console.log(err);
      }
      expect(body).to.not.equal('Welcome to the payment system');
    });
  });
});
