let res = Promise.reject(new Error("something went wrong"));

res
    .then((val) => {
        console.log(val);
    })
    .catch((error) => {
        console.log(error.message);
    });