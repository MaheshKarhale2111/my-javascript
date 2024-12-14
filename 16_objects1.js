const user = {
    name : "Mahesh", 
    age : 22, 
    location : "Chennai", 
    email : "email.com", 
    loggedin : false
}

// for printing 
// console.log(user.email); // not preferred 
// console.log(user['email']);// preferred 

// why square brackets? 
// say key is "full name" ? it;s impossible to use dot notation to get value 
// user."full name" is not valid 
// user["full name"] is required 

// using symbol as key 

const mysym = Symbol("mykey")

const user2 = {
    [mysym] : "this is symbolic " // the square brackets are required for to treat key as symbol 
}

// for accessing 
// console.log(user2["mysym"]); // Output: undefined
// console.log(user2[mysym]); // Output: "this is symbolic"


// updating values 

user.age = 13; 
user['age'] = 13; // preferred 

// creating new object with updated properties 
const newUser = {...user, name :"rakesh"}; 
console.log(newUser)

// freezing the object
// Object.freeze(newUser)  

user.greetings = ()=> console.log(`Hello ${this.name}`) // this keyword not working in arrow function 
user.greetings2 = function () {
    console.log(`Hello ${this.name}`) // but working with regular function
}

// this is realted to scope of 'this' . read about this in future 

console.log(user.greetings) // returns [Function (anonymous)] // because of absense 
// of square brackets. it's not executing function but giving referece to it 

console.log(user.greetings()) // we will get logged here 

console.log(user.greetings2())