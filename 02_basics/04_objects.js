// const tinderUser=new Object();
const tinderUser={}

tinderUser.id="123";
tinderUser.name="Harsh";
tinderUser.isLoggedIn=true;

console.log(tinderUser) // { id: '123', name: 'Harsh', isLoggedIn: true };


const regularUser={
    email:"harsh@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Harsh",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
// const obj3={obj1,obj2}
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3={...obj1,...obj2}
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) // [ '123', 'Harsh', true ]
// console.log(Object.entries(tinderUser)) // [ [ 'id', '123' ], [ 'name', 'Harsh' ], [ 'isLoggedIn', true ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
// console.log(tinderUser.hasOwnProperty('isLogged')); //false

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Harsh"
}

const {courseInstructor}=course
console.log(courseInstructor) // Harsh

const {courseInstructor:instructor}=course
console.log(instructor) // Harsh


// {"name":"Harsh","age":22,"isLoggedIn":true,"email":"}