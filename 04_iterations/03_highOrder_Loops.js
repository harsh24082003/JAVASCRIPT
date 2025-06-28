const myObject={
    js: "JavaScript",
    python: "Python",
    c: "C",
    java: "Java",
}

//for-in loop is used to iterate over the properties of an object.

for(const key in myObject){
    console.log(myObject[key]); 
}

//Maps are not iterable with for-in loop, use for-of loop instead

//keys for an array is its index number

const programming=["js", "python", "c", "java"];
for(const key in programming){
    console.log(key); // Output: 0, 1, 2, 3
    console.log(programming[key]); 
} // Output: js, python, c, java


//For-in loop is used to iterate over the properties of an object, and For-of loop is used to iterate over the values of an iterable object like arrays, strings, maps, etc.

//for-in and for-of, both can be applied on arrays, but for-in loop will give the index of the array, while for-of loop will give the value of the array.