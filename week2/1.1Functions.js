// Functions - Fonksiyonlar

// 1. Regular Function - Normal Fonksiyon
// A function that calculates the square of a number
// Bir sayının karesini hesaplayan fonksiyon

function square(num) {
  return num * num;
}

console.log(square(4)); // Output: 16
// Konsol Çıktısı: 16

// ------------------------------------------------------------

// 2. Anonymous Function - Anonim Fonksiyon
// A function without a name, stored in a variable
// İsimsiz bir fonksiyon, bir değişkene atanıyor

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 5)); // Output: 15
// Konsol Çıktısı: 15

// ------------------------------------------------------------

// 3. IIFE (Immediately Invoked Function Expression) - Anında Çağrılan Fonksiyon
// This function executes immediately when defined
// Bu fonksiyon tanımlandığında hemen çalışır

(function () {
  console.log("This function runs immediately!");
  // Konsol Çıktısı: Bu fonksiyon hemen çalışır!
})();

// ------------------------------------------------------------

// 4. Callback Function - Geri Çağrım Fonksiyonu
// A function passed as an argument to another function
// Başka bir fonksiyona parametre olarak geçirilen fonksiyon

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function showMessage() {
  console.log("Welcome to JavaScript!");
  // Konsol Çıktısı: JavaScript'e hoş geldiniz!
}

greet("Alice", showMessage);
// Konsol Çıktısı:
// Hello, Alice
// Welcome to JavaScript!

// ------------------------------------------------------------

// 5. Predicate Function - Koşul Fonksiyonu
// A function that returns a boolean value (true/false)
// Boolean (true/false) döndüren fonksiyon

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(10)); // Output: true
// Konsol Çıktısı: true
console.log(isEven(7)); // Output: false
// Konsol Çıktısı: false

// ------------------------------------------------------------

// 6. Parameters & Rest Parameters - Parametreler ve Rest Parametreleri
// A function that takes multiple arguments
// Birden fazla argüman alan fonksiyon

function sum(...numbers) {
  let sum = 0;
  for (const num in numbers) {
    sum += num;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// Konsol Çıktısı: 15
console.log(sum(10, 20)); // Output: 30
// Konsol Çıktısı: 30
