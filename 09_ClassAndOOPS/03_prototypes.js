let myName="Harsh     "
let myChannel="xyz     "

//how to find its lenghth which is real length, 5 in case of my name ignoring extra spaces
//1st way is using trim function and 2nd is making our own functionality

// 1st method
console.log(myName.trim().length);
//2nd method
// console.log(myName.trueLength); target is to make this function trueLength


//we should add functionalites to object so that arrays and strings both can access it


let myHeros=["thor", "spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.harsh=function(){   //as this prototype is defined for all objects and we know string and array are objects
    console.log("Harsh is peresent in all objects");
}

myHeros.harsh();
heroPower.harsh();

Array.prototype.heyHarsh=function(){
    console.log("This is present in only arrays");
}
myHeros.heyHarsh();
// heroPower.heyHarsh();  //This will throw an error, as heyHarsh is defined for arrays only




//Inheritence  Inheritence  Inheritence  Inheritence  Inheritence  Inheritence  Inheritence  Inheritence


const user={
    name:"chai",
    email:"hs@icloud"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}


const TASupport={
    makeAssignment:"Js assignment",
    fullTime:true,
    __proto__:TeachingSupport   //Inherit properties of teachingsupport  but this is outdated approach
}

Teacher.__proto__=user //This is also outdated approach of inheritence

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  //TeachingSupport inherits from Teacher 
console.log(TeachingSupport.makeVideo)


//Defining trueLength

let anotherUsername="Harsh Sharma   "

String.prototype.trueLength=function(){
    console.log(this);
    console.log(this.name);  //undefined
    console.log(`True Length is : ${this.trim().length}`)
}

anotherUsername.trueLength()