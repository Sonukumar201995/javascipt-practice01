let first = document.getElementById("first");

first.classList.add("red");
first.classList.remove("red");
first.classList.toggle("red");
console.log(first.classList.contains("red"));
first.classList.replace("red", "blue");
first.className = "box blue";