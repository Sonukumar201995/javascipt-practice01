class student{
    constructor(name){
        this._name=name;
    }

    get name()
    {
        return this._name;
    }
}

let s=new student("sonu kumar");
console.log(s.name);