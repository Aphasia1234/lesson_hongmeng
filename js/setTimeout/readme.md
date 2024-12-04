 # 定时器

 - JS是单线程的，只有一个主线程 定时器是异步执行的
 - setTimeout 是异步执行的计时器，会在主线程执行完成后才执行(就算计时器为0，也会等待主线程执行完成后才执行)
   callback 函数 放入 event loop ， 时间(ms 毫秒)
 - 一定会在 指定时间后执行吗？ 不一定，因为主线程执行的时间是不确定的
 - 找回？
   执行的是回调函数
 - 定时器ID 

 - 如何用 setTimeout 实现 setInterval ？
   - 场景编程题
   - 手写题 fn
     - customInterval
     - callback , t  参数
     - 可以用setTimeout 实现
     - 递归 重复执行
     - 关闭？

 - call 
   - 函数对象上的方法
