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
        res("value 3")
    },3000)
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

let promiseall=Promise.all([p1,p2,p3]);
promiseall.then((val)=>{
    console.log(val);
})