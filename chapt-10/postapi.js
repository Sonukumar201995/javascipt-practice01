let a=fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Sonu Kumar",
        username: "sonu",
        email: "sonu@gmail.com"
    })
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});