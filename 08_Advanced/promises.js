const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
        console.log("Async task is complete")
        
    },1000);
    
})

//this "then" only works when the promise is resolved, it's like connecting both of them
//resolve is used to pass values to the then function
promiseOne.then(function(){
    console.log("Promise is resolved");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 is complete");
        resolve();
    },1000);
}).then(function(){
    console.log("Async2 is resolved");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@chai"})
    },1000);
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"me", email:"chai@chai"});
        }
        else{
            reject("Error:Somehting went wrong");
        }
    },1000);    
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;

}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("The promise is either resolved or rejected, this will always run"));



//Now, using async and await instead of then,catch,finally
//async and await can't hanle the error, so we need to use try and catch

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",pass:"js"})
        }
        else{
            reject("Error:Something went wrong in promiseFive");
        }
    },1000)
})


async function consumePromiseFive(){
    try{
        const response=await promiseFive;
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("This will always run");
    }
}
consumePromiseFive(); //This is necessary to call the async function, otherwise it won't run


// async function getAllUsers(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)  This can also give output, but it's format is not json(Not understood properly)
//         const data=await response.json() //It takes time to convert response to json file, that's why await is used here
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));


