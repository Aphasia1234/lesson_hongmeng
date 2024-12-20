// - 贪心策略
// - 局部最优解
// - 全局最优解
function coinChange(coins,amt){
    // 假设coins是升序的
    let i = coins.length - 1;
    let count = 0;
    while(amt>0){ //还要找零
        while(i>0&&coins[i]>amt){
            i--;
        }
        amt -= coins[i];//amt = amt - coins[i]
        count++;
    }

    return amt ===0 ? count : -1;
}
// 不适合贪心策略
//coinChangeGreedy([1,20,50],60)//11
//某种组合是适合贪心的
coinChangeGreedy([1,5,10,20,100],131)//4