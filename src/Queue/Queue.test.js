import { Queue } from "./Queue";

describe("queue", () => {
  describe("add", () => {
    it("should add an item to the queue when you call add", () => {
      const queue = new Queue();
      queue.add(1);
      expect(queue.remove()).toBe(1);
    });
  });
  // why does "peek" live inside "describe(add)"
  describe("peek", () => {
    it("peek - should return the first item without deleting it", () => {
      const queue = new Queue();
      queue.add(1);
      queue.add(2);
      expect(queue.peek()).toBe(1);
      expect(queue.size()).toBe(2);
    });
  });
  describe("remove", () => {
    it("should remove the first item and retuns it", () => {
      const queue = new Queue();
      queue.add(1);
      queue.add(2);
      expect(queue.remove()).toBe(1);
      expect(queue.size()).toBe(1);
    });
  });
  describe("destroy", () => {
    // remove*
    // so it's confusing what your describe keys are
    // are they function names? If so "remove" and "destroy" should be seperate
    // if they describe the behaviour you're testing, call it "describe("removing elements")" or so
    it("should removes everything", () => {
      const queue = new Queue();
      queue.add(1);
      queue.add(2);
      expect(queue.size()).toBe(2);
      queue.destroy();
      expect(queue.size()).toBe(0);
    });
  });
  // perfect
  describe("search", () => {
    it("should return the index of the item if found", () => {
      const queue = new Queue();
      queue.add(1);
      queue.add(2);
      expect(queue.search(2)).toBe(1);
    });
  });
  // perfect
  describe("size", () => {
    it("should return the size of the queue", () => {
      const queue = new Queue();
      queue.add(1);
      queue.add(2);
      expect(queue.size()).toBe(2);
    });
  });
});
