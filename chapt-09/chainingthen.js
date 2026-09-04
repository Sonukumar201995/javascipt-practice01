let p = new Promise((resolve, reject) => {
    resolve(10);
});

p.then((value) => {
    console.log(value);       // 10
    return value * 2;
})
.then((value) => {
    console.log(value);       // 20
    return value + 5;
})
.then((value) => {
    console.log(value);       // 25
})
.catch((error) => {
    console.log(error);
});