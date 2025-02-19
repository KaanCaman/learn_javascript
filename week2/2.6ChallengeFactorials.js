// Challenge | Meydan okuma : Factorial

// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

function factorial(num) {
  // Type check | Tip kontrolü
  if (typeof num !== "number")
    console.error("Please enter number. | Lütfen sayı giriniz.");

  // Number check | Sayı kontrolü
  if (num < 0)
    console.error(
      "Enter a number zero or greater. | Sıfır veya daha büyük bir sayı giriniz. "
    );

  // Calculate factorial | Faktoryel hesapla
  let factorial = 1;

  // Exception case | İstisna durum
  if (num === 0) return factorial;

  while (num > 1) {
    factorial = factorial * num;
    num--;
  }

  return factorial;
}

factorial("kaan"); // Please enter number. | Lütfen sayı giriniz.
factorial(-2); // Enter a number zero or greater. | Sıfır veya daha büyük bir sayı giriniz.
console.log(factorial(6)); // 720
