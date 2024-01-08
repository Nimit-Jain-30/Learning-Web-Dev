console.log("Nimit")
const accountId = 1584
let accountEmail = "nimit@gmail.com"
var accountPassword = "1928"
accountCity = "Ahmedabad"  // this is valid but not a good way of defining a variable

// accountId  = 6494 --> not allowed
// variables defined as const can not be changed

/* prefer not to use var */
accountEmail = "nj@gmail.com"
accountPassword = "abc"
accountCity = "Udaipur"

console.table([accountId,accountEmail,accountPassword,accountCity])