// 1. getElementById()
const heading = document.getElementById("heading");

heading.innerText = "Welcome to JavaScript";
heading.style.color = "red";


// 2. getElementsByClassName()
const texts = document.getElementsByClassName("text");

texts[0].innerText = "Changed First Paragraph";
texts[1].style.color = "blue";


// 3. getElementsByTagName()
const boxes = document.getElementsByTagName("div");

boxes[0].style.backgroundColor = "yellow";
boxes[1].style.backgroundColor = "green";


// 4. getElementsByName()
const username = document.getElementsByName("username");

username[0].value = "Sonu";


// 5. querySelector()
const firstBox = document.querySelector(".box");

firstBox.innerText = "First Box Changed";


// 6. querySelectorAll()
const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach((box) => {
    box.style.padding = "20px";
    box.style.margin = "10px";
});


// 7. Event / Behavior Change
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    heading.innerText = "Button Clicked!";
    heading.style.color = "green";
});