var c=300;
let a=100;
const b=50;
if(true){
    let a =10 //it is block scoped, so it will not be accessible outside the block and does not change the value of "a" defined outside the block
    const b=20 //it is block scoped, but no reassignment is allowed, so it will not be accessible outside the block
    var c=30 //it is mutable, 300 got changed to 30
    // b=44; // TypeError: Assignment to constant variable, const b is not mutable, so it will throw an error
    console.log("Inner:", a) // 10
    console.log("Inner:",b);
}
var c=400 //global scope, any change on c and anywhere will be reflected on c

// console.log(a) // ReferenceError: a is not defined, a defined outside if block(on the first line of code here) will be accessible here
// console.log(b) // ReferenceError: b is not defined 
console.log(c) 
console.log(a) //100 


//let is block scoped, so it will not be accessible outside the block. If we want to reassign the value then that value works only inside the block, outside value will remain same. No redecleration is possible.

//const is block scoped and can't be reassigned any value and redeclared anywhere.



function one(){
    const username = "Harsh"; 

    function two(){
        const website = "youtube";
        console.log("Username:", username); // "Harsh"
    }
    two();
    // console.log("Website:", website); // ReferenceError: website is not defined, as it is not accessible outside the block
}
one();




// ++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++

console.log(addone(10)); // 11
function addone(num){
    return num+1;
}
// addtwo(10); //Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num+2;
}

console.log(addtwo(10)); //functions which are stored in variables can only be called after they are defined, so this will work