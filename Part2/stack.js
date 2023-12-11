const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  //Add new element on the stack
  push(obj) {
    if (obj !== undefined) {
      _items.get(this).push(obj);
    } else {
      throw new Error("Invalid value: Cannot push 'undefined' to the stack.");
    }
  }

  //Remove the last element from the stack and return that element
  pop() {
    const items = _items.get(this);
    if (items.length == 0) throw new Error("Stack is empty.");
    return items.pop();
  }

  //Return the last element on stack
  peek() {
    const items = _items.get(this);
    if (items.length == 0) throw new Error("Stack is empty.");
    return items[items.length - 1];
  }

  get clear() {
    _items.get(this).length = 0;
  }

  get count() {
    return _items.get(this).length;
  }

  merge(...theArgs) {
    const stacks = [...theArgs];
    const mergedStack = new Stack();

    for (let stack of stacks) {
      if (!(stack instanceof Stack)) {
        throw new Error("Invalid argument: Must provide a Stack instance to merge.");
      }
      // Pop elements from the other stacks and push them onto the new stack
      while (stack.count > 0) {
        mergedStack.push(stack.pop());
      }
    }

    // Pop elements from the current stack and push them onto the new stack
    while (this.count > 0) {
      mergedStack.push(this.pop());
    }

    // Return the merged stack
    return mergedStack;
  }
}

const stack1 = new Stack();
stack1.push(1);

const stack2 = new Stack();
stack2.push(2);

const stack3 = new Stack();
stack3.push(3);

const stack4 = stack1.merge(stack2, stack3);

console.log(stack4.count);
console.log(stack4.peek());
