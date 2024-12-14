// const myobj = new Object(); // creates singleton object 
const myobj = {} // non singleton object.
// read about this is detail later 

// if objects are const declared < how can you change thier properties 
// const means the reference is fixed, the varible name cannot be reassigned 
// but the properites are immutable, they can be modified
// same goes with arr , you cannot redeclare something using same name 


const obj1 = { 1 : 'a', 2 : 'b'}; 
const obj2 = { 3 : 'c', 4 : 'd'};


// method 1 , by using spread opertor 
const obj3 = {...obj1, ...obj2}; 
console.log(obj3);

// method 2 : assign operator 
const obj4 = Object.assign({}, obj1, obj2); 
// syntax is (target, source1, source2) // all sources are combined in target 


const user = {
    name : "Mahehsh", 
    age : 40, 
}


// imp , to get all keys of object 
console.log(Object.keys(user)); // return type is array 
console.log(Object.values(user)); // return type is array 

// check if property is present in object 

console.log(user.hasOwnProperty('age'))// returns boolean






