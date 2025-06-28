const myNums=[1,2,3]

const myTotal=myNums.reduce((function (accumulator, currentValue){
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}),0)  //Here, 0 is the initial value of the accumulator, and currentValue is the current element being processed in the array.

const myTotal1=myNums.reduce((function (accumulator, currentValue){
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}),3)  //Here, 3 is the initial value of the accumulator, and currentValue is the current element being processed in the array.


const myTotalArrow=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotalArrow);




const shoppingCart=[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "c course",
        price: 999
    },
    {
        itemName: "java course",
        price: 1499
    }

]

const courseTotal=shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(courseTotal);