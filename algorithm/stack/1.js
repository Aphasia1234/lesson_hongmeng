// 受限 栈顶操作 push pop
const stack = []; // 一次性分配一个连续的内存空间
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

const peek = stack[stack.length - 1];

const pop = stack.pop();

const is_empty = stack.length === 0;