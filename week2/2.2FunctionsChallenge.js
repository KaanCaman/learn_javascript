// Mini Challenge: Functions
// Mini Challenge: Fonksiyonlar

// ------------------------------------------------------------

// 1. Function Declaration - Fonksiyon Bildirimi
// A function that takes a name and returns a greeting message
// Bir isim parametresi alan ve selamlama mesajı döndüren fonksiyon

function sayHello(name) {
  return "Merhaba, " + name + "!";
}

console.log(sayHello("Alice"));
// Output: Merhaba, Alice!
// Konsol Çıktısı: Merhaba, Alice!

// ------------------------------------------------------------

// 2. Function Expression - Fonksiyon İfadesi
// A function stored in a variable that multiplies two numbers
// İki sayıyı çarpan ve bir değişkene atanan fonksiyon

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 3));
// Output: 15
// Konsol Çıktısı: 15

// ------------------------------------------------------------

// 3. Arrow Function - Ok Fonksiyonu
// A concise function that divides two numbers
// İki sayıyı bölen kısa fonksiyon

const divide = (a, b) => a / b;

console.log(divide(10, 2));
// Output: 5
// Konsol Çıktısı: 5

// ------------------------------------------------------------

// 4. Default Parameters - Varsayılan Parametreler
// A function with default parameter values
// Varsayılan parametre değerleri olan bir fonksiyon

function greetUser(name = "Misafir", surname = "") {
  return "Hoş geldin, " + name + " " + surname + "!";
}

console.log(greetUser());
// Output: Hoş geldin, Misafir !
// Konsol Çıktısı: Hoş geldin, Misafir !

console.log(greetUser("John", "Doe"));
// Output: Hoş geldin, John Doe!
// Konsol Çıktısı: Hoş geldin, John Doe!
