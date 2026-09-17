class student{
    constructor(name)
    {
        this._name=name;
    }

    get name()
    {
        return this._name;
    }

    set name(newName)
    {
        return this._name=newName;
    }
}

let s=new student("sonu");
console.log(s.name);

s.name="mohit";
console.log(s.name);