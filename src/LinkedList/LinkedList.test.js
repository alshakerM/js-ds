import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  describe("size", () => {
    it("should return the size of the list", () => {
      const linkedList = new LinkedList();
      expect(linkedList.size()).toBe(0);
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      expect(linkedList.size()).toBe(3);
    });
  });
  describe("add", () => {
    it("should add an item when you call add", () => {
      const linkedList = new LinkedList();
      expect(linkedList.size()).toBe(0);
      linkedList.add(1);
      linkedList.add(2);
      expect(linkedList.size()).toBe(2);
    });
    it("should add an item at the give index when you call addAt", () => {
      const linkedList = new LinkedList();
      expect(linkedList.size()).toBe(0);
      linkedList.addAt(1, 1);
      linkedList.addAt(2, 2);
      console.log(linkedList);
      expect(linkedList.get(1)).toBe(2);
    });
  });
  describe("remove", () => {
    it("should remove an item at the give index when removeAt is called", () => {
      const linkedList = new LinkedList();
      expect(linkedList.size()).toBe(0);
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(4);

      expect(linkedList.removeAt(2)).toBe(3);
    });
    it("should remove everything when destroy is called", () => {
      const linkedList = new LinkedList();
      expect(linkedList.size()).toBe(0);
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      expect(linkedList.size()).toBe(3);
      linkedList.destroy();
      expect(linkedList.size()).toBe(0);
    });
  });
  describe("get", () => {
    it("should returns the item at the given index when called", () => {
      const linkedList = new LinkedList();
      expect(linkedList.size()).toBe(0);
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      expect(linkedList.get(2)).toBe(3);
      expect(linkedList.size()).toBe(3);
    });
  });
});
