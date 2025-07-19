// console.log(Math.PI); // This value of PI can't be changed as this is not writable
// Math.PI=5  //No change in the value



const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);


const chai={
    name: "Ginger Tea",
    price: 250,
    isAvailable: true,

    orderChai:function(){
        console.log("Chai not made");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//We can also define some object's properties like writable, enumerable, configurable but not of the default objects, only customs

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable: false //enumeration means traversing something, if it is false, name will not be traversed through the for loop
})

for (let [key,value] of Object.entries(chai)){    //Object.entries is used to make object iterable, default they are not iterable
    if(typeof value!=='function'){     //otherwise orderChai function will be printed as it is, not only the console.log part, but whole part.
        console.log(`${key}:${value}`);
    }
}


//If we want to make the for-loop without the if condition then we should make the orderChai non enumerable.
Object.defineProperty(chai,"orderChai",{
    enumerable:false
})

for(let [key,value] of Object.entries(chai)){
    console.log(`${key}:${value}`);
}
