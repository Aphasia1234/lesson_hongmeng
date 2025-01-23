// Set 来自 ES6 不重复的容器
// 它是一个集合数据结构，用于存储唯一值。它提供了一些常用的方法，如 add()、delete()、has() 和 clear()。
const mySet = new Set();
mySet.add(1);
mySet.add("hello");
mySet.add(true);
mySet.add(1); // 重复的值不会被添加
console.log(mySet);
console.log(mySet.has(1)); // true
console.log(mySet.has("world")); // false
console.log(mySet.size); // 3
mySet.delete(1);
console.log(mySet);
for(const item of mySet){
    console.log(item)
}
console.log(Array.from(mySet));// 展开运算符 ['hello', true]