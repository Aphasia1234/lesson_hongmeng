let obj={
    name:"张三",
    job:"前端开发工程师",
    company:"腾讯"
}

 obj.hometown="南昌"

  
 let a=1;
 let b=a;//拷贝
 b=3;
 
 let obj2=obj;//引用式赋值
 obj2.name="李四";
 console.log(a,b);
 console.log(obj,obj2);