function objectFactory(fn,...args) {
    console.log(arguments,arguments.length);// 类数组
    // const obj = new Object();// 空对象创建
    const obj = {};
    //arguments 类数组，没有shift，
    // [].shift.call(arguments)
    //const Constructor = [].shift.call(arguments)// 取出第一个参数，即构造函数
    //console.log(Constructor);
    obj.__proto__ = fn.prototype;
    const ret =fn.apply(obj, args);
    console.log(ret);
    //console.log(obj);
   // return obj;
   return typeof ret === 'object' ? ret : obj;
  }

  function Person(name, age) {
    this.name = name;
    this.age = age;
    return {
        name: this.name,
        age: this.age,
        tag:'haha'
    }
  }
  Person.prototype.sayHello = function () {
    console.log(this.name + "hello");
  }

const dailao = objectFactory(Person,"名老板", 20);
console.log(dailao,dailao.sayHello());
