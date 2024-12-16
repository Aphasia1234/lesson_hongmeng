//[].map() 返回的是一个新数组，新数组中的元素是通过回调函数返回的。  
console.log([1,2,3].map(parseInt));
// parseInt(1,0)
// parseInt(2,1)
// parseInt(3,2)
console.log([1,2,3].map((v,index,item)=>{
    console.log(v,index,item);
    return parseInt(v,index);
}));
