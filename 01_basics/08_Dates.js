let myDate = new Date()
console.log(myDate) // Current date and time
console.log(myDate.getFullYear()) // Current year
console.log(myDate.getMonth()) // Current month (0-11)
console.log(myDate.getDate()) // Current day of the month (1-31)
console.log(myDate.getDay()) // Current day of the week (0-6)
console.log(myDate.toString()) // Date as a string
console.log(myDate.toDateString()) // Date as a string (without time)
console.log(myDate.toLocaleString()) // Date as a string (with locale)
console.log(typeof myDate) // Type of the date object


// let myCreatedDate = new Date('2023-10-01') // Date object with a specific date
let myCreatedDate = new Date(2023,0,1) // Date object with a specific date (year, month, day)
let myCreatedDate2 = new Date(2023,0,1,7,13)
console.log(myCreatedDate2.toLocaleString()) // Date as a string (with locale)
console.log(myCreatedDate.toDateString()) // Date as a string (without time)

let myTimeStamp=Date.now() // Current timestamp (milliseconds since 1970-01-01)
console.log(myTimeStamp) // Current timestamp (milliseconds since 1970-01-01)
console.log(myTimeStamp/1000) // Current timestamp (seconds since 1970-01-01)
console.log(myTimeStamp/1000/60) // Current timestamp (minutes since 1970-01-01)
console.log(Math.floor(myTimeStamp/1000)) // Current timestamp (seconds since 1970-01-01)