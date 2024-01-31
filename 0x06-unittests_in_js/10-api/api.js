const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  try {
    const cartNo = +id;
    if (Number.isNaN(cartNo)) throw Error;
    res.send(`Payment methods for cart ${cartNo}`);
  } catch (err) {
    res.status(404).send('Cart not found');
  }
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  res.end(`Welcome ${req.body.userName}`);
});

module.exports = app;
