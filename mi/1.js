//  求x的n次方
/* 
 x 
 x x 
 x x x
 */
// 暴力法 时间复杂度O(n)
function fun1(x,n){
     let result = 1;
     for(let i = 0;i<n;i++){
         result *= x;
     }
     return result;
 }