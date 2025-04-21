// let score =33
// console.log(typeof score) //number
// console.log(typeof(score)) //number


// let score="33"
// console.log(typeof score) //string

// let valueInNumber=Number(score) //convert string to number
// console.log(typeof valueInNumber) //number


// let score="33abc"
// console.log(typeof score) //string
// let valueInNumber=Number(score) //convert string to number
// console.log(typeof valueInNumber) //number
// console.log(valueInNumber) //NaN (Not a Number)
// NaN is a special value in JS that represents an invalid number


// let score=null
// console.log(typeof score) //object (this is a bug in JS)
// let valueInNumber=Number(score) //convert string to number
// console.log(typeof valueInNumber) //number
// console.log(valueInNumber) //0 (null is converted to 0)


// let score = undefined
// console.log(typeof score) //undefined
// let valueInNumber = Number(score) //convert string to number
// console.log(typeof valueInNumber) //number
// console.log(valueInNumber) //NaN (Not a Number)


// let score=true
// console.log(typeof score) //boolean
// let valueInNumber=Number(score) //convert string to number
// console.log(typeof valueInNumber) //number
// console.log(valueInNumber) //1 (true is converted to 1)


// "33"=>33
// "33abc"=>NaN
// "abc"=>NaN
// "true"=>1
// "false"=>0


let isLoggedIn=-2  //true (any non-zero number is true)
// let isLoggedIn="Harsh" //true (any non-empty string is true)
// let isLoggedIn="" //false (empty string is false)
// let isLoggedIn=" " //true (any non-empty string is true)
let booleanisLoggedIn=Boolean(isLoggedIn) //convert number to boolean
console.log(typeof booleanisLoggedIn) //boolean
console.log(booleanisLoggedIn) //true (1 is converted to true)

// true for any non-zero number and false for 0
// true for any non-empty string and false for empty string


let someNumber=33
let stringNumber=String(someNumber) //convert number to string
console.log(typeof stringNumber) //string
console.log(stringNumber) //33 (number is converted to string)