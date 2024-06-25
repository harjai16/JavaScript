const accountId = 14456
let accountEmail = "Ashwanik2198@gmail.com"
var accountPassword = "12345"
accountCity ="Delhi"
let accountState;

// accountId = 5 // not allowed 
console.log(accountId);

accountEmail = "qwe@gmail.com"
accountPassword = "3434"
accountCity = "uttrakhand"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var due 
to scope issue
*/