// Math nesnesi ile matematiksel işlemler
// Working with the Math object

// 1. PI sayısını almak
// Getting the value of PI
console.log(Math.PI); // Output: 3.141592653589793

// 2. Mutlak değer hesaplama
// Calculating the absolute value
console.log(Math.abs(-10)); // Output: 10

// 3. Üst sayıya yuvarlama (ceil)
// Rounding up to the nearest integer
console.log(Math.ceil(4.3)); // Output: 5

// 4. Alt sayıya yuvarlama (floor)
// Rounding down to the nearest integer
console.log(Math.floor(4.9)); // Output: 4

// 5. En yakın tam sayıya yuvarlama (round)
// Rounding to the nearest integer
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(4.4)); // Output: 4

// 6. Sayının karekökünü alma (sqrt)
// Getting the square root of a number
console.log(Math.sqrt(16)); // Output: 4

// 7. Sayının üssünü alma (pow)
// Raising a number to a power
console.log(Math.pow(2, 3)); // Output: 8

// 8. Rastgele sayı üretme (0 ile 1 arasında)
// Generating a random number between 0 and 1
console.log(Math.random()); // Output: Random number between 0 and 1

// 9. Belirli bir aralıkta rastgele sayı üretme (1 ile 10 arasında)
// Generating a random number in a specific range (1 to 10)
console.log(Math.floor(Math.random() * 10) + 1); // Output: Random integer between 1 and 10

// 10. Minimum ve maksimum değer bulma
// Finding the minimum and maximum values
console.log(Math.min(10, 5, 8, 3, 2)); // Output: 2
console.log(Math.max(10, 5, 8, 3, 2)); // Output: 10

// 11. Trigonometri fonksiyonları
// Trigonometric functions
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sin 90°)
console.log(Math.cos(0)); // Output: 1 (cos 0°)
console.log(Math.tan(Math.PI / 4)); // Output: 1 (tan 45°)

// 12. Logaritma hesaplama
// Calculating logarithm
console.log(Math.log(1)); // Output: 0 (Natural log of 1)
console.log(Math.log10(100)); // Output: 2 (Log base 10 of 100)

// 13. Sayının işaretini belirleme (pozitif, negatif veya 0)
// Determining the sign of a number (positive, negative, or zero)
console.log(Math.sign(-5)); // Output: -1 (Negative)
console.log(Math.sign(0));  // Output: 0 (Zero)
console.log(Math.sign(5));  // Output: 1 (Positive)

// 14. Dereceyi radyana çevirme
// Converting degrees to radians
const degree = 90;
const radian = degree * (Math.PI / 180);
console.log(radian); // Output: 1.5707963267948966

// 15. Radyanı dereceye çevirme
// Converting radians to degrees
const radians = Math.PI / 2;
const degrees = radians * (180 / Math.PI);
console.log(degrees); // Output: 90

// 16. E sayısı (Euler sabiti)
// Getting Euler's number (E)
console.log(Math.E); // Output: 2.718281828459045

// 17. Sayıyı keserek tam kısmını alma (trunc)
// Truncating a number to its integer part
console.log(Math.trunc(4.9)); // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4
