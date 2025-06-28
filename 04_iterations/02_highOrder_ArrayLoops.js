// For of loop

const arr=[1,2,3,4,5,6,7,8,9,10];

for(const iterator of arr){
    console.log(iterator); // 1 2 3 4 5 6 7 8 9 10
}


const greetings="hello world";
for(const greet of greetings){
    console.log(`Each character is ${greet}`);
}



//Maps, it contains key-value pairs, where keys can be of any data type, and values can also be of any data type.
//It is an iterable object, so we can use for of loop to iterate over it.
//key in the map can only occur once, so it is unique.
//It is not an array, so we cannot use forEach method on it.

const map=new Map();
map.set("IN","India");
map.set("US","United States");
map.set("UK","United Kingdom");
map.set("CA","Canada");
map.set("IN","India"); // This will not add a new entry, as key is already present.
map.set("IN","Hindustan"); // This will update the value of the key "IN" to "Hindustan".

// console.log(map);

for(const key of map.keys()){
    console.log(`Key is ${key}`); // Key is IN, US, UK, CA
}

for(const key of map){
    console.log(key); // [ 'IN', 'Hindustan' ] [ 'US', 'United States' ] [ 'UK', 'United Kingdom' ] [ 'CA', 'Canada' ]
}

for(const key of map){
    console.log(`Key is ${key[0]} and value is ${key[1]}`); // Key is IN and value is Hindustan, Key is US and value is United States, etc.
}

for(const [key,value] of map){
    console.log(`Key is ${key} and value is ${value}`); // Key is IN and value is Hindustan, Key is US and value is United States, etc.
}

//For of loop with objects, it will not work, as objects are not iterable.