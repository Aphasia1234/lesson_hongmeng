// 基本数据类型间的显式类型转换之String()
console.log("不传参",String());// ''
console.log("undefined",String(undefined));// 'undefined' 字符串类型的undefined
//console.log(typeof String(undefined)); // string
console.log("null",String(null));// 'null' 字符串类型的null
console.log("+0",String(+0));// '0' 字符串类型的0
console.log("-0",String(-0));// '-0' 字符串类型的-0
console.log("NaN",String(NaN));// 'NaN' 字符串类型的NaN
console.log("123",String(123));// '123' 字符串类型的123
console.log("false",String(false));// 'false' 字符串类型的false
console.log("true",String(true));// 'true' 字符串类型的true

