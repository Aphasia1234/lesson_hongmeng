// 只要不是数字，+ 连接符
// 二元运算符
console.log([]+[])//空字符串
// 一元运算符 隐式类型转换
console.log(+[1,2,3])//NaN 
console.log([]==[])//false 指向的是不同的空间

let x = 42
let y ={
    valueOf: function() {
        return 42;
    }
}
// 把y对象转换为简单数据类型 42
console.log(x==y)//true