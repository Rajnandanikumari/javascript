// const myObject = {
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }

// for(const key in myObject){
//     console.log(myObject[key]);
// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js","rb","py","java","cpp"]

// for(const key in programming){
//     console.log(programming[key]);
// }

const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        langugeName:"javascript",
        languageFileName:"java"
    },
    {
        langugeName:"javascript",
        languageFileName:"java"
    },
    {
        langugeName:"javascript",
        languageFileName:"java"
    },

]
myCoding.forEach((item)=>{
    console.log(item.langugeName);
})