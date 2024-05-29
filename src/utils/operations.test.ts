import { OPERATIONS } from './operations';

describe('OPERATIONS', () => {
  test('should have the correct keys', () => {
    const keys = Object.keys(OPERATIONS);
    expect(keys).toEqual(['+', '-', 'x', '/', '=', 'AC']);
  });

  test('should have the correct values', () => {
    expect(OPERATIONS['+'](2, 3)).toBe(5);
    expect(OPERATIONS['-'](5, 3)).toBe(2);
    expect(OPERATIONS['x'](2, 3)).toBe(6);
    expect(OPERATIONS['/'](6, 3)).toBe(2);
    expect(OPERATIONS['='](2, 0)).toBe(0);
    expect(OPERATIONS['AC']()).toBe(0);
  });
});
