 "use strict"

 var x=2;
 
 var obj = {
    x: 1,
    foo: function() {
        console.log(this);
        console.log(this.x);
    }
  }
  // 函数体
  var foo = obj.foo

  var obj2 = {
    x:5,
    foo:foo
  }
  // 相同点是:同一个函数在运行
  // 区别是:被谁调用，调用的位置不同
  // 调用的时候？  调用方式不一样
  // 对象的方法调用 
  obj2.foo() // 5
  obj.foo()  // 1 
  // 普通函数调用
  foo();    // 2  没有必要