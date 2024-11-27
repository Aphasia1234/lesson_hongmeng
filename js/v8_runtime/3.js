function bar(){  //词法作用域
    console.log(myname);// lisi
}

function foo(){
    var myname = '肖';
    bar();
    console.log(myname); // 肖
}
var myname = 'lisi';//词法作用域
foo();//引用错误
// 栈底是全局执行上下文 栈顶是bar的执行上下文
// bar 函数 没有找到myname 就向上级查找,bar函数定义在全局执行上下文的变量环境中
// 所以bar就访问到全局的myname