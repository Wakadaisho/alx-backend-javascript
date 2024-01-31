const sinon = require('sinon');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('validate the usage of the Utils function', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
    expect(stub.returned(10)).to.be.true;
    
    stub.restore();
    spy.restore();
  });
});
