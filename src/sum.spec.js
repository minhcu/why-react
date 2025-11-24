const { sum } = require('./sum');

test('return error when arguments are missing', () => {
    expect(() => sum()).toThrow('Both arguments are required');
});

test('adds 1 + 2 to equal 3', () => {

    expect(sum(1, 2)).toBe(3);
});