 var a = 1.234;
 console.log(typeof a);// number
 // toFixed 返回的是一个字符串，而不是一个数字。
 console.log(a.toFixed(2));// 1.23  字符串
 console.log(typeof Number(a));// number
 var b = new Number(a);
 // 使用new Number()创建的是一个object类型
 // valueof 
 console.log(typeof b);// object
 console.log(b.toFixed(2));// 1.23  字符串