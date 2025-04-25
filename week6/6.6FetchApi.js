// Topic: Fetch API
// Promise-based Fetch Example / Promise Tabanlı Fetch Örneği
console.log("Fetch API Örneği (Promise) Başladı");
console.log("-----------------------------------------------");
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        "Ağ yanıtı başarılı olmadı / Network response was not ok"
      );
    }
    return response.json();
  })
  .then((data) => {
    console.log(
      "Fetch ile gelen veri (Promise) / Fetched data (Promise):",
      data
    );
  })
  .catch((error) => {
    console.error(
      "Fetch Hatası (Promise) / Fetch Error (Promise):",
      error.message
    );
  })
  .finally(() => {
    console.log(
      "Fetch isteği tamamlandı (Promise) / Fetch request completed (Promise)"
    );
    console.log("\n\n\n");
  });

// Async/Await Fetch Example / Async/Await ile Fetch Örneği
async function fetchWithAsync() {
  console.log("Fetch API Örneği (Async/Await) Başladı");
  console.log("-----------------------------------------------");
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(
        "Ağ yanıtı başarılı olmadı / Network response was not ok"
      );
    }
    const data = await response.json();
    console.log(
      "Fetch ile gelen veri (Async/Await) / Fetched data (Async/Await):",
      data
    );
  } catch (error) {
    console.error(
      "Fetch Hatası (Async/Await) / Fetch Error (Async/Await):",
      error.message
    );
  } finally {
    console.log(
      "Fetch isteği tamamlandı (Async/Await) / Fetch request completed (Async/Await)"
    );
  }
}

fetchWithAsync();
