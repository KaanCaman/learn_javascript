// Objects - Nesneler

// Object creation - Nesne oluşturma

// Creating an object using object literal
// Nesne literali kullanarak nesne oluşturma

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
  isStudent: false,
};

console.log(person);
// Output: { firstName: 'John', lastName: 'Doe', age: 30, city: 'New York', isStudent: false }

// ------------------------------------------------------------

// Accessing object properties - Nesne özelliklerine erişim

// Dot notation - Nokta gösterimi kullanarak erişim
console.log(person.firstName); // Output: John

// Bracket notation - Köşeli parantez gösterimi kullanarak erişim
console.log(person["lastName"]); // Output: Doe

// ------------------------------------------------------------

// Modifying object properties - Nesne özelliklerini değiştirme

person.age = 35; // Changing the age property
// Yaş özelliğini değiştiriyoruz

person["city"] = "Los Angeles"; // Changing the city property using bracket notation
// Köşeli parantez gösterimi kullanarak şehir özelliğini değiştiriyoruz

console.log(person);
// Output: { firstName: 'John', lastName: 'Doe', age: 35, city: 'Los Angeles', isStudent: false }

// ------------------------------------------------------------

// Adding new properties - Yeni özellikler ekleme

person["country"] = "USA";
// "country" özelliğini ekleyerek nesneyi genişletiyoruz

console.log(person);
// Output: { firstName: 'John', lastName: 'Doe', age: 35, city: 'Los Angeles', isStudent: false, country: 'USA' }

// ------------------------------------------------------------

// Deleting properties - Nesne özelliklerini silme

delete person.isStudent;
// "isStudent" özelliğini nesneden kaldırıyoruz

console.log(person);
// Output: { firstName: 'John', lastName: 'Doe', age: 35, city: 'Los Angeles', country: 'USA' }

// ------------------------------------------------------------

// Object methods - Nesne metodları

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,

  // Method to display car details
  // Araba detaylarını gösteren bir metod
  getDetails: function () {
    return `${this.brand} ${this.model}, Year: ${this.year}`;
  },
};

console.log(car.getDetails());
// Output: Toyota Corolla, Year: 2022

// ------------------------------------------------------------

// Checking if a property exists - Bir özelliğin var olup olmadığını kontrol etme

console.log("brand" in car); // Output: true

console.log("color" in car); // Output: false

// ------------------------------------------------------------

// Looping through an object - Nesne üzerinde döngü yapma

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
  // Anahtar: Değer çiftlerini yazdırıyoruz
}

// Output:
// brand: Toyota
// model: Corolla
// year: 2022
// getDetails: function() { return `${this.brand} ${this.model}, Year: ${this.year}` }
