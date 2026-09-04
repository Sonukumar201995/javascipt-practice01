let sum=(a,b,callback)=>{
    let res=a+b;
    console.log(res);
    callback();
}

sum(11,22,()=>{
    console.log("this is call back function")
})