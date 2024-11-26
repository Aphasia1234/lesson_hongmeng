// 代码可读性
 function generateRandomGender(){
     // return Math.random()>0.5?"男大":"女大";  三元运算符
    const genders=["男大","女大"];
    return genders[Math.floor(Math.random()*genders.length)];
    // floor向下取整 0-1
 /*   
  if(Math.random()>0.5){
    console.log("男大");
 }else{
    console.log("女大");
 }
*/
}
console.log(generateRandomGender());