function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    console.log("Starting...");

    let data = await getData();

    console.log(data);
}

showData();