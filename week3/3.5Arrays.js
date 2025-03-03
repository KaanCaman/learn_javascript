// Arrays - Diziler

// ------------------------------------------------------------
// 1. Dizi Oluşturma - Creating Arrays

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// ------------------------------------------------------------
// 2. Dizi Elemanına Erişme - Accessing Array Elements

console.log(numbers[0]); // Output: 1
console.log(numbers[numbers.length - 1]); // Output: 5

// ------------------------------------------------------------
// 3. Diziye Eleman Ekleme - Adding Elements to an Array

numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6]

// ------------------------------------------------------------
// 4. Dizi Elemanını Silme - Removing Elements from an Array

numbers.pop();
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]

numbers.shift();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// ------------------------------------------------------------
// 5. Dizi Elemanını Güncelleme - Updating Array Elements

numbers[1] = 10;
console.log(numbers); // Output: [1, 10, 3, 4, 5]

// ------------------------------------------------------------
// 6. Dizi Uzunluğu - Array Length

console.log(numbers.length); // Output: 5

// ------------------------------------------------------------
// 7. Dizi Elemanlarıyla Döngü - Iterating Through Array Elements

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Output: 1, 10, 3, 4, 5
}

numbers.forEach((num) => {
    console.log(num); // Output: 1, 10, 3, 4, 5
});

// ------------------------------------------------------------
// 8. Dizi Elemanlarını Filtreleme - Filtering Array Elements

const filteredNumbers = numbers.filter(num => num > 3);
console.log(filteredNumbers); // Output: [10, 4, 5]

// ------------------------------------------------------------
// 9. Dizi Elemanlarını Haritalama - Mapping Array Elements

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 100, 9, 16, 25]

// ------------------------------------------------------------
// 10. Dizi Elemanlarıyla İşlem Yapma - Reducing Array Elements

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 23

// ------------------------------------------------------------
// 11. Dizi Elemanlarının Sıralanması - Sorting Array Elements

const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 3, 4, 5, 10]

const reverseSortedNumbers = numbers.sort((a, b) => b - a);
console.log(reverseSortedNumbers); // Output: [10, 5, 4, 3, 1]

// ------------------------------------------------------------
// 12. Dizi Elemanlarının Yer Değiştirilmesi - Reversing Array Elements

const reversedNumbers = numbers.reverse();
console.log(reversedNumbers); // Output: [5, 4, 3, 10, 1]

// ------------------------------------------------------------
// 13. Dizi Elemanlarıyla İç İç İşlem Yapma - Nested Arrays

const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray[1][0]); // Output: 3

// ------------------------------------------------------------
// 14. Dizi Elemanını Arama - Searching for an Element in an Array

console.log(numbers.includes(10)); // Output: true
console.log(numbers.includes(7)); // Output: false

// ------------------------------------------------------------
// 15. find Metodu - find Method

// find() returns the first element that satisfies the condition
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber); // Output: 10
// find() metodu, koşulu sağlayan ilk elemanı döndürür

// ------------------------------------------------------------
// 16. indexOf Metodu - indexOf Method

// indexOf() returns the index of the first occurrence of the element
const indexOfNumber = numbers.indexOf(4);
console.log(indexOfNumber); // Output: 3
// indexOf() metodu, elemanın ilk karşılaştığı indexi döndürür

// ------------------------------------------------------------
// 17. join Metodu - join Method

// join() combines all array elements into a single string
const joinedString = numbers.join('-');
console.log(joinedString); // Output: "1-10-3-4-5"
// join() metodu, tüm dizi elemanlarını birleştirerek tek bir string döndürür

// ------------------------------------------------------------
// 18. slice Metodu - slice Method

// slice() extracts a section of the array without modifying the original array
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers); // Output: [10, 3, 4]
// slice() metodu, dizinin bir bölümünü çıkarır ancak orijinal diziyi değiştirmez

// ------------------------------------------------------------
// 19. concat Metodu - concat Method

// concat() merges two or more arrays
const additionalNumbers = [6, 7, 8];
const mergedNumbers = numbers.concat(additionalNumbers);
console.log(mergedNumbers); // Output: [1, 10, 3, 4, 5, 6, 7, 8]
// concat() metodu, iki veya daha fazla diziyi birleştirir
