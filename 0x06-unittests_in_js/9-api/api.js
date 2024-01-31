const express = require('express');

const app = express();

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

module.exports = app;
