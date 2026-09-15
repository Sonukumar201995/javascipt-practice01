let person = {
    name: "Sonu"
};

let student = {
    language: "JavaScript"
};

student.__proto__ = person;

console.log(student.name); // Sonu
console.log(student.language); // JavaScript


