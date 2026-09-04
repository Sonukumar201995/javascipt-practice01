let p1=new Promise((resolve,reject)=>{
    console.log("promise is pending");
    setTimeout(() => {
        console.log("i am promise and resolve")
        resolve(true);
        
    }, 5000);
})


let p2=new Promise((resolve,reject)=>{
    console.log("promise is panding");
    setTimeout(() => {
        console.log("a am promise and rejected")
        reject(new Error("something wend wrong"))
    }, 5000);
})

// console.log(p1,p2)

p1.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{
    console.log("some error occurrenc")
})