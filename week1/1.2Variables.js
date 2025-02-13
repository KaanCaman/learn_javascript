// 1.2Variables.js

// 🟢 VAR, LET, CONST - Değişken Tanımlama

// 📌 VAR - Fonksiyonel scope
var name = "John"; // VAR is function-scoped (VAR fonksiyonel kapsamlıdır)
console.log("Using var:", name);

// 📌 LET - Block scope
let age = 30; // LET is block-scoped (LET blok kapsamlıdır)
console.log("Using let:", age);

// 📌 CONST - Sabit değer
const city = "New York"; // CONST is used for constant values (CONST sabit değerler için kullanılır)
console.log("Using const:", city);

// 🟢 Scope (Kapsam) - Global, Function, Block Scope

// Global scope (Küresel kapsam)
let globalVar = "I am global"; // This variable is accessible anywhere in the code (Bu değişken her yerde erişilebilir)
console.log(globalVar);

// Function scope (Fonksiyonel kapsam)
function testFunctionScope() {
  var localVar = "I am local"; // This variable is only accessible inside this function (Bu değişken sadece bu fonksiyonda erişilebilir)
  console.log(localVar);
}
testFunctionScope();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined (localVar tanımlanmadığı için hata verir)

// Block scope (Blok kapsamı)
if (true) {
  let blockVar = "I am in a block"; // This variable is only accessible inside this block (Bu değişken sadece bu blok içinde erişilebilir)
  console.log(blockVar);
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined (blockVar tanımlanmadığı için hata verir)

// 🟢 Shadow Variable - Gölgeleme (Aynı isme sahip farklı kapsamlar)

let shadowVar = "I am global"; // Global variable (Küresel değişken)
console.log("Before shadowing:", shadowVar);

function shadowingExample() {
  let shadowVar = "I am local"; // Local variable shadows global one (Yerel değişken küresel olanı gölgeliyor)
  console.log("Inside function:", shadowVar);
}
shadowingExample();
console.log("After shadowing:", shadowVar);

// 🟢 Side Effects - Yan Etkiler

let counter = 0;

function incrementCounter() {
  counter++; // This changes the global variable (Bu küresel değişkeni değiştiriyor)
}

incrementCounter(); // Calling function (Fonksiyonu çağırma)
console.log("Counter after incrementing:", counter); // 1

incrementCounter(); // Calling function again (Fonksiyonu tekrar çağırma)
console.log("Counter after second increment:", counter); // 2

// Side effect (Yan etki) demonstration: Changing a global variable directly (Doğrudan küresel bir değişkeni değiştirme)
let number = 5;
function changeNumber() {
  number = 10; // This will change the global number variable (Bu küresel number değişkenini değiştirir)
}
changeNumber();
console.log("Global number after change:", number); // 10
