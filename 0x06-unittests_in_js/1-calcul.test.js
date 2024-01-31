const assert = require('assert');

const calculateNumber = require('./1-calcul');

describe('calculateNumber SUM', () => {
  it('Returns 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('Returns 4 when adding 1.2 and 3', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
  });
  it('Returns 5 when adding 1.5 and 3', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
  });
  it('Returns 5 when adding 1.5 and 3.2', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.2), 5);
  });
  it('Returns 6 when adding 1.5 and 3.9', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.9), 6);
  });
  it('Returns 5 when adding 1.5 and 3', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
  });
  it('Returns 5 when adding 1.5 and 3.2', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.2), 5);
  });
  it('Returns -2 when adding 1.5 and -3.9', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, -3.9), -2);
  });
  it('Returns -5 when adding -1.5 and -3.9', () => {
    assert.strictEqual(calculateNumber('SUM', -1.5, -3.9), -5);
  });
  it('Returns -6 when adding -1.51 and -3.9', () => {
    assert.strictEqual(calculateNumber('SUM', -1.51, -3.9), -6);
  });
});


describe('calculateNumber SUBTRACT', () => {
  it('Returns -2 when subtracting 1 and 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('Returns -2 when subtracting 1.2 and 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3), -2);
  });
  it('Returns -1 when subtracting 1.5 and 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3), -1);
  });
  it('Returns -1 when subtracting 1.5 and 3.2', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.2), -1);
  });
  it('Returns -2 when subtracting 1.5 and 3.9', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.9), -2);
  });
  it('Returns 6 when subtracting 1.5 and -3.9', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, -3.9), 6);
  });
  it('Returns 3 when subtracting -1.5 and -3.9', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.9), 3);
  });
  it('Returns 2 when subtracting -1.51 and -3.9', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.51, -3.9), 2);
  });
});


describe('calculateNumber DIVIDE', () => {
  it('Returns 0.5 when dividing 1 and 2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
  });
  it('Returns 0.5 when dividing 1.2 and 2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 2), 0.5);
  });
  it('Returns 1 when dividing 1.5 and 2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 2), 1);
  });
  it('Returns 1 when dividing 1.5 and 2.2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 2.2), 1);
  });
  it('Returns 0.25 when dividing 1.5 and 7.9', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 7.9), 0.25);
  });
  it('Returns -0.5 when dividing 1.5 and -3.9', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, -3.9), -0.5);
  });
  it('Returns 0.25 when dividing -1.5 and -3.9', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1.5, -3.9), 0.25);
  });
  it('Returns 0.5 when dividing -1.51 and -3.9', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1.51, -3.9), 0.5);
  });
});