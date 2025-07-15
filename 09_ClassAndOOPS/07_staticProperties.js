class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){   //if any function is static then it cannot be accessible by any created instances of it
        return `123`
    }
}

const harsh=new User("harsh")
console.log(harsh.createId())   //if createId() is static then this line will throw an error saying  "harsh.createId is not a function"  . This goes same for any class inherited from User, it will also can't use createId as it is static