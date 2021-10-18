/**
 * Stack by Marwan Alshaker 2021
 * Version: 1.0.1
 */
export class Stack {
  constructor() {
    this._data = [];
  }
  pop() {
    return this._data.pop();
  }
  push(element) {
    this._data.push(element);
  }
  size() {
    return this._data.length;
  }
  destroy() {
    this._data = [];
  }
  peek() {
    return this._data[this._data.length - 1];
  }
  search(element) {
    const index = this._data.indexOf(element);
    if (index > -1) {
      // index is zero-based
      // length is one-based, so we subtract one
      return this._data.length - index - 1;
    }
    return -1;
  }
  log() {
    console.log(this._data);
  }
}
