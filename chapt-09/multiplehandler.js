let p = new Promise((resolve, reject) => {
    resolve(10);
});

p.then((value) => {
    console.log("Handler 1:", value);
});

p.then((value) => {
    console.log("Handler 2:", value);
});

p.then((value) => {
    console.log("Handler 3:", value);
});