// https://hepturkce.com/kisaca-heceleme/
// her hece de sadece bir tane sesli harf var.

// Sesli (Ünlü) harfler.
const turkishVowelChar = ["a", "e", "i", "ı", "u", "ü", "o", "ö"];

// hece sayisi `num`
function syllableNumber(str) {
  let count = 0;
  for (const s of str) {
    if (turkishVowelChar.includes(s)) count++;
  }
  return count;
}

function hEcElE(turkishString) {
  // Type check | Giriş tip kontrolü
  // Check if input is a string | Girişin string olup olmadığını kontrol et
  if (typeof turkishString !== "string")
    return "Girilen deger STRING olmalidir.";

  // Check if input is numeric | Girişin sayısal olup olmadığını kontrol et
  if (!isNaN(turkishString)) return "Girilen deger Sayı olamaz.";

  // Check minimum length requirement | Minimum uzunluk kontrolü
  if (turkishString.length <= 1)
    return "Hecelemek icin kelime uzunlugu yetersiz.";

  // START SYLLABIFICATION | HECELEME İŞLEMİ BAŞLANGICI

  // Initialize result variable | Sonuç değişkenini başlat
  let syllabification = "";

  // Normalize and prepare characters | Karakterleri normalize et ve hazırla
  const lowerChars = turkishString.toLocaleLowerCase().trim().split("");
  const lowerCharsLastIndex = lowerChars.length - 1;

  let index = 0;
  // Get syllable count | Hece sayısını al 
  let syllableCount = syllableNumber(lowerChars);

  // Single syllable case | Tek hece durumu
  if (syllableCount === 1) return turkishString;

  // Syllabification loop | Heceleme döngüsü
  while (syllableCount >= 0) {
    // Calculate next indices | Sonraki indeksleri hesapla
    const afterTwoIndex =
      index === lowerCharsLastIndex
        ? index
        : index + 1 === lowerCharsLastIndex
        ? lowerCharsLastIndex
        : index + 2;

    const afterIndex = index == lowerCharsLastIndex ? index : index + 1;

    const char = lowerChars[index]; // Current character | Mevcut karakter

    // Handle remaining characters | Kalan karakterleri işle
    if (syllableCount === 0) {
      for (let i = index; i < lowerChars.length; i++) {
        syllabification += lowerChars[i];
      }
      break;
    }

    // Vowel processing logic | Sesli harf işleme mantığı
    if (turkishVowelChar.includes(char)) {
      // Case 1: Two vowels ahead | İki sesli harf sonraki durumu
      if (turkishVowelChar.includes(lowerChars[afterTwoIndex])) {
        syllabification += `${char} `;
        index++;
        syllableCount--;
        continue;
      }
      // Case 2: Two consonants ahead | İki sessiz harf sonraki durumu
      else if (
        !turkishVowelChar.includes(lowerChars[afterIndex]) &&
        !turkishVowelChar.includes(lowerChars[afterTwoIndex])
      ) {
        syllabification += `${char}${lowerChars[afterIndex]} `;
        syllableCount--;
        index += 2;
        continue;
      }
      // Case 3: Next character is vowel | Sonraki karakter sesli harf durumu
      else if (turkishVowelChar.includes(lowerChars[afterIndex])) {
        syllabification += `${char} `;
        syllableCount--;
        index++;
        continue;
      }
    }

    // Consonant processing | Sessiz harf işleme
    syllabification += char;
    index++;
  }
  return syllabification;
}

console.log(hEcElE("123"));
console.log(hEcElE(true));
console.log(hEcElE("P"), "\n");

console.log(hEcElE("Ben"));
console.log(hEcElE("Fero"));
console.log(hEcElE("KATLANARAK"));
console.log(hEcElE("Patika"));
console.log(hEcElE("aralıksız"));
console.log(hEcElE("araba"));
console.log(hEcElE("beceriksiz"));
console.log(hEcElE("kaan"));
console.log(hEcElE("ünlü"));
console.log(hEcElE("psikolog"));
console.log(hEcElE("ışık"));
console.log(hEcElE("Anne"));
console.log(hEcElE("Umursamaz"));
console.log(hEcElE("tren"));
console.log(hEcElE("almanya"));
