 // 记忆化递归 (空间换时间)
 // 缺陷
 // 1. 空间复杂度高
 // 2. 递归深度太深，容易栈溢出
 const f = [];//某层结果和数组的下标一一对应
 const climbStairs = function(n) {
    if(n <= 2) return n;
    if(f[n]===undefined)
        f[n] = climbStairs(n - 1) + climbStairs(n - 2);
    return f[n];
};
 console.log("开始爬");
 console.time("climbStairs");
 console.log(climbStairs(50));
 console.log("爬完了");
 console.timeEnd("climbStairs");