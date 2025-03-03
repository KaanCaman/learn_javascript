let str = "abc";

// 1. index kullanımı -
// İlk karakteri al
// Get the first character using index
console.log(str[0]); // Output: a

// 2. toUpperCase() -
// Stringi büyük harflere çevirin
// Convert the string to uppercase
const upperStr = str.toUpperCase();
console.log(upperStr); // Output: ABC

// 3. toLowerCase() -
// Stringi küçük harflere çevirin
// Convert the string to lowercase
const lowerStr = str.toLowerCase();
console.log(lowerStr); // Output: abc

// 4. indexOf() -
// String içinde bir karakterin indeksini bulun
// Find the index of a character in the string
const index = str.indexOf("b");
console.log(index); // Output: 1

// 5. includes() -
// String içinde belirli bir alt string var mı kontrol edin
// Check if a specific substring exists in the string
const hasB = str.includes("b");
console.log(hasB); // Output: true

// 6. slice() -
// Stringin bir kısmını alın
// Extract a portion of the string
const slicedStr = str.slice(1, 3);
console.log(slicedStr); // Output: bc

// 7. replace() -
// Stringde bir kısmı değiştirin
// Replace a part of the string with a new value
const replacedStr = str.replace("b", "z");
console.log(replacedStr); // Output: azc

// 8. trim() -
// Stringin başındaki ve sonundaki boşlukları temizleyin
// Remove whitespace from both ends of the string
const strWithSpaces = "   abc   ";
const trimmedStr = strWithSpaces.trim();
console.log(trimmedStr); // Output: abc

// 9. split() -
// Stringi belirli bir karakter ile böler
// Split the string into an array based on a delimiter
const fruits = "Apple, Banana, Orange".split(", ");
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// 10. charAt() -
// Stringde belirli bir pozisyondaki karakteri alın
// Get the character at a specific position in the string
const char = str.charAt(1);
console.log(char); // Output: b

// 11. substring() -
// Stringin belirli bir kısmını al
// Extract a portion of the string between two positions
const substringStr = str.substring(1, 3);
console.log(substringStr); // Output: bc

// 12. repeat() -
// Stringi belirli bir sayıda tekrar et
// Repeat the string a specified number of times
const repeatedStr = str.repeat(3);
console.log(repeatedStr); // Output: abcabcabc

// 13. startsWith() -
// String, belirli bir substring ile başlıyor mu kontrol et
// Check if the string starts with a specific substring
const startsWithA = str.startsWith("a");
console.log(startsWithA); // Output: true

// 14. endsWith() -
// String, belirli bir substring ile bitiyor mu kontrol et
// Check if the string ends with a specific substring
const endsWithC = str.endsWith("c");
console.log(endsWithC); // Output: true
