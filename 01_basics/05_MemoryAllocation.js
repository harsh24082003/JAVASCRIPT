// Stack(Primitive)  Heap(Non-primitive)


//These are stored in stack memory
let myName="Harsh Sharma"
let anotherName=myName  //A copy of myName is created in stack memory and assigned to anotherName. No changes occurs in myName, 
                        // while changing in anotherName

console.log(anotherName)
anotherName="Harsh"
console.log(anotherName)
console.log(myName)


//These are stored in Heap Memory

let userOne={
    email:"harsh@icloud.com",
    age:22,

}

let userTwo=userOne  //Here userTwo is referring to original userOne, if any changes will be made in userTwo will reflect in 
                     // userTwo also
userTwo.email="Harsh@abc.com"
console.log(userOne) 