const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
it('should add rounded numbers when type is SUM', () => {
	expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
});
it('should subtract rounded numbers when type is SUBTRACT', () => {
	expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
});
it('should divide rounded numbers when type is DIVIDE', () => {
	expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
});
it('should return error when type is DIVIDE and b is 0', () => {
	expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
});
it('should throw an error for invalid type ', () => {
	expect(() => calculateNumber('INVALID', 1, 2)).to.throw(Error);
});
});
