function foo() {
    var a = 1;
    let b = 2;
    {
      let b = 3;
      var c = 4;
      let d = 5;
      console.log(a); //1   var a
      console.log(b)  //3   let b
    }
    {
      let b = 5;
    }
    console.log(b)//2   let b=2, let b=3 被回收销毁了
    console.log(c)//4   var进入变量环境 
    console.log(d)//报错 引用错误 d 被回收销毁了
  }