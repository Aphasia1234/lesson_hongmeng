//// 基本数据类型间的显式类型转换之Boolean()
// false | true
// Primitive -> Boolean
// 构造函数 来用 
console.log("不传参",Boolean()) // 不传参数 默认值为false
console.log("false",Boolean(false))
console.log("true",Boolean(true))
console.log("undefined",Boolean(undefined))
console.log("null",Boolean(null))
console.log("''",Boolean(""))
console.log("+0",Boolean(+0))
console.log("-0",Boolean(-0))
console.log("NaN",Boolean(NaN))  //Not a number 不是数字
console.log("1",Boolean(1))
console.log("'1'",Boolean("1"))
console.log(Boolean({}))