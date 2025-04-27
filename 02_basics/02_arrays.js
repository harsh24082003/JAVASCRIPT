const marvel_heroes = ["Thor", "Ironman", "Hulk", "Black Widow", "Captain America"];
const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_heroes.push(dc_heroes) // adds dc_heroes as a arrya itselt to the end of marvel_heroes

// marvel_heroes.concat(dc_heroes) // adds dc_heroes to the end of marvel_heroes and returns a new array, it does not modify the original array
// console.log(marvel_heroes)  // ["Thor", "Ironman", "Hulk", "Black Widow", "Captain America"]



// const allheroes = marvel_heroes.concat(dc_heroes) // adds dc_heroes to the end of marvel_heroes and returns a new array, it does not modify the original array
// console.log(allheroes) // ["Thor", "Ironman", "Hulk", "Black Widow", "Captain America", "Batman", "Superman", "Flash"]
// console.log(marvel_heroes) // ["Thor", "Ironman", "Hulk", "Black Widow", "Captain America"]


//concatenate using spread operator

const allheroes=[...marvel_heroes, ...dc_heroes] // adds dc_heroes to the end of marvel_heroes and returns a new array, it does not modify the original array
console.log(allheroes) // ["Thor", "Ironman", "Hulk", "Black Widow", "Captain America", "Batman", "Superman", "Flash"]


const another_array = [1,2,3,[4,5,6],7,8,[9,[10,11,12]]]
const real_another_array = another_array.flat(2) // flattens the array to 2 levels, it does not modify the original array
const real_another_array2 = another_array.flat(Infinity) // flattens the array to all levels, it does not modify the original array
console.log(real_another_array) // [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11, 12]]
console.log(real_another_array2) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]



console.log(Array.isArray("Harsh")) // false, it is not an array
console.log(Array.from("Harsh")) // ['H', 'a', 'r', 's', 'h'], it converts the string to an array


const score1=100
const score2=200
const score3=300

console.log(Array.of(score1, score2, score3)) // [100, 200, 300], it creates an array from the arguments passed to it
