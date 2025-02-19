// Challenge | Meydan okuma
// Select the Color | Renk Seçimi

// From numbers up to 50, assign a color to each 10-number range. For example, 10-20 -> red.
// 50'ye kadar olan sayilardan, her 10 sayi belirten araliga bir renk atayin. Ornegin, 10-20 -> kirmizi.

function selectTheColor(number) {
  if (number >= 0 && number <= 10) return "Lacivert | Navy blue";
  else if (number > 10 && number <= 20) return "Sarı | Yellow";
  else if (number > 20 && number <= 30) return "Yeşil | Green";
  else if (number > 30 && number <= 40) return "Kırmızı | Red";
  else if (number > 40 && number <= 50) return "Beyaz | White";
  else
    return "Bu sayıya karşılık bir renk bulunamadı. | No color was found for this number.";
}

console.log(selectTheColor(19), selectTheColor(7)); // Sarı , Yellow | Navy blue
console.log(selectTheColor(-1)); // Bu sayıya karşılık bir renk bulunamadı. | No color was found for this number.
console.log(selectTheColor(51)); // Bu sayıya karşılık bir renk bulunamadı. | No color was found for this number.
