 const key = 'abc123'
 let points =50
 let winner = false
 
 const person = {
    name: 'Wes',
    age:28
 }
 //函数是对象， 静态的方法 属于类的 
 //Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
/* const wes = Object.assign({},person)//将person对象的属性复制到{}(wes对象)中
 wes.age = 30
 console.log(wes,person);*/
//不可写 writeable 

// 冻结对象  不可被改变  
const wes = Object.freeze(person);
person.age = 21;
wes.hometown = '萍乡'
console.log(wes)