const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Returns 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('Returns 4 when adding 1.2 and 3', () => {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });
  it('Returns 5 when adding 1.5 and 3', () => {
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });
  it('Returns 5 when adding 1.5 and 3.2', () => {
    assert.strictEqual(calculateNumber(1.5, 3.2), 5);
  });
  it('Returns 6 when adding 1.5 and 3.9', () => {
    assert.strictEqual(calculateNumber(1.5, 3.9), 6);
  });
  it('Returns 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('Returns -2 when adding 1.5 and -3.9', () => {
    assert.strictEqual(calculateNumber(1.5, -3.9), -2);
  });
  it('Returns -5 when adding -1.5 and -3.9', () => {
    assert.strictEqual(calculateNumber(-1.5, -3.9), -5);
  });
  it('Returns -6 when adding -1.51 and -3.9', () => {
    assert.strictEqual(calculateNumber(-1.51, -3.9), -6);
  });
});
