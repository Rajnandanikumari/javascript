const accountId = 144553
let accountEmail = "nandani@google.com"
var accountPassword = "3456"
accountCity = "Jaipur"
let accountState;

// accountId = 2
accountEmail = "hcl@gmail.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);
/**
 * prefer not to use var 
 * because of issue in block scope and functional scope
 */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
