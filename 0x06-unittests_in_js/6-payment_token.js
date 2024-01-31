function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from API' });
  }
  return Promise.reject(new Error('Invalid response from API'));
}

module.exports = getPaymentTokenFromAPI;
