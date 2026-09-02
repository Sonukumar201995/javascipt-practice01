let first=document.getElementsByTagName("div")[0];
// first.innerHTML=first.innerHTML+ '<p>i am paragraph</p>'


let div=document.createElement("div")
div.innerHTML='<h1>hello world</h1>'
first.append(div);