const { fnRecursion, fnIter } = require('./main');

describe('1.11', () => {

  test('should be equal n', () => {
    expect(fnRecursion(2)).toBe(2);
  });

  test('should be equal expression result', () => {
    expect(fnRecursion(4)).toBe(6);
  });

  test('should be equal n', () => {
    expect(fnIter(2)).toBe(2);
  });

  test('should be equal expression result', () => {
    expect(fnIter(15)).toBe(39);
    expect(fnIter(4)).toBe(6);
  });

});
