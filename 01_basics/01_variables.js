const accountId =144553
let accountEmail = "anupamvishwkarma3@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail ="anupam@google.com"
accountPassword = "21212121"
accountCity = "Begaluru"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])