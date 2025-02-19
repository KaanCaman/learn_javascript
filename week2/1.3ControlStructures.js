// Control Structures - Kontrol Yapıları

// ------------------------------------------------------------

// 1. Conditional Statements - Koşullu İfadeler

// if - else if - else
// Check if a number is positive, negative, or zero
// Bir sayının pozitif, negatif veya sıfır olup olmadığını kontrol eder

function checkNumber(num) {
  if (num > 0) {
    console.log("The number is positive.");
  } else if (num < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}

checkNumber(10);
// Output: The number is positive.

checkNumber(-5);
// Output: The number is negative.

checkNumber(0);
// Output: The number is zero.

// ------------------------------------------------------------

// switch
// Check the day of the week
// Haftanın gününü kontrol eden yapı

function getDayOfWeek(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day!");
  }
}

getDayOfWeek(3);
// Output: Wednesday

// ------------------------------------------------------------

// 2. Loops - Döngüler

// for loop - for döngüsü
// Print numbers from 1 to 5
// 1'den 5'e kadar olan sayıları yazdırır

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
  // Sayı: i
}

// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5

// while loop - while döngüsü
// Print numbers from 5 to 1
// 5'ten 1'e kadar olan sayıları yazdırır

let count = 5;
while (count >= 1) {
  console.log("Count:", count);
  count--;
}

// Output:
// Count: 5
// Count: 4
// Count: 3
// Count: 2
// Count: 1

// do...while loop - do...while döngüsü
// Execute at least once even if the condition is false
// Koşul yanlış olsa bile en az bir kez çalışır

const num = 0;
do {
  console.log("This will execute at least once.");
} while (num > 0);

// Output:
// This will execute at least once. | Bu en az bir kez çalışacaktır.

// for...in loop - for...in döngüsü
// Iterate over object properties
// Nesne özellikleri üzerinde döngü oluşturur

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in person) {
  console.log(key + ":", person[key]);
  // Anahtar: Değer
}

// Output:
// name: John
// age: 30
// city: New York

// ------------------------------------------------------------

// 3. Break & Continue - Döngü Kontrolleri

// break statement - break ifadesi
// Stop the loop when i equals 3
// i değeri 3 olduğunda döngüyü durdurur

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Stops the loop
    // Döngüyü durdurur
  }
  console.log("Break Example:", i);
}

// Output:
// Break Example: 1
// Break Example: 2

// continue statement - continue ifadesi
// Skip iteration when i equals 3
// i değeri 3 olduğunda o adımı atlar

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip the rest of the loop for this iteration
    // Döngünün bu adımını atlar
  }
  console.log("Continue Example:", i);
}

// Output:
// Continue Example: 1
// Continue Example: 2
// Continue Example: 4
// Continue Example: 5
