// Spread Syntax and Destructuring - Yayma Sözdizimi ve Parçalama

// ------------------------------------------------------------
// SPREAD SYNTAX (Yayma Sözdizimi)

// Spread operator (...) allows copying or merging objects and arrays
// Spread operatörü (...) nesneleri ve dizileri kopyalamaya veya birleştirmeye olanak tanır

// Cloning an object - Bir nesneyi klonlama

const user = {
  name: "Alice",
  age: 25,
  city: "Istanbul",
};

const clonedUser = { ...user };
// user nesnesini klonlayarak yeni bir nesne oluşturduk

console.log(clonedUser);
// Output: { name: 'Alice', age: 25, city: 'Istanbul' }

// ------------------------------------------------------------

// Merging objects - Nesneleri birleştirme

const address = {
  street: "Main Street",
  number: 100,
};

const userWithAddress = { ...user, ...address };
// user ve address nesnelerini birleştirdik

console.log(userWithAddress);
// Output: { name: 'Alice', age: 25, city: 'Istanbul', street: 'Main Street', number: 100 }

// ------------------------------------------------------------

// Using spread with arrays - Dizilerde spread kullanımı

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const mergedNumbers = [...numbers1, ...numbers2];
// İki diziyi birleştirdik

console.log(mergedNumbers);
// Output: [1, 2, 3, 4, 5, 6]

// Cloning an array - Bir diziyi klonlama
const clonedNumbers = [...numbers1];

console.log(clonedNumbers);
// Output: [1, 2, 3]

// ------------------------------------------------------------

// DESTRUCTURING (Parçalama)

// Object Destructuring - Nesne parçalama

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  country: "USA",
};

// Extracting values from an object into variables
// Nesneden değişkenlere değer aktarma

const { firstName, lastName, age } = student;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 22


// ------------------------------------------------------------

// Using default values - Varsayılan değer kullanımı

const employee = {
  empName: "Jane",
  empAge: 28,
};

// Assigning a default value if the property is missing
// Eğer özellik eksikse varsayılan bir değer atama

const { empName, empAge, empPosition = "Developer" } = employee;

console.log(empName); // Output: Jane
console.log(empAge); // Output: 28
console.log(empPosition); // Output: Developer

// ------------------------------------------------------------

// Renaming properties - Özellikleri yeniden adlandırma

const book = {
  title: "JavaScript Essentials",
  author: "Mark Smith",
};

// Extracting values with new variable names
// Değerleri yeni değişken adlarıyla aktarma

const { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle); // Output: JavaScript Essentials
console.log(bookAuthor); // Output: Mark Smith

// ------------------------------------------------------------

// Array Destructuring - Dizi parçalama

const colors = ["red", "green", "blue"];

// Extracting values from an array
// Diziden değerleri aktarma

const [primary, secondary, tertiary] = colors;

console.log(primary); // Output: red
console.log(secondary); // Output: green
console.log(tertiary); // Output: blue

// ------------------------------------------------------------

// Function Parameter Destructuring - Fonksiyon parametrelerinde parçalama
const displayPerson = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
  // Adı ve yaşı ekrana yazdırıyoruz
};

const personInfo = { name: "Eve", age: 29 };

displayPerson(personInfo);
// Output: Name: Eve, Age: 29
