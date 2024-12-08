// 动态规划 dp (能用递归的问题，一定可以用动态规划解决)
// 自底向上 解决问题 迭代
// - 适合用动态规划 最终值， 最优解 dp
// - 先递归 找到大问题和子问题的关系 -> 状态转移方程
// 最优子结构 最优子结构的意思是局部最优解能决定全局最优解

// 缺陷
// 不能打印具体的过程(路径)
// - 得到达成某个目的的解法个数
// - 不关心具体过程
const climbStairs = function(n) {
const f = []; // f[i] 表示爬到第i层的方法数
f[1] = 1;
f[2] = 2;
// 迭代  从3开始
for(let i =3;i<=n;i++){
f[i] = f[i-1]+f[i-2];
}
return f[n];
}

 console.log("开始爬");
 console.time("climbStairs");
 console.log(climbStairs(50));
 console.log("爬完了");
 console.timeEnd("climbStairs");