const name="harsh"
const repoCount=1000

console.log(`My name is ${name} and my repo count is ${repoCount}`) // Template literals
console.log("My name is " + name + " and my repo count is " + repoCount) // String concatenation

const getName= new String("harsh")
console.log(getName[0])
console.log(getName.__proto__) // __proto__ is used to access the prototype of the object
console.log(getName.length) // length property is used to get the length of the string
console.log(getName.toUpperCase()) // toUpperCase() method is used to convert the string to uppercase
console.log(getName.toLowerCase()) // toLowerCase() method is used to convert the string to lowercase
console.log(getName.charAt(0)) // charAt() method is used to get the character at the specified index
console.log(getName.indexOf("h")) // indexOf() method is used to get the index of the first occurrence of the specified character
console.log(getName.lastIndexOf("h")) // lastIndexOf() method is used to get the index of the last occurrence of the specified character
console.log(getName.substring(0, 3)) // substring() method is used to get the substring of the string from the specified index to the specified index
console.log(getName.slice(0, 3)) // slice() method is used to get the substring of the string from the specified index to the specified index. It can take negative index also

const newString= new String("    harsh   ")
console.log(newString.trim()) // trim() method is used to remove the whitespace from both sides of the string
console.log(newString.trimStart()) // trimStart() method is used to remove the whitespace from the start of the string
console.log(newString.trimEnd()) // trimEnd() method is used to remove the whitespace from the end of the string

console.log(newString.replace("h", "H")) // replace() method is used to replace the first occurrence of the specified character with the specified character
console.log(newString.replaceAll("h", "H")) // replaceAll() method is used to replace all the occurrences of the specified character with the specified character
console.log(newString.includes("h")) // includes() method is used to check if the specified character is present in the string or not
console.log(newString.startsWith("h")) // startsWith() method is used to check if the string starts with the specified character or not
console.log(newString.endsWith("h")) // endsWith() method is used to check if the string ends with the specified character or not

const string1="h-a-r-s-h"
console.log(string1.split("-")) // split() method is used to split the string into an array of strings using the specified character as a separator
console.log(string1.split("-").join("")) // join() method is used to join the array of strings into a single string using the specified character as a separator

