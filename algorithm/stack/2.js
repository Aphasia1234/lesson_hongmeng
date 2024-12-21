// Stack 类
class ArrayStack {
    // 类的属性
    // public 共有 类的外部，内部，子类 都可以访问
    // private     私有  类的外部 不可以访问 子类 也不可以访问
    // protected 保护类型 类的外部 不可以访问 子类  可以访问
    //items;
    #stack; // 私有属性 正确
    constructor(){
        this.#stack = [];
        //this.items = 1;
    }
    push(num){
        this.#stack.push(num);
    }
    pop(){
        return this.#stack.pop();
    }
    // 查看栈顶元素
    peek(){
       if(this.isEmpty()) throw new Error('Stack is empty');
       return this.#stack[this.#stack.length - 1];
    }
    isEmpty(){
        return this.#stack.length === 0;
    }
    get size(){
        return this.#stack.length;
    }
}

const stack = new ArrayStack();
stack.push(1);
stack.push(3);
stack.push(2);
console.log(stack.size);
