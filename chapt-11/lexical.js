
function outer() {
    let name = "Sonu";
    console.log(name)
    function inner() {
        console.log(name);
    }

    inner();
}

outer();