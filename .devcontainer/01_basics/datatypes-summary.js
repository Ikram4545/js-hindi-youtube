// Primitive 

// 7 types : String Number BigInt null undefined Symbol Boolean

// const score = 100
// console.log(typeof score); Number

// const scoreValue = "100.4"
// console.log(typeof scoreValue); string

// const isLoggedIn = false
// console.log(typeof isLoggedIn); boolean

// const anotherId = Symbol('123')
// console.log(typeof anotherId); symbol

// let userId;
// console.log(typeof userId); undefined

// const outsideTemp = null
// console.log(typeof outsideTemp); null 

// const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber); BigInt 

// ===============================Reference (Non primitive)============================================

// Array, Objects, Functions 

// const heros = ["usman qazi", "eartgul"]; array ko ase likhte hai

// console.log(typeof heros); 

// let myObj = {
//     name: "ikram",
//     age: 20,
// }

// console.log(typeof myObj); object ko ase likhte hai


// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof myFunction); function ko ase likhte hai



// ========================================memory============================================

// stack (Primitive ) ,  heap (Reference Non primitive)

// let MyName = "ikram"

// let anotherName = MyName

// anotherName = "rajput"
// console.log(MyName);
// console.log(anotherName);  


// stack mein copy milti hai Reference nhi milti

// let userOne = {

//     email: "ikram@.com",
//     upi : "23456"
// }

// let userTwo = userOne

// userTwo.email ="ikrammmm@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);

// heap mein Reference milti hai copy nhi milti