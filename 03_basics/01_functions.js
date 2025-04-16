//function

// function sayMyName(){
// console.log("H");
// console.log("I");
// console.log("J");
// console.log("K");
// console.log("M");
// console.log("N");
// }

// sayMyName()

// function addTwoNumbers(number1,number2){
//         console.log(number1 + number2);
// }
// addTwoNumbers(3,null)

// function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    console.log("hloooooooo");
//    return result

// }

// const result = addTwoNumbers(3,5)
// console.log("Result : ",result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hlllllll"))

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//          return 
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

// function calPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calPrice(200,400,500,900,700))

const user = {
    username: "raj",
    price:199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [400,600,800,1000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([400,600,800,1000]))