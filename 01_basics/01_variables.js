const accountId=13313
let accountEmail="hs@gmail.com"
var accountPassword="1234"
accountCity="Delhi"
let accountState;

/*
prefer not use var because of issue in block scope and functional scope
*/

// accountId=23; // cannot be reassigned

accountEmail="h1@gmail.com"
accountPassword="12345"
accountCity="Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])