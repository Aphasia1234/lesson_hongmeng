 let a=null;//栈内存
 console.log(a);
// 堆内存
 let largeObject={
    data:new Array(100000000).fill('a')
 }
//释放内存 垃圾回收
//哲学
  largeObject=null
  //简单数据类型是栈内存  复杂数据类型是堆内存