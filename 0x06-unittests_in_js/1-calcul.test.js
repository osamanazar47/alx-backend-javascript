const assert = require('assert');
import { describe } from 'mocha';
import calculateNumber  from './1-calcul';

describe('calculateNumber', function () {
  describe('#add', function () {
    it('should return 4 when adding 1 and 3', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return -2 when adding -1 and -1', function () {
      assert.strictEqual(calculateNumber('SUM', -1, -1), -2);
    });

    it('should return 5 when adding 1.2 and 3.6', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.6), 5);
    });

    it('should return 5 when adding 2.4 and 3.22', function () {
      assert.strictEqual(calculateNumber('SUM', 2.4, 3.22), 5);
    });

    it('should return 6 when adding 2.6 and 3.22', function () {
      assert.strictEqual(calculateNumber('SUM', 2.6, 3.22), 6);
    });
    it('should return 5 when adding 2.4999 and 3.4999', function () {
      assert.strictEqual(calculateNumber('SUM', 2.4999, 3.4999), 5);
    });
  });

  describe('#subtract', function () {
    it('should return 3 when subtracting 5 and 2', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 2), 3);
	});

    it('should return 3 when subtracting 5.2 and 2.4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.2, 2.4), 3);
    });

    it('should return -1 when subtracting 2 and 3', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 3), -1);
    });

    it('should return 2 when subtracting 4.6 and 2.7', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 2.7), 2);
    });

    it('should return 3 when subtracting 5.4999 and 2.4999', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4999, 2.4999), 3);
    });
  })

  describe('#divide', function () {
    it('should return 2 when dividing 4 and 2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
	});

    it('should return 3 when dividing 9.2 and 2.6', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 9.2, 2.6), 3);
    });

    it('should return Error string when dividing 4 and 0.3', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0.3), 'Error');
    });

    it('should return 2 when dividing 4.4999 and 2.4999', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4999, 2.4999), 2);
    });

    it('should return 2 when dividing 5.5 and 2.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.5), 2);
    });
  })
});
