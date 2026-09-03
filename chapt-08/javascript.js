let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {

    console.log(e);
    console.log("Event type:", e.type);
    console.log("Clicked element:", e.target);
    console.log("Mouse X:", e.clientX);
    console.log("Mouse Y:", e.clientY);
});

