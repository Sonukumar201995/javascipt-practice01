let a=fetch("https://jsonplaceholder.typicode.com/users")
a.then((value)=>{
    console.log(value.status)
    console.log(value.ok)
    console.log(value)
})