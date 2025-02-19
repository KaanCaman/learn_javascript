// Challenge | Meydan okuma : FizzBuzz

// Numbers from 1 to 101;
// a. The ones that divide exactly into thirds, Fizz,
// b. Buzz exactly divisible by 5,
// c. Write a function that logs the exact divisions of both 3 and 5 to the console as FizzBuzz.

// 1'den 101'e kadar olan sayilardan;
// a. 3'e tam bolunenleri Fizz,
// b. 5'e tam bolunenleri Buzz,
// c. hem 3'e hem 5'e tam bolunenleri de FizzBuzz seklinde konsola loglayan bir fonksiyon yazin.

function fizzBuzz() {
  for (let number = 0; number < 107; number++) {
    if (number % 15 === 0) {
      console.log("This number is :", number, "FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("This number is :", number, "Fizz");
    } else if (number % 5 === 0) {
      console.log("This number is :", number, "Buzz");
    }
  }
}

fizzBuzz();
