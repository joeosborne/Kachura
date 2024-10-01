import { TestBed } from '@angular/core/testing';

import { CodingTasksService } from './coding-tasks.service';

describe('CodingTasksService', () => {
  let service: CodingTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodingTasksService);
  });


  /* numberToRoman ) */

  it('should convert 1 to I', () => {
    expect(service.numberToRoman(1)).toBe('I');
  });

  it('should convert 4 to IV', () => {
    expect(service.numberToRoman(4)).toBe('IV');
  });

  it('should convert 9 to IX', () => {
    expect(service.numberToRoman(9)).toBe('IX');
  });

  it('should convert 58 to LVIII', () => {
    expect(service.numberToRoman(58)).toBe('LVIII');
  });

  it('should convert 1994 to MCMXCIV', () => {
    expect(service.numberToRoman(1994)).toBe('MCMXCIV');
  });

  it('should handle the maximum value (3999)', () => {
    expect(service.numberToRoman(3999)).toBe('MMMCMXCIX');
  });

  it('should handle numbers that are already multiples of Roman numerals', () => {
    expect(service.numberToRoman(1000)).toBe('M');
    expect(service.numberToRoman(500)).toBe('D');
    expect(service.numberToRoman(100)).toBe('C');
    expect(service.numberToRoman(50)).toBe('L');
    expect(service.numberToRoman(10)).toBe('X');
    expect(service.numberToRoman(5)).toBe('V');
  });

  it('should return an empty string for 0', () => {
    expect(service.numberToRoman(0)).toBe('');
  });

  it('should throw an error for negative numbers', () => {
    expect(() => service.numberToRoman(-1)).toThrow();
  });

  it('should throw an error for numbers greater than 3999', () => {
    expect(() => service.numberToRoman(4000)).toThrow();
  });

  /* romanToNumber */

  it('should convert I to 1', () => {
    expect(service.romanToNumber('I')).toBe(1);
  });

  it('should convert IV to 4', () => {
    expect(service.romanToNumber('IV')).toBe(4);
  });

  it('should convert IX to 9', () => {
    expect(service.romanToNumber('IX')).toBe(9);
  });

  it('should convert LVIII to 58', () => {
    expect(service.romanToNumber('LVIII')).toBe(58);
  });

  it('should convert MCMXCIV to 1994', () => {
    expect(service.romanToNumber('MCMXCIV')).toBe(1994);
  });

  it('should handle the maximum value MMMCMXCIX (3999)', () => {
    expect(service.romanToNumber('MMMCMXCIX')).toBe(3999);
  });

  xit('should throw an error for invalid Roman numerals', () => {
    expect(() => service.romanToNumber('IIII')).toThrow();
    expect(() => service.romanToNumber('ABC')).toThrow();
  });

  it('should return 0 for an empty string', () => {
    expect(service.romanToNumber('')).toBe(0);
  });


});
