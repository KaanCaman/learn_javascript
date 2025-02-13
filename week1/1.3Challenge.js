// Challenge: Scope & Shadowing & Mutability & Side Effects

// Question:
// Identify the lines in the following code fragment that have errors about Scope, Shadowing, Mutability and Side Effects.

// Task:
// Fix the lines and share the correct version.

// Soru :
// Aşağıdaki kod parçasındaki Scope, Shadowing, Mutability ve Side Effects hakkında hata olan satırları tespit edin.

// Görev :
//  Satırları düzeltip, doğru versiyonunu paylaşın.

function calculateTotal(cart) {
  const total = 0;

  for (let i = 0; i < cart.length; i++) {
    let itemPrice = cart[i];
    let total = total + itemPrice;
  }

  if (cart.length > 0) {
    var discount = 0.1;
  }

  console.log("Discount applied:", discount);

  total = total * (1 - discount);
  return total;
}

function fixCalculateTotal(cart) {
  // mutable
  // The 'total' variable should be mutable as its value will be updated during the loop.
  // 'total' değişkeni mutable (değişken) olmalıdır çünkü döngü sırasında değeri güncellenecek.

  let total = 0;

  // scope
  // The 'discount' variable should be declared within the function scope, as it needs to be accessible inside the function.
  // 'discount' değişkeni fonksiyon içinde tanımlanmalıdır çünkü sadece fonksiyon içinde kullanılacak.

  let discount = 0; // Initially setting the discount to 0
  // Başlangıçta 'discount' sıfır olarak ayarlanıyor.

  for (let i = 0; i < cart.length; i++) {
    // immutable
    // 'itemPrice' should be immutable since its value doesn't change inside the loop.
    // 'itemPrice' değişkeni sabit olmalıdır çünkü döngü içinde değeri değişmeyecek.

    const itemPrice = cart[i];

    // shadowing
    // There was an issue of shadowing the 'total' variable within the loop. Instead, we should directly update 'total'.
    // Döngü içinde 'total' değişkeninin gölgelenmesi sorunu vardı. Bunun yerine direkt olarak 'total' güncellenmelidir.

    const forTotal = total + itemPrice; // We use 'forTotal' temporarily, but we will update 'total' directly below.
    // 'forTotal' geçici olarak kullanıldı, ancak aşağıda 'total' direk güncelleniyor.

    total = forTotal; // Updating the 'total' with the new value
    // 'total' değişkeni yeni değerle güncelleniyor.
  }

  // side effect
  // If the cart is not empty, the discount is applied. This affects the state of 'discount' globally.
  // Eğer sepet boş değilse, indirim uygulanır. Bu, 'discount' değişkeninin durumunu küresel olarak etkiler.

  if (cart.length > 0) {
    discount = 0.1; // Applying a discount of 10% if the cart is not empty
    // Sepette ürün varsa %10 indirim uygulanır.
  }

  console.log("Discount applied:", discount); // Logging the discount applied to the cart.
  // Uygulanan indirimi ekrana yazdırıyoruz.

  total = total * (1 - discount); // Apply the discount to the total amount.
  // İndirimi toplam tutara uyguluyoruz.

  return total; // Returning the final total
  // Nihai toplamı geri döndürüyoruz.
}

// Test: Calculating total for a cart with two items of price 50 each.
console.log(fixCalculateTotal([50, 50])); // Expected output: 90 (after applying the discount)
// Test: 50'şer TL fiyatında 2 ürünle toplam hesaplanıyor. Beklenen çıktı: 90 (indirim sonrası)
