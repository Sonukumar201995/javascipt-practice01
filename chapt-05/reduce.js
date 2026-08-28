let arr=[10,20,30,40];
let sum=arr.reduce((total,value)=>{return total+value})
console.log(sum);



let index=arr.findIndex((x)=>{
    return x>40;
})

console.log(index);