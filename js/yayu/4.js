
function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}

//每个函数都有一个原型对象
Person.prototype={
    eat:function(){
        console.log(`${this.name}爱吃饭`)
    }
}

const xck = new Person('肖1',18);
console.log(xck);
xck.eat();
const xql = new Person('肖2',18);
console.log(xql);
xql.eat();
