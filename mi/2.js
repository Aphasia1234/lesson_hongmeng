//  求x的n次方
/* 
 x 
 x x 
 x x x
 */
// 递归 时间复杂度O(n)
function fun1(x,n){
    if(n==0){        //递归终止条件
        return 1;
    }
    //把问题分解为规模更小的子问题
    return fun1(x,n-1)*x;
}