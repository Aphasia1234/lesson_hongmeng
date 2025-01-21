// 实例化时，传递一个函数，里面装耗时性任务
const p = new Promise((resolve,reject) => { // executor 执行器 立即执行
    console.log('333')  // 同步任务
    setTimeout(() => {  // 异步任务  event loop
        console.log('222')
        resolve('BMW325')// 执行完异步任务后，调用resolve方法，将promise的状态改为成功
        //reject()
    }, 1000)
})
// 异步任务的执行顺序控制的话，就需要用到promise
console.log(p.__proto__,p);
p
.then(() => {
    // 等到executor异步任务执行完后，再执行then里面的函数
    console.log('111')
    console.log(p)
    console.log(data)
})
  .catch(() => {
    console.log('error')
 })