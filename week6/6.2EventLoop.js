// Topic: Event Loop (Macrotask vs Microtask) / Konu: Event Loop (Macrotask vs Microtask)

/*
Event Loop: JS runtime'da asenkron görevlerin çalıştırılma sırasını yönetir.
Promise.then → microtask queue, setTimeout → macrotask queue
*/

console.log("start"); // "start"
setTimeout(() => console.log("timeout"), 0); // macrotask
Promise.resolve().then(() => console.log("promise")); // microtask
console.log("end"); // "end"

// Expected output / Beklenen çıktı:
// start
// end
// promise
// timeout

/*
Explanation / Açıklama:
1) 'start' ve 'end' eşzamanlı (synchronous) olarak yazdırılır.
2) Promise callback'leri (microtasks) macrotask'lar çalışmadan önce işlenir.
3) setTimeout callback'leri (macrotasks) microtask kuyruğu boşaldıktan sonra çalışır.
*/
