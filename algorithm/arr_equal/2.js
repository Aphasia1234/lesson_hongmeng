// 不考虑重复 
const arr1 = ['apple', 'banana', 1];
const arr2 = ['apple', 1,'banana'];

function arrEqual(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    // false
    // 当(item => arr2.indexOf(item) === -1)为false时，!arr1.some()为true
    // 没有一个元素满足条件，!arr1.some()为true
    return !arr1.some(item => arr2.indexOf(item) === -1)
}

console.log(arrEqual(arr1, arr2));