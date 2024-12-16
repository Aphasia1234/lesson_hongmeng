 // 基本数据类型间的显式类型转换之Number()
 // Number() 函数可以将任意类型的值转化为数值
 console.log("不传参",Number());// 0
 //undefined -> NaN  undefined 数值上下文中没有转换成一个特定数字的含义
 console.log("undefined",Number(undefined));// NaN
 console.log("null",Number(null)); // 0
 console.log("false",Number(false));// 0
 console.log("true",Number(true)); // 1
 console.log("123",Number("123"));// 123
 console.log("-123",Number("-123"));// -123 
 console.log("0x11",Number("0x11"));// 17
 console.log("''",Number(""),"' '",Number(" "));// 0  0
 console.log("100a",Number("100a"));// NaN
 console.log("1",Number(1));// 1
 console.log("+0",Number(+0));// 0
 console.log("-0",Number(-0));// -0
 console.log("1.1",Number(1.1));// 1.1
 console.log("{}",Number({}));// NaN
 
