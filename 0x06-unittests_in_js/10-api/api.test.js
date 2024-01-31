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
    const id = Math.round(Math.random() * 100);
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

describe('Login endpoint', () => {
  it('Correct status code', () => {
    request.post(
      { url: 'http://localhost:7865/login', form: { username: 'Paul' } },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
      },
    );
  });
  it('Correct result', () => {
    request.post(
      { url: 'http://localhost:7865/login', form: { userName: 'Paul' } },
      (err, res, body) => {
        expect(body).to.equal('Welcome Paul');
      },
    );
  });
  it('No username status code', () => {
    request.post({ url: 'http://localhost:7865/login' }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
  it('No username results', () => {
    request.post({ url: 'http://localhost:7865/login' }, (err, res, body) => {
      expect(body).to.equal('Welcome undefined');
    });
  });
});

describe('available_payments', () => {
  it('Correct status code', () => {
    request.get(
      {
        url: 'http://localhost:7865/available_payments',
        form: { username: 'Paul' },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
      },
    );
  });
  it('Correct result', () => {
    request.get(
      {
        url: 'http://localhost:7865/available_payments',
        form: { userName: 'Paul' },
      },
      (err, res, body) => {
        expect(JSON.parse(body)).to.eql({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
      },
    );
  });
});
