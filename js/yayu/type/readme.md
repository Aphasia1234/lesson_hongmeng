# js 类型转换
  - Boolean()、Number()、String()
  
- es6 之前，js有多少种类型？6种，
  - 简单数据类型，Primitive ，拷贝式赋值，
    - String
    - Number
    - Boolean
    - Null
    - Undefined
  - 复杂数据类型， Reference ， 引用式赋值，
    - Object

- 为何js的类型会改变？
  Number("1")

- JS 是弱类型语言  //1.js
- 变量的类型 是可以改变的
- 搞清楚变量的确切类型，大圣来了
  - Primitive 类型 -> 其他类型的转换
    - Boolean
  - Object 类型 -> 其他类型的转换

- Boolean 显示类型转换(构造函数)规则  //2.js
  - 为false的情况
    - 为空 false 
    - 为false false
    - 为undefined false
    - 为null false
    - 为"" false
    - 为+0 false
    - 为-0 false
    - 为NaN false

  - 为true的情况
    - 为true true
    - 为非空字符串 true
    - 为数字 true
    - 为对象 true

- +0 -0   //3.js
  Object.is()
  1/+0, 1/-0  Infinity  -Infinity
- NaN    //3.js
  类型仍然是Number, 表示一个特殊的数字 
  Not a Number

- Number()  //4.js
  0 1 NaN 

- String()  //5.js


