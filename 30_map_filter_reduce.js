const arr = [2,3,4,5,6,7,8]

//The filter method in JavaScript is used to create a new array containing elements
//  from the original array that pass a specified test. 


// const arr1 = arr.filter((num) => num>4);
const arr1 = arr.filter((num)=> {
    return num>4; // here we need to explicitly write return statement, very common mistake
})
console.log(arr1); 

//---------------------------------------------------------
// note even for map, you need to return if you are using curly braces 
// whenever you open new scope, you need to reduce. 


// chaining of maps 

arr.map((num)=> {return num+1}).map((num) => {return num*10}).filter((num)=> num > 30)


//------------------------------------------------------------------------- 
// Reduce
//Accumulates a Single Value: This value can be a number, object, array, string, or any other data type. 
// it has two things -> accumulator and currval 

const nums = [1,2,3,4]; 

const total = nums.reduce((acc, currval)=> acc+ currval , 0); // important for second argument, the initial value
console.log(total);


// advance examples, imp for interview 

// 1. Flattening of array 
const nestedArray = [[1, 2], [3, 4], [5]];
const flatArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]


// 2.counting of occurences 
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 } 


3. 

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 },
  ];
  const groupedByAge = users.reduce((acc, user) => {
    (acc[user.age] = acc[user.age] || []).push(user);
    return acc;
  }, {});
  console.log(groupedByAge);
  // Output: { 25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], 20: [{ name: 'Bob', age: 20 }] }
  