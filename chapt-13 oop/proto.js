let person = {
    name: "Sonu"
};

let student = {
    language: "JavaScript"
};

student.__proto__ = person;

console.log(student.name); // Sonu
console.log(student.language); // JavaScript


let p={
    run :()=>{
        console.log("hello world")
    }
}

run.__proto__=p;
a.run();