
import {RomanNumerals} from "../utils/RomanNumerals";

describe("RomanNumerals utils", () => {
    test('RomanNumerals static fromRoman', () => {
        const fromRomanResult = RomanNumerals.fromRoman('MMXX');
        expect(fromRomanResult).toBe(2020);
    });

    test('RomanNumerals static fromRoman with empty string input', () => {
        const fromRomanResult = RomanNumerals.fromRoman('');
        expect(fromRomanResult).toBe(0);
    });

    test('RomanNumerals static toRoman', () => {
        const toRomanResult = RomanNumerals.toRoman(2020);
        expect(toRomanResult).toBe('MMXX');
    });

    test('RomanNumerals static toRoman with 0 as input', () => {
        const toRomanResult = RomanNumerals.toRoman(0);
        expect(toRomanResult).toBe('');
    });
});