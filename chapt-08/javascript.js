let btn = document.getElementById("btn");

let x = function (e) {
    alert("hello 1");
};

let y = function (e) {
    alert("hello 2");
};

// Event attach karo
btn.addEventListener("click", x);
btn.addEventListener("click", y);

let a = prompt("Enter your number");

if (a == "2") {
    btn.removeEventListener("click", y);
}