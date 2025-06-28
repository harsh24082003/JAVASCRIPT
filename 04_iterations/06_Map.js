//Filter is used to select elements from an array based on a condition
// It creates a new array with all elements that pass the test implemented by the provided function.

//Map is used to transform each element in an array and create a new array with the transformed elements.
// It applies a function to each element in the array and returns a new array with the results


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums=myNums.map((nums)=>(nums+10));
console.log(newNums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


const newNUms2=[]
//Using forEach to achieve the same result as map

myNums.forEach((nums)=>{
    newNUms2.push(nums+10); // This will push the numbers incremented by 10 into the newNUms2 array
})

console.log(newNUms2); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


//Chaining is used to apply multiple methods on an array in a single line like multiple filters or maps.

const myNewNums=myNums
                .map((nums)=>nums+10)
                .map((nums)=>nums+1)
console.log(myNewNums); // Output: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]