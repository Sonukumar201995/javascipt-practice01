class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

const s1 = new Student("Rahul", 20);

console.log(s1.name); // Rahul
console.log(s1.age);  // 20