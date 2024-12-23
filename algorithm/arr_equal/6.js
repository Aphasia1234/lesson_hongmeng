// es6 新增的数据结构 Set
// 没有重复的元素
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);
console.log(set.size);

const arr = [1,2,3,3];
// Set 可以去重
var uniqueArr = [...new Set(arr)];// ... 展开运算符 把Set转化为数组
console.log(Array.from(new Set(arr)));// [1,2,3]
console.log(uniqueArr);// [1,2,3]