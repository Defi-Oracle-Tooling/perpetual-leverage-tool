import { calculateExpression } from './calculator';

describe('Calculator Logic', () => {
  test('basic arithmetic operations', () => {
    expect(calculateExpression('2+2')).toBe(4);
    expect(calculateExpression('3*4')).toBe(12);
    expect(calculateExpression('10-5')).toBe(5);
    expect(calculateExpression('15/3')).toBe(5);
  });

  test('handles decimal numbers', () => {
    expect(calculateExpression('2.5+2.5')).toBe(5);
    expect(calculateExpression('3.3*2')).toBe(6.6);
  });

  test('handles invalid input', () => {
    expect(() => calculateExpression('2++2')).toThrow();
    expect(() => calculateExpression('abc')).toThrow();
  });
}); 