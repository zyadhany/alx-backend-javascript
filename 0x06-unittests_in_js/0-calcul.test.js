const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
  });
  it('should return 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
