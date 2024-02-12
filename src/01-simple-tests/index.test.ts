import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const num1 = 20;
  const num2 = 10;

  test('should add two numbers', () => {
    const action = Action.Add;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    });

    expect(result).toBe(30);
  });

  test('should subtract two numbers', () => {
    const action = Action.Subtract;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    });

    expect(result).toBe(10);
  });

  test('should multiply two numbers', () => {
    const action = Action.Multiply;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    });

    expect(result).toBe(200);
  });

  test('should divide two numbers', () => {
    const action = Action.Divide;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    });

    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const action = Action.Exponentiate;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    });

    expect(result).toBe(10240000000000);
  });

  test('should return null for invalid action', () => {
    const action = '';

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    });

    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const num1 = null;
    const num2 = '';
    const action = Action.Add;

    const result = simpleCalculator({
      a: num1,
      b: num2,
      action: action,
    });

    expect(result).toBe(null);
  });
});
