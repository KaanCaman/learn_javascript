// Mini Challenge: Objects - Nesneler

// ------------------------------------------------------------
// 1. Nesne Özellik Erişimi - Accessing Object Properties

const person = { name: "John", age: 30, country: "USA" };

// Access and log the name and age properties of the person object
console.log("person.name : ", person.name); // Output: John
console.log("person.age : ", person.age); // Output: 30

// ------------------------------------------------------------
// 2. Yeni Özellik Ekleme - Adding a New Property

// Adding a new property 'city' to the person object
person.city = "New York";
console.log("person.city : ", person);
// Output: { name: "John", age: 30, country: "USA", city: "New York" }

// ------------------------------------------------------------
// 3. Özellik Güncelleme - Updating a Property

// Updating the 'age' property of the person object
person.age = 35;
console.log("person.age : ", person);
// Output: { name: "John", age: 35, country: "USA", city: "New York" }

// ------------------------------------------------------------
// 4. Özellik Silme - Deleting a Property

// Removing the 'country' property from the person object
delete person.country;
console.log("delete person.country : ", person);
// Output: { name: "John", age: 35, city: "New York" }

// ------------------------------------------------------------
// 5. Nesne Destructuring - Object Destructuring

const person2 = { name: "John", age: 30, country: "USA" };

// Destructuring 'name' and 'country' from person2 object
const { name, country } = person2;
console.log("{name} : ", name); // Output: John
console.log("{country} : ", country); // Output: USA

// ------------------------------------------------------------
// 6. Nesne Anahtarları ve Değerleri - Object Keys and Values

// Using Object.keys() to get all keys of the person2 object
const keys = Object.keys(person2);
console.log("person2 keys : ", keys);
// Output: ["name", "age", "country"]

// Using Object.values() to get all values of the person2 object
const values = Object.values(person2);
console.log("person2 values : ", values);
// Output: ["John", 30, "USA"]

// ------------------------------------------------------------
// 7. İki Nesneyi Birleştirme - Merging Two Objects

const person3 = { name: "John", age: 30 };
const address = { city: "New York", country: "USA" };

// Merging two objects into one using Object.assign()
const mergedPerson = Object.assign({}, person3, address);
console.log("mergedPerson : ", mergedPerson);
// Output: { name: "John", age: 30, city: "New York", country: "USA" }

// Alternative: Using spread syntax
const mergedPerson2 = { ...person3, ...address };
console.log("mergedPerson2 : ", mergedPerson2);
// Output: { name: "John", age: 30, city: "New York", country: "USA" }

// ------------------------------------------------------------
// 8. İç İçe Nesne Erişimi - Accessing Nested Objects

const user = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

// Accessing 'city' inside the nested 'address' object
console.log("user.address.city : ", user.address.city);
// Output: New York

// ------------------------------------------------------------
// 9. for...in ile Nesne İterasyonu - Iterating Over an Object with for...in

const person4 = { name: "John", age: 30, country: "USA" };

// Iterating over the properties of person4 object using for...in loop
for (const key in person4) {
  console.log(`person4['${key}'] : `, `${key}: ${person4[key]}`);
}
// Output:
// name: John
// age: 30
// country: USA

// ------------------------------------------------------------
// 10. Özelliğin Var Olup Olmadığını Kontrol Etme - Checking If a Property Exists

const person5 = { name: "John", age: 30, country: "USA" };

// Checking if 'city' exists in the person5 object
if ("city" in person5) {
  console.log(person5.city);
} else {
  console.log("City not found");
}
// Output: City not found
