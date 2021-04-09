const { isAmstrongNumber } = require('./index');

describe('Amstrong Numbers Test', () => {

    test('isAmstrongNumber should return correct value on check', () => {
        expect(isAmstrongNumber(153)).toBe(true);
        expect(isAmstrongNumber(123)).toBe(false);
    });
})