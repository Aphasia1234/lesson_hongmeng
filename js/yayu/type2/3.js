console.log(Object.prototype.toString.call({a:1}))//[object Object]
console.log(Object.prototype.toString.call([1,2]))//[object Array]
console.log(String({a:1})) // [object Object]  toString
console.log(String([1,2])) // 1,2
// 对象上的toString方法
console.log(({a:1}).toString())//[object Object] 确切的类型
console.log(JSON.stringify({a:1}))//{"a":1}
//函数上的toString方法
console.log((function(){var a = 1;}).toString())//function(){}
console.log(String(new Date(2024,12,18)))// Sat Jan 18 2025 00:00:00 GMT+0800 (中国标准时间)
