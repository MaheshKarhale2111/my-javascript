"use strict";

console.log("Mahesh");


// alert("Mahesh")


// primitive - datatypes 
// number => 2^53 
// bitint 
// string => " "
// boolean 
// null => standalone value , null is represenatation of empty value . Typof null is object 
// undefined => when you declare variable but did not assign value to it . Type of undefined is undefined
// symbol => uniqueness 


// non-primitive 
// Object 

// null vs undefined 
/*
1. both shows absense of values 
2. null is explicitly assigned while undefined when variable is uninitialized 

usecases of null 
1. 
To show absense of value explicitly and intentionally and show it wasn't just an oversight 

obj = {
    name : "Mahesh", 
    age : none
}

here we are saying age is there in my obj but I am explicitly saying it's a null value 
*/

let supervisor = "None"
    // I have a supervisor named "None"

 supervisor = null
    // I do NOT have a supervisor. It is a FACT that I do not.

 supervisor = undefined
    // I may or may not have a supervisor. I either don't know
    // if I do or not, or I am choosing not to tell you. It is
    // irrelevant or none of your business.


// why datatype of null is object ?
// this was historical error in js and carried away in ECMA script 

// comparing null and undefined 

console.log(undefined == null); // true (abstract equality, loose comparison)
console.log(undefined === null); // false (strict equality, different types)

// comparing with self 
console.log(null == null) // returns true 
console.log(null === null) // returns true 
console.log(undefined == undefined) //returns true
console.log(undefined === undefined) //returns true

// undefined == null is true why?? 
// loose equality and by ECMA script rules, they both represents absense of value 

// why === works 
// strict comparison and by rules also 

console.log(null == 0);         // false
console.log(undefined == false); // false
console.log(undefined == "");   // false

// this means js does not treat null and undefiend as falsy values 

// what to use in code ? 
// use == to check for both undefiened and null 
if(obj.name == null){
    console.log("A null value"); 
}


// what if null is used inside and if statement 
// it will be treated as falsy and if stament will not work 

// note that null is not equal to false (null == false) is false 
// but when null is use in context where boolean values are expected, it treated as falsy

// there are many values which are treated as falsy 
// false, "", 0, null, undefined, NaN


// values that are commnly mistkaen as falsy 
// empty array, empty object or any object 

if(new Boolean(false)){
    console.log("Mahesh") // this executes as thing returned by new Boolean is object and objects are true
}

// boolean object is typcially never used in modern javascript 
// interviews might ask 

a = false 
b = new boolean(false) 

console.log(a ==b ) // returns true 
console.log(a ===b) // returns false as type not same, one is boolean and one is object 



/// WHAT IS NaN 
/* 
NaN is not a number, someting returned by when you try to convert a thing into int which is not int 
or it's a result of operation that doesn't product a valid number 

operations like 0/0 , sqrt(-1), or parseInt("abc")

console.
*/
console.log(typeof(NaN)) // this returns number, interersing 
// type for something which is not number is actually a number 

// Unlike other values, NaN is the only value in JavaScript that is not equal to itself.
console.log(NaN === NaN); // false

// then how to check if NaN is NaN 
console.log(isNaN(NaN)) // returns true, althought NaN type is number but still it's not a number is digits 
// so isNaN returns true 




// *********** TRICKY JS QUESTIONS ON DATATYPES ****************************** 
//  What will be output of follwoing 
// 1. 
console.log([3,4] + [5,6]) // 3,45,6
/* 
+ operator is used for two things, addition when both are numbers 
concatenration if one is string 
here the plus operator converts arrays to string internally by using .toString()
so it's same as console.log([3,4].toString() + [5,6].toString()) but happens internally 

note that it's not merging of arrays 
two string are getting added up 
*/

// 2. 
console.log([] + []) // returns empty string "" 
// logic same as above 
// console.log(["hello", 42] + [true, null])	"hello,42true,"


// 3. 
// what if operator is '-' or '*' or '/' 
/* 
these operators are mean only for numbers unlike '+' operator which is used for strings also 
it tries to convert array into integer if possible 
console.log([10] - [5]) // returns 5 , as interanlly 10 is converted to string and then to int 
but all happenns interally 

if it can't convert to integer , it returns NaN
console.log([10,20] - [5]) //	NaN, 	"10,20" is not a valid number
console.log(["hello"] - [1]) // 	NaN

*/

// 4. whsi is output of 
console.log([] == ![]) // output is true 

/* 
// a bit understanding of == 
// When using ==, JavaScript converts both values to a common type before comparison. 
important as for comparing types we have === 
 
so [] is truthy value so ![] is falsy 
so now we have to check  [] == false 
wait,[] is truthy then why output is not false here 
reason being [] is truthy in if condition or boolean condition 
UT, truthiness (in an if statement) is different from equality (==). 

so false is converted to "" then it's converted to 0 
When comparing an object (array) with a number, JavaScript tries to convert the object to a primitive.
For arrays, it first calls .valueOf(), but arrays don't have a meaningful valueOf(), so JavaScript falls back to .toString().
[] is converted to string "" then to 0 
now 0 == 0 which is true 
*/

//5. Type of quetions 
/*
console.log(typeof([])) // object. 
Type of array and object are object 
To distinguish an array from an object, use:
Array.isArray([]);  // true

console.log(typeof function(){}) // function
Type of fucntion is function

*/


// About bigint 
// limit on number is 2^53-1 
// 
/*
 how to get INT_MAX in js
 a = Number.MAX_SAFE_INTEGER 
 b = Number.MIN_SAFE_INTEGER 


 What is limit on bigint? 
 there is not limit on bigint as such 
 it takes as much as it can store in memory 

console.log(3664887897989778787878787n + 1n)
bigints can only be added or subtracted by bigints (very important)

*/