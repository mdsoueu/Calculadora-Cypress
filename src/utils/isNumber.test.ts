import { isNumber } from './isNumber';

describe('isNumber', () => {
  test('should return true for a valid number', () => {
    const result = isNumber('123');
    expect(result).toBe(true);
  });

  test('should return false for a non-number string', () => {
    const result = isNumber('abc');
    expect(result).toBe(false);
  });

  test('should return false for a string with numbers and letters', () => {
    const result = isNumber('123abc');
    expect(result).toBe(false);
  });

  test('should return true for a negative number', () => {
    const result = isNumber('-123');
    expect(result).toBe(true);
  });

  test('should return false for an empty string', () => {
    const result = isNumber('');
    expect(result).toBe(false);
  });
});