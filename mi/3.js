//  求x的n次方
/* 
 x 
 x x 
 x x x
 */
//  递归 时间复杂度O(logn)
function fun1(x,n){
    if(n===0){
        return 1;
    }
    // 自顶向下 
    let t = fun1(x,Math.floor(n/2));// 把x的n次方分解为x平方的n/2次方
    if(n%2===0){
        return t*t;// 偶数
    }
    else{
        return t*t*x;// 奇数
    }
}
// x=2,n=6