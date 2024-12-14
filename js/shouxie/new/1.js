 function Person(name, age) {
     this.name = name;
     this.age = age;
 }

 Person.prototype.sayName = function () {
     console.log(this.name);
 }
 // new 实例化运算符
 // 1. 创建一个新对象 {} 和Person 没有血缘关系
 // {} __proto__ Object.prototype
 // 2. 把新对象的__proto__指向Person.prototype
 // 3. 构造函数 this 指向 {} 执行 ， 给 {} 赋值
 const awei = new Person('awei', 20);