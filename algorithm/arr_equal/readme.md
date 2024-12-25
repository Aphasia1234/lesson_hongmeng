# 数组相等判断

- 不使用排序
- 不考虑位置

[1,2,3] 和 [1,3,2] 相等

## 数据相等
- length 效率 也是逻辑核心
- arr1.some
  - find
- some 有一个为true 就返回true (有一个满足条件就返回true)
  为false 是我们可以利用的   + arr2.indexOf(item) === -1
  再取非 !

- es6 新增的数据结构  JSON 对象字面量 
  - Map 键值对  键不重复  //4.js  5.js
  - Set 不重复的集合      //6.js
