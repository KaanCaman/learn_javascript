// 1. map() Challenge -
// Dizideki her sayıyı iki katına çıkaran yeni bir dizi oluşturun.
// Create a new array where each number in the original array is doubled.

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

// 2. forEach() Challenge -
// Dizideki tüm öğeleri "This is X" mesajıyla yazdırın.
// Print all elements in the array with the message "This is X".

const fruits = ["🍎", "🍌", "🍓"];
fruits.forEach((fruit) => console.log(`This is ${fruit}`));
// Output:
// This is 🍎
// This is 🍌
// This is 🍓

// 3. filter() Challenge -
// Orijinal diziden yalnızca 10'dan büyük sayılardan oluşan yeni bir dizi oluşturun.
// Create a new array containing only numbers greater than 10 from the original array.

const numbersList = [5, 12, 8, 21];
const greaterThanTen = numbersList.filter((num) => num > 10);
console.log(greaterThanTen); // Output: [12, 21]

// 4. find() Challenge -
// Dizideki muz meyvesini bulun.
// Find the banana fruit in the array.

const fruitList = ["🍎", "🍌", "🍓", "🍍"];
const banana = fruitList.find((fruit) => fruit === "🍌");
console.log(banana); // Output: '🍌'

// 5. includes() Challenge -
// Dizinin içinde "🍎" meyvesinin olup olmadığını kontrol edin.
// Check if the array contains the apple fruit ("🍎").

const fruitsCheck = ["🍎", "🍌", "🍓"];
const hasApple = fruitsCheck.includes("🍎");
console.log(hasApple); // Output: true

// 6. slice() Challenge -
// Orijinal dizinin ilk iki elemanından oluşan yeni bir dizi oluşturun.
// Create a new array with the first two elements of the original array.

const numberArray = [1, 2, 3, 4, 5];
const slicedArray = numberArray.slice(0, 2);
console.log(slicedArray); // Output: [1, 2]

// 7. push() Challenge -
// Dizinin sonuna yeni bir "🍉" meyvesi ekleyin.
// Add a new fruit "🍉" to the end of the array.

const fruitArray = ["🍎", "🍌"];
fruitArray.push("🍉");
console.log(fruitArray); // Output: ['🍎', '🍌', '🍉']

// 8. pop() Challenge -
// Dizinin sonundaki meyveyi silin.
// Remove the last fruit from the array.

const fruitsToRemove = ["🍎", "🍌", "🍉"];
fruitsToRemove.pop();
console.log(fruitsToRemove); // Output: ['🍎', '🍌']
