 // 暴力递归
 //  缺陷
 // 1. 重复计算
 // 2. 时间复杂度O(2^n)
 // 3. 空间复杂度O(n)
 // 4. 当n很大的时候，会导致栈溢出
 const climbStairs = function(n) {
    if(n <=2) return n;
    return climbStairs(n - 1) + climbStairs(n - 2);
};
 console.log("开始爬");
 console.time("climbStairs");
 console.log(climbStairs(50));
 console.log("爬完了");
 console.timeEnd("climbStairs");