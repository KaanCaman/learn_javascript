// Topic: FIFO & LIFO / Konu: FIFO & LIFO

// (LIFO)
const stack = {
  items: [],

  // Push an element onto the stack / Yığıta eleman ekle
  push(element) {
    this.items.push(element);
  },

  // Pop an element off the stack / Yığıttan eleman çıkar
  pop() {
    if (this.isEmpty()) throw new Error("Stack is empty");
    return this.items.pop();
  },

  // Peek at the top element / Üstteki elemanı gör
  peek() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  },

  // Check if stack is empty / Yığıt boş mu kontrol et
  isEmpty() {
    return this.items.length === 0;
  },

  // Get stack size / Yığıt boyutunu al
  size() {
    return this.items.length;
  },

  // Clear the stack / Yığıtı temizle
  clear() {
    this.items = [];
  },
};

//  (FIFO) Uygulaması
const queue = {
  items: [],

  // Enqueue an element / Kuyruğa eleman ekle
  enqueue(element) {
    this.items.push(element);
  },

  // Dequeue an element / Kuyruktan eleman çıkar
  dequeue() {
    if (this.isEmpty()) throw new Error("Queue is empty");
    return this.items.shift();
  },

  // Peek at the front element / Öndeki elemanı gör
  front() {
    return this.isEmpty() ? null : this.items[0];
  },

  // Check if queue is empty / Kuyruk boş mu kontrol et
  isEmpty() {
    return this.items.length === 0;
  },

  // Get queue size / Kuyruk boyutunu al
  size() {
    return this.items.length;
  },

  // Clear the queue / Kuyruğu temizle
  clear() {
    this.items = [];
  },
};

// Usage Example / Kullanım Örneği
console.log("--- Stack Test ---");
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Expected: 2 / Beklenen: 2
console.log(stack.peek()); // Expected: 1 / Beklenen: 1
console.log(stack.size()); // Expected: 1 / Beklenen: 1
stack.clear();
console.log(stack.isEmpty()); // Expected: true / Beklenen: true

console.log("--- Queue Test ---");
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.dequeue()); // Expected: 'a' / Beklenen: 'a'
console.log(queue.front()); // Expected: 'b' / Beklenen: 'b'
console.log(queue.size()); // Expected: 1 / Beklenen: 1
queue.clear();
console.log(queue.isEmpty()); // Expected: true / Beklenen: true
