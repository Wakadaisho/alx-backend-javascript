const chai = require("chai");
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Returns 4 when adding 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('Returns 4 when adding 1.2 and 3', () => {
      expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });
    it('Returns 5 when adding 1.5 and 3', () => {
      expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
    });
    it('Returns 5 when adding 1.5 and 3.2', () => {
      expect(calculateNumber('SUM', 1.5, 3.2)).to.equal(5);
    });
    it('Returns 6 when adding 1.5 and 3.9', () => {
      expect(calculateNumber('SUM', 1.5, 3.9)).to.equal(6);
    });
    it('Returns 5 when adding 1.5 and 3', () => {
      expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
    });
    it('Returns 5 when adding 1.5 and 3.2', () => {
      expect(calculateNumber('SUM', 1.5, 3.2)).to.equal(5);
    });
    it('Returns -2 when adding 1.5 and -3.9', () => {
      expect(calculateNumber('SUM', 1.5, -3.9)).to.equal(-2);
    });
    it('Returns -5 when adding -1.5 and -3.9', () => {
      expect(calculateNumber('SUM', -1.5, -3.9)).to.equal(-5);
    });
    it('Returns -6 when adding -1.51 and -3.9', () => {
      expect(calculateNumber('SUM', -1.51, -3.9)).to.equal(-6);
    });
  });

  describe('SUBTRACT', () => {
    it('Returns -2 when subtracting 1 and 3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('Returns -2 when subtracting 1.2 and 3', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
    });
    it('Returns -1 when subtracting 1.5 and 3', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
    });
    it('Returns -1 when subtracting 1.5 and 3.2', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.2)).to.equal(-1);
    });
    it('Returns -2 when subtracting 1.5 and 3.9', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.9)).to.equal(-2);
    });
    it('Returns 6 when subtracting 1.5 and -3.9', () => {
      expect(calculateNumber('SUBTRACT', 1.5, -3.9)).to.equal(6);
    });
    it('Returns 3 when subtracting -1.5 and -3.9', () => {
      expect(calculateNumber('SUBTRACT', -1.5, -3.9)).to.equal(3);
    });
    it('Returns 2 when subtracting -1.51 and -3.9', () => {
      expect(calculateNumber('SUBTRACT', -1.51, -3.9)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('Returns 0.5 when dividing 1 and 2', () => {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });
    it('Returns 0.5 when dividing 1.2 and 2', () => {
      expect(calculateNumber('DIVIDE', 1.2, 2)).to.equal(0.5);
    });
    it('Returns 1 when dividing 1.5 and 2', () => {
      expect(calculateNumber('DIVIDE', 1.5, 2)).to.equal(1);
    });
    it('Returns 1 when dividing 1.5 and 2.2', () => {
      expect(calculateNumber('DIVIDE', 1.5, 2.2)).to.equal(1);
    });
    it('Returns 0.25 when dividing 1.5 and 7.9', () => {
      expect(calculateNumber('DIVIDE', 1.5, 7.9)).to.equal(0.25);
    });
    it('Returns -0.5 when dividing 1.5 and -3.9', () => {
      expect(calculateNumber('DIVIDE', 1.5, -3.9)).to.equal(-0.5);
    });
    it('Returns 0.25 when dividing -1.5 and -3.9', () => {
      expect(calculateNumber('DIVIDE', -1.5, -3.9)).to.equal(0.25);
    });
    it('Returns 0.5 when dividing -1.51 and -3.9', () => {
      expect(calculateNumber('DIVIDE', -1.51, -3.9)).to.equal(0.5);
    });
    it('Returns "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
    });
  });
});