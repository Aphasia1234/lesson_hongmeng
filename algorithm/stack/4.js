const MinStack = function() {
    this.stack = []; //原栈
    this.stack2 = [];// 定义辅助栈
};

MinStack.prototype.push = function() {
    this.stack.push(num);
    // 为什么要等于？ 考虑出栈的情况
    if(this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= num){
        this.stack2.push(num);
    }
}

MinStack.prototype.pop = function() {
  if(this.stack.pop() == this.stack2[this.stack2.length - 1]){
      this.stack2.pop();
  }
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
    return this.stack2[this.stack2.length - 1];
}
