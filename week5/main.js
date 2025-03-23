// 📂 1. Named Import : Kullanımı | Usage
// 📌 Belirli değişkenleri veya fonksiyonları içe aktarma
// 📌 Import specific variables or functions
import { pi, square } from "./5.1_es6_modules/5.1.1MathUtils.js";

console.log(pi); // Output: 3.14
console.log(square(4)); // Output: 16

// 📂 Default Import : Kullanımı | Usage
// 📌 Default olarak içe aktarma, süslü parantez kullanılmaz
// 📌 Import by default, no curly brackets used
import logMessage from "./5.1_es6_modules/5.1.2DefaultExport.js";

logMessage("Hello, Modules!"); // Output: Log: Hello, Modules!

// 2. Default import vs Named import
import defaultFunc, {
  greeting,
  sayHi,
} from "./5.2_default_export_vs_named_export/5.2.1Helpers.js";

console.log(greeting); // Output: Hello!
console.log(sayHi("Alice")); // Output: Hi, Alice
defaultFunc(); // Output: I am the default function!

// 3. CommonJS Import
// ES6 öncesinde Node.js ortamında kullanılan modül sistemidir.
// It is the module system used in the Node.js environment before ES6.
/*
const math = require("./5.3_commonjs_modules/5.3.1Math.js");
console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); // Output: 6
*/

// 4. Module scope
import { showMessage } from "./5.4_module_scope/5.4.1ModuleScope.js";

showMessage(); // Output: This is a module!
// console.log(message); // HATA! message is not defined

// 5. dynamic import
function loadModule() {
  import("./5.5_dynamic_imports/5.5.1DynamicImports.js").then((module) => {
    module.default("Dynamically Imported!");
  });
}

loadModule(); // Output: Log: Dynamically Imported!
