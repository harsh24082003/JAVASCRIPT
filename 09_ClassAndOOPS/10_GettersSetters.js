class User{
    constructor(email, password){
        this.email=email,
        this.password=password
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value;
    }



    get password(){
        return this._password.toUpperCase();  //we have to give the variable name different as in contructor, otherwise stack will overload
        //as we can assign value only onetime to password, next time to another variable named _password

    }

    set password(value){
        this._password=value
    }
}

const harsh=new User("h@harsh.com", "123");
console.log(harsh.password);    //password is a function then also we are accessing it without "()", like a variable.
console.log(harsh.email);