class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  //super keyword give username to constructor of parent class
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`)

    }
}

const chai=new Teacher("harsh", "shhshs", "123")

chai.addCourse();

const masalaChai=new User("harshmasala")
masalaChai.logMe()

// console.log(chai===Teacher) //False
// console.log(Teacher===User) //False

console.log(chai instanceof Teacher) //true
console.log(Teacher instanceof User)  //false
console.log(chai instanceof User)  //true