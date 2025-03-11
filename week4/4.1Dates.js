// Date nesnesi ile tarih ve saat işlemleri
// Working with Date object

// 1. Şu anki tarih ve saati alma
// Getting the current date and time
const now = new Date();
console.log(now); // Output: Current date and time

// 2. Belirli bir tarih oluşturma (Yıl, Ay (0-11), Gün, Saat, Dakika, Saniye)
// Creating a specific date (Year, Month (0-11), Day, Hour, Minute, Second)
const specificDate = new Date(2023, 5, 15, 14, 30, 0);
console.log(specificDate); // Output: Thu Jun 15 2023 14:30:00 GMT+0000

// 3. ISO formatında tarih oluşturma
// Creating a date in ISO format
const isoDate = new Date("2023-06-15T14:30:00Z");
console.log(isoDate); // Output: Thu Jun 15 2023 14:30:00 GMT+0000

// 4. Şu anki yılı alma
// Getting the current year
const currentYear = now.getFullYear();
console.log(currentYear); // Output: 2024

// 5. Şu anki ayı alma (0-11)
// Getting the current month (0-11)
const currentMonth = now.getMonth();
console.log(currentMonth); // Output: 2 (March, because January is 0)

// 6. Şu anki günü alma (1-31)
// Getting the current day of the month (1-31)
const currentDay = now.getDate();
console.log(currentDay); // Output: 11

// 7. Haftanın gününü alma (0 = Pazar, 6 = Cumartesi)
// Getting the day of the week (0 = Sunday, 6 = Saturday)
const currentWeekDay = now.getDay();
console.log(currentWeekDay); // Output: 2 (Tuesday)

// 8. Şu anki saat, dakika ve saniyeyi alma
// Getting the current hour, minute, and second
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
const currentSecond = now.getSeconds();
console.log(
  `Saat: ${currentHour}, Dakika: ${currentMinute}, Saniye: ${currentSecond}`
);
// Output: Hour: 14, Minute: 30, Second: 15

// 9. Zaman damgası (Timestamp) - UNIX Epoch (1970'den itibaren milisaniye)
// Getting UNIX timestamp (milliseconds since Jan 1, 1970)
const timestamp = now.getTime();
console.log(timestamp); // Output: 1710172345678

// 10. Şu anki UNIX Timestamp (Saniye cinsinden)
// Getting current UNIX timestamp (in seconds)
const unixTimestamp = Math.floor(Date.now() / 1000);
console.log(unixTimestamp); // Output: 1710172345

// 11. Bir tarih objesini UTC formatında string olarak almak
// Getting a date as a UTC string
console.log(now.toUTCString()); // Output: Tue, 11 Mar 2025 14:30:00 GMT

// 12. Tarihi kısa formatta almak
// Getting a date as a short localized string
console.log(now.toLocaleDateString()); // Output: 11.03.2025 (depends on locale)

// 13. Tarih ve saat bilgisini yerel formatta almak
// Getting the full date and time in local format
console.log(now.toLocaleString()); // Output: 11.03.2025, 14:30:00

// 14. Bir tarihe zaman ekleme (5 gün ekleyelim)
// Adding time to a date (add 5 days)
const futureDate = new Date();
futureDate.setDate(now.getDate() + 5);
console.log(futureDate); // Output: 16.03.2025

// 15. İki tarih arasındaki farkı bulma (milisaniye cinsinden)
// Calculating the difference between two dates (in milliseconds)
const pastDate = new Date("2025-03-01");
const diff = now - pastDate;
console.log(diff); // Output: Difference in milliseconds

// 16. İki tarih arasındaki farkı gün olarak bulma
// Calculating the difference between two dates (in days)
const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(diffDays); // Output: Number of days between two dates
