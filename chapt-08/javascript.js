let box=document.getElementById("box");
console.log(box.innerHTML)

let res=box.innerHTML="<h2>hello i am h2 heading </h2>"
console.log(res);


let out=document.getElementById("box");
console.log(out.outerHTML);

out.outerHTML="<h3>headding 3</h3>"
