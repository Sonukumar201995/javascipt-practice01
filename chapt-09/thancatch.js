let p=new Promise((resolve,reject)=>{
    console.log("promise is pending");
    setTimeout(() => {
        console.log("i am promise and fulfilled")
        resolve(true);
    }, 5000);
})

console.log(p)