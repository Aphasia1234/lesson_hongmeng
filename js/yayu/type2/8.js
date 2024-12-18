console.log(1 +'1');//11  字符串拼接
console.log(+'1');//1  Number('1')为1
console.log(+[]);//0  Number([])为0
console.log(+['1']);//1  先调用toString()方法，'1,'再调用Number()方法,1 
console.log(+['1','2','3'])//NaN  先调用valueOf,先调用toString()方法，'1,2,3'再调用Number()方法,NaN
console.log(+{});//NaN   {} => {} =>[object Object] => NaN

console.log([]+{})//[object Object] 
console.log({}+{})//[object Object][object Object]

console.log(42 == ['42'])//true   先调用valueOf,再调用toString()方法，'42'再调用Number()方法,42

console.log(true == '1')//true  ToNumber(true) => 1 == 1
console.log(true == '2')//false  ToNumber(true) => 1 != 2
//任何一方是数字，另一方先转换为数字