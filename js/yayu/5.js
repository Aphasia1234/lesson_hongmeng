const cy ={
    name :'陈宇',
    playBasketball:function(){
        console.log('打篮球');
    }
}
function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}
Person.prototype = cy;
// 原型 ？ 对象

const wu = new Person('武',19);
wu.playBasketball();
console.log(wu._proto_==cy)