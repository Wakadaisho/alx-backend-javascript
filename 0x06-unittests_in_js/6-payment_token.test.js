const sinon = require('sinon');

const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('getPaymentTokenFromAPI Promise true', function (done) {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.eql({ data: 'Successful response from API' });
      done();
    });
  });
});
