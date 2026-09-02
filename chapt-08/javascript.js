let first=document.getElementById("id1");
let a=first.getAttribute("class");
console.log(a);

let b=first.getAttribute("id");
console.log(b);

console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

console.log(first.setAttribute("class","sonu"))
console.log(first.removeAttribute("class"))