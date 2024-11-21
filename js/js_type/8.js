  let a=1;
  // typeof  js 类型 运算符
  // console.log(typeof a,typeof(a))
  // The Good Parts《语言精粹》 什么是好的，什么是坏的
  console.log(typeof a,+ "1");//数字 number 1

  console.log(typeof "hello");// 字符串 string
  console.log(typeof true);// 布尔值 boolean
  console.log(typeof 12n);// 大整数 bigint
  console.log(typeof Symbol());// 唯一值 symbol
  console.log(typeof undefined);// 未定义  undefined
  console.log(typeof null);// 空值   (未输出)
  console.log(typeof function(){});// 函数  function