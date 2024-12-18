 var a = 1.23;
 console.log(typeof a);//number
 var b = new Number(a);//Number对象
 console.log(typeof b);//object
 console.log(b.toFixed(1))//1.2
 // 装箱：将基本类型的值变成对象，为了能够调用一些方法
 //面向对象极致风格  toFixed(a) 函数式 
 console.log(a.toFixed(1))//1.2 包装类
 //将a包装成一个对象
(new Number(a)).toFixed(1)
// 依然还是 number 简单数据类型，