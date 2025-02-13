// 1.1DataType.js

// 🟢 Primitive Data Types (İlkel Veri Tipleri)

// 📌 String - Metin tipi
let text = "Hello, JavaScript!"; // This is a string (Bu bir metin dizisidir)
console.log(text);
console.log("Data type of text: " + typeof text); // Data type kontrolü (Veri tipi kontrolü)

// 📌 Number - Sayılar
let num = 42; // This is a number (Bu bir sayıdır)
console.log(num);
console.log("Data type of num: " + typeof num); // Data type kontrolü (Veri tipi kontrolü)

// 📌 Boolean - Doğru veya Yanlış (true / false)
let isJavaScriptFun = true; // JavaScript is fun! (JavaScript eğlencelidir!)
console.log(isJavaScriptFun);
console.log("Data type of isJavaScriptFun: " + typeof isJavaScriptFun); // Data type kontrolü (Veri tipi kontrolü)

// 📌 Undefined - Tanımsız değişken
let notDefined; // This variable is undefined (Bu değişken tanımsızdır)
console.log(notDefined);
console.log("Data type of notDefined: " + typeof notDefined); // Data type kontrolü (Veri tipi kontrolü)

// 📌 Null - Boş değer
let emptyValue = null; // Null represents "no value" (Null "değersiz" anlamına gelir)
console.log(emptyValue);
console.log("Data type of emptyValue: " + typeof emptyValue); // Data type kontrolü (Veri tipi kontrolü)

// 🔵 Reference Data Types (Referans Veri Tipleri)

// 📌 Object - Nesne
let person = {
  name: "John", // Name property (İsim özelliği)
  age: 30, // Age property (Yaş özelliği)
};
console.log(person);
console.log("Data type of person: " + typeof person); // Data type kontrolü (Veri tipi kontrolü)

// 📌 Object (Memory Reference) - Bellek referansı
let originalPerson = { name: "Alice", age: 23 };
let copyPerson = originalPerson; // This will point to the same memory reference (Bu aynı bellek referansını işaret eder)

copyPerson.age = 24; // Changing the copied object (Kopyalanan nesneyi değiştirme)
console.log("Original Person after modification:", originalPerson); // Orijinal nesne de değişir (bellek referansı nedeniyle)
console.log("Copied Person:", copyPerson);

// 📌 Array - Dizi (Liste)
let colors = ["Red", "Green", "Blue"]; // This is an array (Bu bir dizidir)
console.log(colors);
console.log("Data type of colors: " + typeof colors); // Data type kontrolü (Veri tipi kontrolü)
