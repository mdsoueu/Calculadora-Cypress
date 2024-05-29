import { calculate } from './calculate';

describe('calculate', () => {

    beforeAll(() => {
        calculate('AC', '0', '0');
    });

    afterEach(() => {
        calculate('AC', '0', '0');
    });

    test('should return the correct result for addition', () => {
        const result = calculate('+', '2', '3');
        expect(result).toEqual('5');
    });

    test('should return the correct result for addition with decimal numbers', () => {
        const result = calculate('+', '2.2', '3.3');
        expect(result).toEqual('5.5');
    });

    test('should return the correct result for addition with negative numbers', () => {
        const result = calculate('+', '-2', '3');
        expect(result).toEqual('1');
    });

    test('should return the correct result for subtraction', () => {
        const result = calculate('-', '5', '3');
        expect(result).toEqual('2');
    });

    test('should return the correct result for subtraction with decimal numbers', () => {
        const result = calculate('-', '5.5', '3.3');
        expect(result).toEqual('2.2');
    });

    test('should return the correct result for subtraction with negative numbers', () => {
        const result = calculate('-', '-5', '3');
        expect(result).toEqual('-8');
    });

    test('should return the correct result for multiplication', () => {
        const result = calculate('x', '4', '2');
        expect(result).toEqual('8');
    });

    test('should return the correct result for multiplication with negative numbers', () => {
        const result = calculate('x', '-4', '2');
        expect(result).toEqual('-8');
    });

    test('should return the correct result for division', () => {
        const result = calculate('/', '10', '2');
        expect(result).toEqual('5');
    });

    test('should return the correct result for division with decimal numbers', () => {
        const result = calculate('/', '10.5', '2.1');
        expect(result).toEqual('5');
    });

    test('should return the correct result for division with negative numbers', () => {
        const result = calculate('/', '-10', '2');
        expect(result).toEqual('-5');
    });
});