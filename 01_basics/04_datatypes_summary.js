//Primitive data types
// 7 types
// 1. String
// 2. Number
// 3. BigInt    // (for large numbers)
// 4. Boolean   // (true/false)
// 5. Undefined // (when no value is assigned)
// 6. Null      // (when no value is assigned) (this is a bug in JS)
// 7. Symbol    // (for unique values)

const score=100 // for numbers
const scorevaue=99.99 // for decimal numbers
const name="Harsh" // for strings
const bigIntValue=BigInt(1234567890123456789012345678901234567890) // for large numbers
const bigIntValue2=1234567890123456789012345678901234567890n // for large numbers (using 'n' at the end)
const isLoggedIn=true // for boolean values
const outsideTemp=null //for null values (this is a bug in JS)
let userMail; // for undefined values (when no value is assigned)

const id=Symbol("id") // for unique values (for unique values)
const id2=Symbol("id") // for unique values (for unique values)
console.log(id===id2) // false (symbols are unique)
console.log(typeof bigIntValue)

// Reference data types(Non-primitive data types)

//Array, objects, functions, dates, regex, etc. are reference data types

const heros=["spiderman", "batman", "superman"] // for arrays
const myObj={ // for objects
    name:"Harsh",
    age:22,
    isLoggedIn:true,
    state:null,
    score:undefined
}

const myFunction=function(){ // for functions
    console.log("Hello World")
}

// myFunction() // calling the function
console.log(typeof myFunction) // function
console.log(typeof heros) // object (arrays are also objects in JS)
console.log(typeof heros[0]) // string (elements of array are of type string)
console.log(typeof myObj) // object