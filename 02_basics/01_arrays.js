const myArray=[1,2,3,4,5, "Harshit", true, null, undefined, {name:"Harshit"}, [1,2,3]] // array with different data types
// deep copy is when you create a new array and copy the values from the original array to the new one
// shallow copy is when you create a new array and copy the reference of the original array to the new one, changes made to the new array will affect the original array
const myArray2=myArray.slice() // shallow copy
const myArray3=[...myArray] // shallow copy

console.log(myArray[0]) // 1
console.log(myArray[10]) 

const array1=[1,2,3,4,5]

//Array methods

// console.log(array1.length) // 5
// console.log(array1.push(10)) // 6, adds 6 to the end of the array and returns the new length of the array
// console.log(array1.pop()) // 10, removes the last element of the array and returns it

// console.log(array1.unshift(0)) // adds 0 to the beginning of the array and returns the new length of the array
// console.log(array1.shift()) // removes the first element of the array and returns it
// console.log(array1) 

// console.log(array1.indexOf(3)) // 2, returns the index of the first occurrence of the element in the array
// console.log(array1.includes(3)) // true, returns true if the element is present in the array, false otherwise
// console.log(array1.reverse()) // reverses the array and returns it
// console.log(array1) // [5, 4, 3, 2, 1]
// console.log(array1.sort()) // sorts the array in ascending order and returns it
// console.log(array1) // [1, 2, 3, 4, 5]


const newArray=array1.join()
console.log(newArray) // 1,2,3,4,5 it is a string
console.log(newArray[1]) //return ','


console.log("A", array1) // A [1, 2, 3, 4, 5]
const myn1=array1.slice(1,3) // returns a shallow copy of the array from index 1 to index 3 (not inclusive)
console.log(myn1) // [2, 3]
console.log("B", array1) // B [1, 2, 3, 4, 5]

const myn2=array1.splice(1,3) // removes 3 elements from index 1 and returns them
console.log(myn2) // [2, 3, 4]
console.log("C", array1) // C [1, 5]