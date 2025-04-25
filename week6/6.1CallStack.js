// Topic: Call Stack (LIFO) / Konu: Call Stack (LIFO)

// Example of function calls – last in, first out (LIFO)
// Fonksiyon çağrılarının yığıt mantığı (LIFO)
function first() {
  console.log("first"); // "first"
}

function second() {
  first();
  console.log("second"); // "second"
}

second();
// Expected output / Beklenen çıktı:
// first
// second

// Explanation / Açıklama:
// 1) second() is pushed onto the stack.
//    second() stack'e eklenir.
// 2) Inside second(), first() is pushed, then popped after execution.
//    second içindeki first(), çalıştıktan sonra stack'ten çıkarılır.
// 3) Functions execute in LIFO order.
//    Fonksiyonlar LIFO sırasına göre çalışır.
