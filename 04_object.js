//const tinderUser = new Oject()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname :{
            firstname:"raj",
            lastname:"nandani"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1 : "a",2:"b"}
const obj2 = {3 : "a",4:"b"}
const obj3 = {5 : "a",6:"b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2}

console.log(obj4);

const users = [
    {
        id : 1,
        email:"sam@gmail.com"
    },
    {
        id : 1,
        email:"sam@gmail.com"
    },
    {
        id : 1,
        email:"sam@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    cousename:'js in hindi',
    price:'888',
    courseInstructor:"nandani"
}

//couse.couseInstrutor

const {courseInstructor} = course 
console.log(courseInstructor);

// const navbar = () => {}



// {
//     "name":"nandani",
//     "coursename":"in hindi",
//     "price": 100
// }