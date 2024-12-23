 const scores = [85,73,92,67,55];
 // 高于90分的
 // .some() 是es6 新增的方法  有一个满足条件就返回true
 const hasHighScore = scores.some(score => score > 90);
 console.log(hasHighScore);// true
 console.log(scores.every(score => score > 90));

 const hasEvenNumber = scores.some(score => score % 2 === 0);
 scores.some(score => {return score % 2 === 0});

 // 错误返回-1，正确返回索引下标
 console.log([1,2,3].indexOf(2),[1,2,3].indexOf(4),[1,2,3].indexOf(3));// 1 -1 2