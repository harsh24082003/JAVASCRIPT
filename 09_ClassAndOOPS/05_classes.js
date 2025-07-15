class User{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("harsh","harsh123","123")
// console.log(chai)
// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

//behind the scene if class was not there, then we use prototypes

function User1(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User1.prototype.encryptPassword=function(){  //we can use Object also in place of User1
    return `${this.password}abc`
}


const tea=new User1("sharma","shhshs", "123")
console.log(tea.encryptPassword())