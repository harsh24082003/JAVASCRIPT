function sayMyname(){
    console.log("My name is Harsh Sharma");
}

// sayMyname(); // function call
// sayMyname; // function reference


// function add(a, b){
//     console.log(a + b);
// }

// add(2, 3); // function call, it will print 5
// add(2); // function call, it will print NaN
// add(); // function call, it will print NaN
// add(2,"3"); // function call, it will print 23
// add(2, 3, 4); // function call, it will print 5
// add(2,"a"); // function call, it will print 2a
// add(2,null); // function call, it will print 2


function add(a, b){
    return a + b;
}

const result=add(2,3);
console.log(result); // function call, it will print 5
// console.log(add(2,3)); // function call, it will print 5


function loginUserMessage(userName){
    if(userName === undefined){
        return "User logged in as Guest";
        return;
    }
    return `User logged in as ${userName}`;
}
const message=loginUserMessage("Harsh");
console.log(message); // function call, it will print User logged in as Harsh
console.log(loginUserMessage()); 


function calcuateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calcuateCartPrice(1,2,3,4,5)); // function call, it will print [ 3,4,5 ]

const user={
    username:"Harsh",
    price:100,
}
function handleObject(anyobject){
    console.log(anyobject.username);
    console.log(anyobject.price);
}


