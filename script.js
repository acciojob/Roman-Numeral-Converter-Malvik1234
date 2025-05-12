function convertToRoman(num) {
  if (num === 0) return "N/A"; // Romans had no symbol for 0

  const romanMap = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let result = "";

  for (let i = 0; i < romanMap.length; i++) {
    const [symbol, value] = romanMap[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example usage:
console.log(convertToRoman(14));     // XIV
console.log(convertToRoman(798));    // DCCXCVIII
console.log(convertToRoman(0));      // N/A
console.log(convertToRoman(3999));   // MMMCMXCIX
console.log(convertToRoman(100000)); // Too large for classical roman numerals
