const accountId = 14453  // that cannot be changed
let accountEmail =  "jaya123@gmail.com"
var accountPassword = "12345"
accountCity = " Rupaidiha "
 let accountState; // if the value is not declared then js consider it as undefined

// accountId = 2 // not allowed
accountEmail = "js123@gmail.com"
accountPassword = "121212"
accountCity = "Bangalore"
console.log(accountEmail);

// prefer not to use var because of issue in block space in fuctional scope
console.table([accountEmail,accountId, accountPassword, accountCity, accountState]);