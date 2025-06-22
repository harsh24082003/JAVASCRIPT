const user={
    username: 'John',
    price: 100,

    welcomeMessage: function(){
        console.log(` ${this.username}, welcome to this website`);
        console.log(this);
    }
}

console.log(this) // This will print an empty object in the browser console, as it refers to the global object in the browser context
user.welcomeMessage(); // John, welcome to this website

user.username = 'Doe';
user.welcomeMessage(); // Doe, welcome to this website



function chai(){
    let username='Harsh';
    console.log(this);  //This will not print empty object
    console.log(this.username); //undefined in a function context, as it does not have a username property in the global object. It will work properly if we define username in the global object
}

chai(); // undefined, as this.username is not defined in the global context


//Arrow functions

const chai2= () =>{
    let username='Harsh';
    console.log(this.username);
    console.log(this); // This will print an empty object, this is the difference between function and arrow function context. Arrow functions do not have their own 'this' context, they inherit it from the parent scope.
}
chai2();

const addTwo= (a,b) =>{
    return a + b;
}

console.log(addTwo(3,5)); // 8

//Implicit return arrow function
const addTwo1 = (a, b) => a + b;
console.log(addTwo1(3, 5)); // 8

//if defining a function, curly braces are there, then we need to use return statement. And if we are not using curly braces, then it will return the value implicitly.

const addTwo2 = (a, b) => ({username: 'Harsh'}); // This will return an object with username property, in this we have to use curly braces.
