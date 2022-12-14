const { expect } = require('@jest/globals');
const {stringLength, reverseString, Calculator, capitalize} =  require('./index.js');


test('calculate the number of character in string', () => {
    expect(stringLength('baraka')).toBe(6);
    expect(() => {
      stringLength("thisStringExceeds10characters")
    }).toThrow(Error);

  });


  test('capitalize the first character', () => {
    expect(capitalize('baraka')).toBe('Baraka');
  });

  test('reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });


  describe ('Calculator' ,() => {
    test('should return the sum of two numebers', () => {
      expect( Calculator.add(2, 2)).toEqual(4)
    });

    test('should return the diffence between larger and smaller number', () => {
      expect( Calculator.subtract(40, 5)).toEqual(35)
    });

    test('should return the quotient of two numbers', () => {
      expect( Calculator.divide(20, 4)).toEqual(5)
    });

    test('should return the product of two numbers', () => {
      expect( Calculator.multiply(2, 2)).toEqual(4)
    });
  })