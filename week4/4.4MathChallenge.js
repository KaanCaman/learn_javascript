// Çemberin Alanını Hesaplama Fonksiyonu
// Function to calculate the area of a circle

function circleArea(radius) {
  // Eğer yarıçap negatifse geçersiz bir değer döndür
  // If radius is negative, return an invalid value
  if (radius < 0) {
    return "Geçersiz yarıçap"; // Invalid radius
  }

  // Alan formülü: π * r^2
  // Formula for area: π * r^2
  const area = Math.PI * Math.pow(radius, 2);

  // Hesaplanan alanı döndür
  // Return the calculated area
  return area;
}

console.log(circleArea(5)); // Output: 78.53981633974483
console.log(circleArea(10)); // Output: 314.1592653589793
console.log(circleArea(0)); // Output: 0
console.log(circleArea(-3)); // Output: Geçersiz yarıçap (Invalid radius)
