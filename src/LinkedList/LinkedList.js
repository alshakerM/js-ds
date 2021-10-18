class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
export class LinkedList {
  constructor() {
    this._head = null;
    this._listSize = 0;
  }
  add(data) {
    const node = new Node(data);
    let current;
    if (this._head === null) {
      this._head = node;
    } else {
      current = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this._listSize++;
  }

  addAt(data, index) {
    if (index <= 0) {
      this._head = new Node(data, this._head);
      this._listSize++;
    } else if (index > this._listSize) {
      this.add(data);
    } else {
      const node = new Node(data);
      let current, previous;
      current = this._head;
      let count = 0;
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
      this._listSize++;
    }
  }
  removeAt(index) {
    let current = this._head;
    let previous;
    let count = 0;
    if (index <= 0) {
      this._head = current.next; // deleted the head and put the next node in it's place
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this._listSize--;
    return current.data;
  }
  destroy() {
    this._head = null;
    this._listSize = 0;
  }
  get(index) {
    let current = this._head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }
  size() {
    return this._listSize;
  }
}
const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(200);
linkedList.add(300);
linkedList.add(400);

console.log(linkedList);
