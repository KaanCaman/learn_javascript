// 1.4 Operators: Arithmetic Operators, Assignment Operators, Type Coercion, "==" vs "==="

// Aritmetik Operatörler (Arithmetic Operators)
let x = 10;
let y = 5;

let addition = x + y;  // 1. Addition (Toplama)
console.log("Addition:", addition);  // Expected output: 15

let subtraction = x - y;  // 2. Subtraction (Çıkarma)
console.log("Subtraction:", subtraction);  // Expected output: 5

let multiplication = x * y;  // 3. Multiplication (Çarpma)
console.log("Multiplication:", multiplication);  // Expected output: 50

let division = x / y;  // 4. Division (Bölme)
console.log("Division:", division);  // Expected output: 2

let modulus = x % y;  // 5. Modulus (Bölüm kalanı)
console.log("Modulus:", modulus);  // Expected output: 0


// Atama Operatörleri (Assignment Operators)
let a = 5;
a += 2;  // 6. a = a + 2
console.log("a += 2:", a);  // Expected output: 7

a -= 3;  // 7. a = a - 3
console.log("a -= 3:", a);  // Expected output: 4

a *= 4;  // 8. a = a * 4
console.log("a *= 4:", a);  // Expected output: 16

a /= 2;  // 9. a = a / 2
console.log("a /= 2:", a);  // Expected output: 8

a %= 3;  // 10. a = a % 3
console.log("a %= 3:", a);  // Expected output: 2


// Tür Dönüşümü (Type Coercion)
let numStr = "10";  // string type
let num = 5;  // number type

let result = numStr + num;  // Type coercion occurs here: the number is coerced to a string
console.log("String + Number (Coercion):", result);  // Expected output: "105"

// "==" ve "===" farkı (Difference between "==" and "===")
let a1 = "5";
let b1 = 5;

console.log(a1 == b1);  // 11. == only checks value, so the result is true
console.log(a1 === b1);  // 12. === checks both value and type, so the result is false

// 11. "==" sadece değeri kontrol eder, bu yüzden sonuç true olur.
// 12. "===" hem değeri hem de tipi kontrol eder, bu yüzden sonuç false olur.

