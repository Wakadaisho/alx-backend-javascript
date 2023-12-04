const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;

  if (count >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count);
}

module.exports = {
  weakMap,
  queryAPI,
};
