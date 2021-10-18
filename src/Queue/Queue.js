export class Queue {
  constructor() {
    this._storage = [];
  }
  add(element) {
    this._storage.push(element);
  }
  remove() {
    return this._storage.shift();
  }
  size() {
    return this._storage.length;
  }
  destroy() {
    this._storage = [];
  }
  peek() {
    return this._storage[0];
  }
  search(element) {
    return this._storage.indexOf(element);
  }
}
const queue = new Queue();
queue.add("mouse");
queue.add("cat");
queue.add("dog");
queue.peek();
queue.search();
console.log(queue);
