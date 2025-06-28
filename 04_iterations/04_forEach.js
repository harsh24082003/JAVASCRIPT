const coding= ["js", "python", "c", "java", "c++", "c#"];


// forEach is a method that executes a provided function once for each array element.
//In forEach, callback function is called for each element in the array, so no need to name the function inside ()
coding.forEach(function (item){
    console.log(item); // Output: js, python, c, java, c++, c#
})

coding.forEach((item)=>{
    console.log(item); // Output: js, python, c, java, c++, c#
})


const myCoding =[
    {
        languageName: "JavaScript",
        languageType: "Scripting",
    },

    {        languageName: "Python",
        languageType: "Scripting",
    },

    {        languageName: "C",
        languageType: "Compiled",
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName); // Output: JavaScript, Python, C, In this place, we can use any condition also, but it is not possible in forEach to return the filtered values
})
