import { Stack } from "./Stack";

describe("Stack", function () {
  describe("push - pop - peek", function () {
    it("push and pop - should add an item when you call push", function () {
      const stack = new Stack();
      stack.push(1);

      expect(stack.pop()).toBe(1);
    });
    it("peek - should return the last item added without deleting it", function () {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      expect(stack.peek()).toBe(2);
      expect(stack.size()).toBe(2);
    });
  });
  describe("search", function () {
    it("should return the index of the item if found", function () {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.search(3)).toBe(0);
    });
  });
  describe("size", function () {
    it("should increment size when you push an element", function () {
      const stack = new Stack();

      expect(stack.size()).toBe(0);
      stack.push(1);
      expect(stack.size()).toBe(1);
    });
    it("should decrement size when you pop an element", function () {
      const stack = new Stack();

      expect(stack.size()).toBe(0);
      stack.push(1);
      expect(stack.size()).toBe(1);
      stack.pop();
      expect(stack.size()).toBe(0);
    });
  });
  describe("destroy", function () {
    it("should delete everything", function () {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      stack.destroy();

      expect(stack.size()).toBe(0);
      expect(stack.pop()).toBeUndefined();
    });
  });
});
