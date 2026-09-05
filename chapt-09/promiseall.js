let p1=new Promise((res,rej)=>{
    setTimeout(()=>{
      res("value 1")  
    },1000)
})

let p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("value 2")
    },2000)
})

let p3=new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(new Error("interval server error"))
    },3000)
})
p3.catch((err)=>{
    console.log("this is error",err)
})


p1.then((val)=>{
    console.log(val)
})

p2.then((val)=>{
    console.log(val)
})

p3.then((val)=>{
    console.log(val);
})
// promise all methods

let promise=Promise.allSettled([p1,p2,p3]);
console.log(promise);

promise.then((val)=>{
    console.log(val);
})