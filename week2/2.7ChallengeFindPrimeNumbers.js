// Challenge | Meydan okuma :
// Prime Numbers | Asal Sayılar

// Prime numbers are only positive numbers that are exactly divisible by themselves and by 1.
// a. Write a function that finds the closest prime number to the number given as a parameter.
// b. Write a function that finds the sum of the first prime number greater than the number given as a
//    parameter and the first prime number less than the number given as a parameter.

// Asal sayilar yalnizca kendilerine ve 1'e tam bolunen pozitif sayilardir.
// a. Parametre olarak verilen sayiya en yakin asal sayiyi bulan bir fonksiyon yazin.
// b. Parametre olarak verilen sayidan buyuk olan ilk asal sayinin ve kucuk olan ilk asal sayinin toplamini bulan bir fonksiyon yazin.

// Asal sayı mı ?
function isPrime(num) {
  // Number check | Sayı kontrolü
  if (num <= 1) return false;

  // Divide the number by two and check up to that number | Sayıyı ikiye böl ve o sayıya kadar kontrol et
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimeNumbers(num) {
  // Type check | Tip kontrolü
  if (typeof num !== "number")
    return "Please enter number. | Lütfen sayı giriniz."; // exit

  // Number check | Sayı kontrolü
  if (num <= 1)
    return "Please enter a number greater than zero. | Lütfen sıfırdan büyük değer giriniz. "; // exit

  //
  let value = {};
  let less = num - 1;
  let greater = num + 1;

  while (true) {
    // If it is not a prime number, we decrement the value of the variable `less`
    // Eğer asal sayı değilse `less` değişkenin değerini küçültüyoruz
    if (!isPrime(less)) less--;

    // If it is not a prime number, we increase the value of the variable `greater`
    // Eğer asal sayı değilse `greater` değişkenin değerini artırıyoruz
    if (!isPrime(greater)) greater++;

    // If the values are the nearest least prime and greatest prime, stop the loop and return the values
    // Eğer değerler en yakın küçük asal ve büyük asal değer bulunduysa döngüyü durdur değerleri geri dön
    if (isPrime(less) && isPrime(greater)) {
      value = {
        leastPrimeNumber: less,
        number: num,
        greatestPrimeNumber: greater,
      };
      break;
    }
  }
  return value;
}

console.log(findPrimeNumbers("Kaan"));
console.log(findPrimeNumbers(0));
console.log(findPrimeNumbers(1));
console.log(findPrimeNumbers(37));
console.log(findPrimeNumbers(55));
console.log(findPrimeNumbers(100));
