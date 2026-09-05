let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Error 1");
    }, 1000);
});

let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Value 2");
    }, 2000);
});

let p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Value 3");
    }, 3000);
});

let res=Promise.any([p1, p2, p3])
    res.then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });