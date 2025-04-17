// const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// const values = coding.forEach((item) => {
//     console.log(item);

// });

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

// const myNu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNu = myNu.filter((nums) => {
//     return nums > 5
// })
// console.log(newNu);

// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((num)=>{return num + 10})

// const newNums = myNums.map((num) => {
    // return num * 10
// })
// console.log(newNums);
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums
// .map((num) => num * 10)
// .map((num) => num + 1)
// .filter((num)=>num >=40)

// console.log(newNums);

const price =  myNums.reduce((acc,num)=>acc + num,0)
console.log(price);