// 不考虑重复 
const arr1 = ['apple', 'banna', NaN];
const arr2 = ['apple', NaN, 'banna'];

function arrEqual(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    // false
    // 当(item => arr2.indexOf(item) === -1)为false时，!arr1.some()为true
    // 没有一个元素满足条件，!arr1.some()为true
   // return !arr1.some(item => arr2.indexOf(item) === -1) //false
      return !arr1.some(item => arr2.includes(item) === -1) //true
}

console.log(arrEqual(arr1, arr2));
//  indexOf() 传统方法和 includes() 新增方法