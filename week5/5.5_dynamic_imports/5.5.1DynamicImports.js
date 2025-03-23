// Bazı durumlarda bir modülü ihtiyaç duyulduğunda içe aktarmak isteyebiliriz.
// `import()` fonksiyonu ile dinamik olarak içe aktarma yapılabilir.
//
//In some cases, we may want to import a module when needed.
// Import can be done dynamically with the `import()` function.
//
export default function loggerMan(message) {
  console.log(`Log: ${message}`);
}
