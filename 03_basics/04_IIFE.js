//Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
//It is used to remove the pollution of the global scope.

//Just as we call a function, name of function with () at the end, we can use IIFE alse.

//Syntax:    (function definition)();
//Note: semicolon is necessary at the end of the IIFE to use any other IIFE in future, as it doesn't know, where to stop the previous IIFE.

//named IIFE
(function chai(){
    console.log(`DB connected`);
})();

//Unnamed IIFE, with parameter
( (name)=>{
    console.log(`DB connected Two ${name}`);
})('Harsh');