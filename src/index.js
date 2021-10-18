import { Queue } from "./Queue/Queue.js";
import { Stack } from "./Stack/Stack.js";

const stack = new Stack();
stack.push("cat");
stack.push("dog");
console.log(stack);
const queue = new Queue();
queue.add("cat");
console.log(stack);
