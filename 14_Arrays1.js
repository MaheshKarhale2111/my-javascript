// how to create and fill array 
const fruits = []
fruits.length = 10; 
fruits.fill(-1); 
// console.log(fruits)

// or you can use single line 
const dp = Array(10).fill(-1)
// console.log(dp)


// create a string from array 
const fruit = ["Apple", "Banana", "Cherry "]
const newString = fruit.join(",")
console.log(newString)

// find index of item 

console.log(fruit.indexOf("Banana")); 
// if index not present it will return -1 
console.log(fruit.includes("Dog")) // return false


// map vs foreach 
// map returns new array , so when you to tranform array elements then map 
// foreach does not return , it just perform action by iterating over each element 

const newFruit = fruit.map((f) => f.toLowerCase())


// push and pop 
fruit.push("Guava"); 
console.log(fruit)
fruit.pop();


// pushing and popping element from start 
fruit.unshift("Kela") // [ 'Kela', 'Apple', 'Banana', 'Cherry ' ]
fruit.shift() // removes first element from start 

// slice and splice 

// slice(startindex, endindex) 
// returns the portion between given index ( endindex is not inclusive) 
// slice(1) -> starting from index 1 till last index 
// slice(-2) -> starting from second last index till last 
// slice( -1) returns last element 


// splice 
// splice(startindex, number of element to remove)
// note the diff in syntax 
// do same job as splice but last index is included in splice 

// main diff 
// slice do not alter original array 
// while splice literally cut orignal array 
// so splice can be used where we want to remove elements from array 
// slice can be used where we want to extract some elements from array 