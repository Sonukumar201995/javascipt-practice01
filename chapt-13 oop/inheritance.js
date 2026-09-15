class Animal{
    eat()
    {
        console.log("Animal is Eating")
    }
}

class dog extends Animal{
    bark()
    {
        console.log("dog is barking")
    }
}

let d=new dog();
d.eat();
d.bark();