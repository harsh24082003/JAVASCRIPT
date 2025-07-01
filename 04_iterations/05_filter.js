const coding=[  "js", "python", "c", "java", "c++", "c#"];

const values=coding.forEach((item)=>{
    // console.log(item);  // Output: js, python, c, java, c++, c#
    return item;  // forEach does not return a value, so this will not work as expected{Value will not be stored in values}
})

console.log(values); // Output: undefined, because forEach does not return anything


const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums=myNums.filter((nums) =>{
    // nums>4;   //When using {} in arrow function, you need to use return statement to return a value
    return nums>4;  // This will filter the array and return only the numbers greater than 4
})

console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]


//While using forEach loop for the same task

const newNums2=[];

myNums.forEach((nums)=>{
    if(nums>4){
        newNums2.push(nums);  // This will push the numbers greater than 4 into the newNums2 array
    }
})

console.log(newNums2); // Output: [5, 6, 7, 8, 9, 10]



const books=[
    {title:'Book one', genre:'Fiction', publish:1981,
        edition:2004},
    {title:'Book two', genre:'Non-Fiction', publish:1995,
        edition:2001},
    {title:'Book three', genre:'Fiction', publish:2000,
        edition:2005},
    {title:'Book four', genre:'Non-Fiction', publish:2010,
        edition:2015},
    {title:'Book five', genre:'Fiction', publish:2015,
        edition:2020},
    {title:'Book six', genre:'Non-Fiction', publish:2020,
        edition:2021},
    {title:'Book seven', genre:'Fiction', publish:2022,
        edition:2023}
]

let userBook=books.filter((bk)=> bk.genre==='Fiction')

//With filter, next filter will overwrite the previous filter result

userBook=books.filter((bk)=>{
    return bk.publish>=2020 && bk.genre==='Fiction'
})

console.log(userBook); // Output: Array of books with genre 'Fiction'