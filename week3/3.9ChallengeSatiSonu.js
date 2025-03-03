const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed fermentum enim, eget egestas enim. Donec fringilla bibendum placerat. Vivamus in turpis et sapien pulvinar dictum ut vel nisl. Duis in ante tempor elit dapibus consectetur vel id arcu. Donec elementum euismod purus, a gravida lectus lacinia sed. Curabitur molestie, felis ornare luctus viverra, dui lacus ultricies orci, id dignissim sapien odio pretium nisi. Etiam accumsan elementum ligula, eget finibus urna pharetra et. Praesent sit amet ligula vel erat sodales suscipit vitae vitae metus. Aenean accumsan sapien a ipsum elementum, non lobortis est tincidunt. Etiam auctor tellus et pharetra auctor. Vivamus elit diam, sollicitudin quis nunc quis, porta dapibus augue. Pellentesque in placerat tellus. Etiam rhoncus odio tincidunt auctor tincidunt. Nulla facilisi.";

function TextParser(text, wordCount) {
  let result = "";

  // The label we use to move to the bottom line is `\n = new line`
  // Alt satıra geçmek için kullandığımız etiket `\n = new line`
  const newLine = "\n";

  // delete the leading and trailing spaces in the text and assign it to a character space-separated array.
  // yazıdaki başındaki ve sonundaki boşlukları sil ve bir karakter boşluğa göre ayır diziye at.
  const textList = text.trim().split(" ");

  // return if the incoming text is the same as the number that should be on the line.
  // eğer gelen yazi, satırdaki olması gereken sayi ile aynı ise geri döndür.
  if (textList.length <= wordCount) return text; // exit

  // loop in element
  // döngüdeki eleman
  let i = 0;

  // We loop through the words we put in the array one by one.
  // diziye attığımız kelimleri tek tek dönüyoruz.
  while (textList.length > i) {
    // Move to the next line when the `i` element in the loop reaches the required number of words in the line.
    // döngüdeki `i` elemanı satırdaki olması gereken kelime sayısına ulaştığa alt satıra geç.
    if (i % wordCount === 0) result += newLine;

    // Add the current word in the array to the variable `result`.
    // `result` değişkenine dizdeki şu an ki kelmiye ekle.
    result += `${textList[i]} `;

    // next element.
    // bir sonraki elemana geç.
    i++;
  }
  console.log(result);
  return result;
}

TextParser(text, 5); // her satirda 5 kelime olmali.
