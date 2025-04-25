// 6.3_stackOverflow.js
// Topic: Stack Overflow / Konu: Stack Overflow

// Infinite Recursion Example / Sonsuz Rekürsiyon Örneği
function infinite() {
  return infinite();
}

// To see the error, uncomment the line below:
// Hatanın oluşumunu görmek için aşağıdaki satırı uncomment edin:
// infinite(); // → RangeError: Maximum call stack size exceeded

// Safe Recursion with Base Case / Base Case'li Güvenli Rekürsiyon
function factorial(n) {
  // Base Case: n 1 veya daha küçükse 1 döner
  // Base Case: if n <= 1 return 1
  if (n <= 1) return 1;
  // Recursive Case: n * factorial(n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Expected: 120 / Beklenen: 120

// Explanation / Açıklama:
// 1) infinite() fonksiyonu kendini durmaksızın çağırdığı için stack doluyor.
//    infinite() keeps calling itself endlessly, causing stack overflow.
// 2) factorial() fonksiyonu base case kontrolü sayesinde güvenli.
//    With base case, recursion terminates when n <= 1.