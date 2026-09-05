let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(true)
    },1000)
})

let res=Promise.resolve(6);
res.then((val)=>{
    console.log(val);
})

