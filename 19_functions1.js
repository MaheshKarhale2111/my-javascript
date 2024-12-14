function myfun(num1, num2) {
        console.log(num1 + num2) ; 
}

myfun(3,5);

// why we don't give varible types in function 
// dynamically typed language 
// they are decided at runtime 

//------------------------------------------------- 

// Rest operator (...)

// used to represent an indefinite number of arguments as an array. 

function cart(...num){
    return num; 
}

console.log(cart(1,2,3,4)) // returns [ 1, 2, 3, 4 ]$

// other uses
// in destructuring of arrays 

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]


// in destructing objects 
const person = { name: "John", age: 30, city: "New York", country: "USA" };
const { name, ...otherDetails } = person;
console.log(name);         // Output: John
console.log(otherDetails); // Output: { age: 30, city: "New York", country: "USA" }


// 
// Immediately invoked function expression (IIFE)

// An Immediately Invoked Function Expression (IIFE) is a function in JavaScript 
// that is executed immediately after it is defined. This pattern is often used to 
// create a private scope, avoiding polluting the global namespace

// They are typically used to create a local scope for variables 
// to prevent them from polluting the global scope.


(function() {
    console.log("Mahesh"); 
}) ();  // it's important to write semicolon 

( (name)=> {
    console.log(name)
})("mahesh")


// very often it's asked to write two iife functions. if we don't write semicolon, we 
// may get error