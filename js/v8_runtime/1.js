// hoisting  
console.log(a,func);
console.log(b);// 词法环境中的变量/常量,在申明之前不可被访问
//暂时性死区 TDZ 暂时性死区指的是在let/const声明之前不可被访问的区域
var a = 1;// var 声明提升 可以访问 undefined
  function func(){
     
  }
  let b = 2;
  b++;//词法环境里查找b 申明之后可以访问
