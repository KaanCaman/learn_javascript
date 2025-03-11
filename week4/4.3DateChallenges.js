// Yaş Hesaplama Fonksiyonu
// Function to calculate age

function calculateAge(date) {
  // Girilen tarihi Date nesnesine çeviriyoruz
  // Converting the input date string to a Date object
  const birthDate = new Date(date);

  // Şu anki tarihi alıyoruz
  // Getting the current date
  const currentDate = new Date();

  // Yaşı hesaplıyoruz
  // Calculating the age
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Doğum günü henüz gelmediyse yaşı bir azaltıyoruz
  // If the birthday hasn't occurred yet this year, subtract one from age
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

// Farklı tarih formatları ile test edelim
// Testing the function with different date formats
console.log(calculateAge("1990-06-15")); 
console.log(calculateAge("2000-12-10")); 
console.log(calculateAge("1985-03-25")); 
console.log(calculateAge("2024-03-25")); 
console.log(calculateAge("2024-03-10")); 

// Bir Tarihin Hafta Sonu Olup Olmadığını Kontrol Etme
// Function to check if a given date falls on a weekend

function isWeekend(date) {
  // Girilen tarihi Date nesnesine çeviriyoruz
  // Converting the input date string to a Date object
  const givenDate = new Date(date);

  // Gün değerini alıyoruz (0: Pazar, 1: Pazartesi, ..., 6: Cumartesi)
  // Getting the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
  const dayOfWeek = givenDate.getDay();

  // Eğer gün Cumartesi (6) veya Pazar (0) ise true döndür
  // If the day is Saturday (6) or Sunday (0), return true
  return dayOfWeek === 6 || dayOfWeek === 0;
}

// Farklı tarih formatları ile test edelim
// Testing the function with different date formats
console.log(isWeekend("2020-01-18")); // Output: true (Cumartesi / Saturday)
console.log(isWeekend("2023-10-23")); // Output: false (Pazartesi / Monday)
console.log(isWeekend("2024-05-05")); // Output: true (Pazar / Sunday)
console.log(isWeekend("2025-07-09")); // Output: false (Çarşamba / Wednesday)
