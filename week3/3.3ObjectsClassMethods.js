// Object Class Methods - Nesne Sınıf Metotları
// ------------------------------------------------------------

// Object.keys() - Nesnenin anahtarlarını almak

const user = {
  name: "Alice",
  age: 25,
  city: "Istanbul",
};

// Object.keys() returns an array of the object's keys
// Object.keys() nesnenin anahtarlarını bir dizi olarak döndürür

const keys = Object.keys(user);
console.log(keys);
// Output: ["name", "age", "city"]
// ------------------------------------------------------------

// Object.values() - Nesnenin değerlerini almak

// Object.values() returns an array of the object's values
// Object.values() nesnenin değerlerini bir dizi olarak döndürür

const values = Object.values(user);
console.log(values);
// Output: ["Alice", 25, "Istanbul"]
// ------------------------------------------------------------

// Object.entries() - Nesnenin anahtar ve değer çiftlerini almak

// Object.entries() returns an array of key-value pairs
// Object.entries() nesnenin anahtar-değer çiftlerini bir dizi olarak döndürür

const entries = Object.entries(user);
console.log(entries);
// Output: [["name", "Alice"], ["age", 25], ["city", "Istanbul"]]
// ------------------------------------------------------------

// Object.assign() - Nesneleri birleştirmek veya kopyalamak

const person = { firstName: "John", lastName: "Doe" };
const details = { age: 30, country: "USA" };

// Object.assign() merges two or more objects into a single object
// Object.assign() iki veya daha fazla nesneyi birleştirerek tek bir nesne oluşturur

const mergedPerson = Object.assign({}, person, details);
console.log(mergedPerson);
// Output: { firstName: "John", lastName: "Doe", age: 30, country: "USA" }
// ------------------------------------------------------------

// Object.freeze() - Nesneyi dondurmak (Değişikliklere karşı korumak)

const frozenUser = {
  username: "coder123",
  password: "securePass",
};

// Object.freeze() makes the object immutable (unchangeable)
// Object.freeze() nesneyi değiştirilemez hale getirir

Object.freeze(frozenUser);
frozenUser.password = "newPass"; // This will not work
console.log(frozenUser);
// Output: { username: "coder123", password: "securePass" }
// ------------------------------------------------------------

// Object.seal() - Nesneyi mühürlemek (Yeni özellik eklenemez ama mevcut olanlar değiştirilebilir)

const sealedUser = {
  username: "developer",
  role: "admin",
};

// Object.seal() prevents adding or deleting properties but allows modifications
// Object.seal() yeni özellik eklemeyi veya silmeyi engeller ama mevcut özellikleri değiştirmeye izin verir

Object.seal(sealedUser);
sealedUser.role = "user"; // Allowed
sealedUser.password = "12345"; // Not allowed (new property)
console.log(sealedUser);
// Output: { username: "developer", role: "user" }
// ------------------------------------------------------------

// Object.hasOwnProperty() - Nesnenin belirli bir özelliğe sahip olup olmadığını kontrol etmek

const car = {
  brand: "Toyota",
  model: "Corolla",
};

// Object.hasOwnProperty() checks if a property exists in an object
// Object.hasOwnProperty() belirli bir özelliğin nesnede olup olmadığını kontrol eder

console.log(car.hasOwnProperty("brand")); // Output: true
console.log(car.hasOwnProperty("year")); // Output: false
// ------------------------------------------------------------

// Object.getOwnPropertyDescriptor() - Özelliğin tanımlayıcısını almak

const product = {
  name: "Laptop",
  price: 1500,
};

// Object.getOwnPropertyDescriptor() returns property descriptors
// Object.getOwnPropertyDescriptor() belirli bir özelliğin tanımlayıcısını döndürür

const descriptor = Object.getOwnPropertyDescriptor(product, "price");
console.log(descriptor);
// Output: { value: 1500, writable: true, enumerable: true, configurable: true }
// ------------------------------------------------------------

// Object.defineProperty() - Yeni özellik eklemek veya var olanı değiştirmek

const personInfo = {};

// Object.defineProperty() adds a new property with custom descriptors
// Object.defineProperty() özel tanımlayıcılarla yeni bir özellik ekler

Object.defineProperty(personInfo, "name", {
  value: "Emma",
  writable: false, // Value cannot be changed
  enumerable: true, // Will be included in Object.keys()
  configurable: false, // Cannot be deleted or reconfigured
});

console.log(personInfo.name); // Output: Emma
personInfo.name = "Olivia"; // This will not work because writable is false
console.log(personInfo.name); // Output: Emma
// ------------------------------------------------------------

// Object.create() - Yeni bir nesne oluşturmak

const animal = {
  makeSound: function () {
    console.log("Animal sound...");
  },
};

// Object.create() creates a new object with a prototype
// Object.create() belirli bir prototip ile yeni bir nesne oluşturur

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof woof!");
};

dog.makeSound(); // Output: Animal sound...
dog.bark(); // Output: Woof woof!
