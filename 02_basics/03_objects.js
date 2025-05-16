const mySymbol=Symbol("This is my symbol");

const JsUser={
    name:"Harsh",
    "full name":"Harsh Sharma", // this is how you can use space in the key name, but it is not recommended
    age:22,
    [mySymbol]:"mykey1", //this is the only way, how you can use symbol as a key in the object, otherwise it will be treated as a string only like name and age  
    location:"India",
    email:"harsh@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser.age) // 22, it accesses the age property of the object
// console.log(JsUser["age"]) // 22, it accesses the age property of the object using bracket notation
// console.log(JsUser["full name"]) // Harsh Sharma, it accesses the full name property of the object using bracket notation, without this it will give an error to access the property with space in it

JsUser.age=23 // it updates the age property of the object
// Object.freeze(JsUser) // it freezes the object, it will not allow you to update the object, but you can still access the properties of the object
JsUser.age=24 // it will not update the age property of the object, it will still be 23
// console.log(JsUser.age) // 23, it accesses the age property of the object
// console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting) // this will show function return back Function(anonymous)
console.log(JsUser.greeting()) // Hello JS user, it calls the greeting function of the object
console.log(JsUser.greetingTwo()) // Hello JS user, Harsh