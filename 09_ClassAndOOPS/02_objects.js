//Arrays and Strings are kind of object, so properties of objects can be used in them

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power=2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, price){
    this.username=username,
    this.price=price
}

createUser.prototype.increment=function(){
    this.price++;
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.price}`);
}

const chai=new createUser("chai", 25);
const tea=new createUser("Tea", 250);

console.log(chai.price)
chai.increment();
chai.printMe();