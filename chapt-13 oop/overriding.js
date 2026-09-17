class Employee{
    login()
    {
        console.log("Employee is log in")
    }
    logout()
    {
        console.log("Employee is log out")
    }
    requestLeaves(leave)
    {
        console.log(`employee has requested ${leave} leaves`)
    }
}

class programmer extends Employee{
    requestCoffee(x)
    {
         console.log(`programmer has requested ${x} coffees`)
    }
    requestLeaves(leave)
    {
        console.log(`programmer has requesed ${leave+1} leaves for (one extra)`)
    }
}

let e=new programmer();
e.login();
e.logout();
e.requestLeaves(3);
e.requestCoffee(3);