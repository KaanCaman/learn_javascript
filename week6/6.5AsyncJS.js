// Topic: Asenkron JavaScript / Asynchronous JS

// 1) Callback-based Asynchronous Example / Callback tabanlı asenkron örnek
function doAsyncTask(callback) {
  console.log("Görev başlangıcı / Task start");
  setTimeout(() => {
    console.log("Görev tamamlandı / Task completed");
    callback();
  }, 1000);
}

doAsyncTask(() => {
  console.log("doAsyncTask -> Callback çalıştı / Callback executed");
});

// Expected output / Beklenen çıktı:
// Görev başlangıcı / Task start
// (1 saniye bekleme / wait 1s)
// Görev tamamlandı / Task completed
// Callback çalıştı / Callback executed

// 2) Promise-based Asynchronous Example / Promise tabanlı asenkron örnek
function doPromiseTask() {
  console.log("Promise başlıyor / Promise start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // veya false
      if (success) resolve("Başarılı / Success");
      else reject(new Error("Başarısız / Failure"));
    }, 1000);
  });
}

// Kullanım / Usage with .then/.catch
doPromiseTask()
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));

// 3) Async/Await Example / Async/Await Örneği
async function runTasks() {
  try {
    const result = await doPromiseTask();
    console.log("Async/Await sonucu: " + result);
  } catch (err) {
    console.error("Hata yakalandı: " + err.message);
  }
}

runTasks();
