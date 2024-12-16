 console.log(1 / +0); // Infinity 正无穷大
 console.log(1 / -0); // -Infinity 负无穷大
 // Object.is() 是一个新的方法，用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
 console.log(Object.is(5, 5));// true
 console.log(Object.is(+0, -0));// false
 // 隐式转换
 // NaN  Not a Number  不是数字
 console.log(2 * "a",2 + "a");// + 字符串拼接 2a
 console.log(typeof NaN); // number
 console.log(parseInt("abc")) // NaN  parseInt() 用于将一个字符串解析为整数
 console.log(parseInt("123abc"));// 123
 console.log(NaN === NaN);// false  NaN 不代表确切值
 // isNaN() 用于检查一个值是否为 NaN  
 // 不能通过===去判断一个值是否为NaN  所有要isNaN()
 console.log(isNaN(NaN),isNaN(parseInt("abc")))// true true  parseInt("abc") 为NaN
