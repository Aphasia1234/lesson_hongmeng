 const coinChange = function(coins, amount) {
    const f = []; // 每个面值的最小硬币个数
    f[0] = 0;//初始值
    // 迭代 从1开始
    for(let i = 1;i<=amount;i++){
        f[i] = Infinity;// 无限大
        // 求最小值
        // i 表示当前金额  f[i]表示当前金额的最小硬币个数
        // coins[j]表示最后一枚硬币的面值
        for(let j = 0;j<coins.length;j++){
            if(i - coins[j] >= 0){
                f[i] = Math.min(f[i],f[i - coins[j]] + 1);
            }
        }
    }
    if(f[amount] === Infinity) 
        return -1;
    return f[amount];
 }

 console.log(coinChange([1,2,5],11))