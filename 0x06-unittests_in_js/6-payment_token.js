function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from API' });
  }
}

module.exports = getPaymentTokenFromAPI;
