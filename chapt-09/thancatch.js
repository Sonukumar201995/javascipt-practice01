let p=new Promise((resolve,reject)=>{
    console.log("promise is pending");
    setTimeout(() => {
        console.log("i am promise and fulfilled")
        // resolve(true);
        reject(new Error("i am a error"))
    }, 5000);
})

console.log(p)