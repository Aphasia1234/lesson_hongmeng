 // js 造人
 // 对象字面量
  let cao = {
    name:'小超'
  }
let fan = {
    name:'小范',
    age:18
}

 // class  类  es6
 class Person {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
    eat() {
      console.log('吃饭')
    }
    
 }

 let li = new Person('小李',18)
 let wang = new Person('小王',19)