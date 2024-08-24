const assert = require('assert');
import calculateNumber  from './0-calcul';

describe('calculateNumber', function () {
  it('should return 4 when adding 1 and 3', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return -2 when adding -1 and -1', function () {
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });
  it('should return 5 when adding 1.2 and 3.6', function () {
    assert.strictEqual(calculateNumber(1.2, 3.6), 5);
  });
})
