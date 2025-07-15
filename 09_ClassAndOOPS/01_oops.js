const user={
    username: "Harsh",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log("Got user details");
    }
}

user.getUserDetails()

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting= function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this    not necessary, it is implicitly returned
}


//These instance are overwriting to each other, not new instance is created with the help of new keyword
// const UserOne=User("Harsh", 22, true);  
// const UserTwo=User("Harsh", 23, false);
// console.log(UserOne);


//here new keyword is used
const UserOne=new User("Harsh", 22, true);  
const UserTwo=new User("Harsh", 23, false);
console.log(UserOne);
console.log(UserTwo.greeting());


