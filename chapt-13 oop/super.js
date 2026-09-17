class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        super.sound();   // calls parent method
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.sound();