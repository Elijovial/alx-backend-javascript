const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
it('should add rounded numbers when type is SUM', () => {
	assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
});
it('should subtract rounded numbers when type is SUBTRACT', () => {
	assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
});
it('should divide rounded numbers when type is DIVIDE', () => {
	assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
});
it('should return error when type is DIVIDE and b is 0', () => {
	assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
});
it('should throw an error for invalid type ', () => {
	assert.throws(() => calculateNumber('INVALID', 1, 2), 'Error');
});
});
