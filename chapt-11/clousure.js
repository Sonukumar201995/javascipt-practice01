function outer() {
    let name = "Sonu";

    function inner() {
        console.log("hello i am inner function",name);
    }

    return inner;
}

const myFunction = outer();

myFunction();