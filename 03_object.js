//singleton

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"hiii",
    "full name":"nandani kumari",
    [mySym]:"mykey1",
    age:18,
    email:"raj@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "nandani@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "shri@microsoft.com"
console.log(jsUser);
jsUser.greeting = function(){
    console.log(`jjjjjjjj , ${this.name}`);
}

jsUser.greetingTwo = function(){
    console.log(`jjjjjjjj , ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());