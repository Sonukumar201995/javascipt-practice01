function checkAge(age, callback) {

    if (age >= 18) {
        callback(null, "You are eligible");
    } else {
        callback("You are not eligible", null);
    }
}

checkAge(17, (error, message) => {

    if (error) {
        console.log("Error:", error);
        return;
    }

    console.log(message);
});