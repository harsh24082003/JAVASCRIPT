function setUsername(username){
    this.username=username;
}

function createUser(username, email, password){
    // setUsername(username)  //This will only call the setUsername function, but when the funciton gets executed, it will get out of the call stack and take username with it, so we have to use "call"

    //call passes current execution context to setUsername

    setUsername.call(this,username)   //here the use of "this" is that setUsername will assign value of username to "this", who called it, here it is createUser





    this.email=email
    this.password=password
}

const user=new createUser("harsh", "harsh@comp", "123")
console.log(user);