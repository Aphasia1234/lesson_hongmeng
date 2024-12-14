function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function () {
    console.log(this.name);
}

// 模拟实现 new 运算符
function objectFactory() {
  console.log(arguments,arguments.length);// 类数组
  const obj = new Object();// 空对象创建
  //arguments 类数组，没有shift，
  // [].shift.call(arguments)
  const Constructor = [].shift.call(arguments)// 取出第一个参数，即构造函数
  console.log(Constructor);
  obj.__proto__ = Constructor.prototype;// 将空对象的原型指向构造函数的原型
  Constructor.apply(obj, arguments);// 将剩余参数应用到构造函数上
  console.log(obj);
  return obj;
}

let awei = objectFactory(Person, 'awei', 20);
console.log(awei.name);
awei.sayName();