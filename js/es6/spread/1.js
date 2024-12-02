 let str1 = 'hello';
 let arr1 = str1.split('');// 以空字符分割 [ 'h', 'e', 'l', 'l', 'o']
 console.log(arr1);

 let str2 = 'h-ello';
 let arr2 = str2.split('-');// 以-分割 ['h', 'ello']
 console.log(arr2);

 let str3 = 'h-ello';
 let arr3 = str3.split('');// 以空字符分割 ['h', '-', 'e', 'l', 'l', 'o']
 console.log(arr3);

 let str = 'hello';
 let arr = str.split('');
 console.log(arr);
 // es6 展开运算符
 // ... 展开运算符 spread 字符串 字符数组
 //
 console.log([...str]); // [ 'h', 'e', 'l', 'l', 'o' ]   数组
 console.log(str[0]);  // h  字符
 console.log(...str);  // h e l l o  字符串