 function Person(name,age){
      this.name= name;
      this.age= age;
 }
 Person.prototype.name= '孔子'
 Person.prototype.age= 18
 Person.prototype.hometown= '山东'
 let person1= new Person();
 let person2= new Person();
//  let person1= new Person('张三',20);
//  let person2= new Person('李四',21);
 console.log(person1===person2);//名字相同 但是不是同一个对象
 console.log(person1.name,person2.name);
 console.log(person1.age,person2.age);
 console.log(person1.hometown,person2.hometown);
