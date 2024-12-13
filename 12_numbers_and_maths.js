const score = 100; 

console.log(score.toString().length); // can convert to string 

let c = (100.32596).toFixed(2);  // 2 decimal points after decimal 
let d = (101.32596).toPrecision(2);  // returning 100 . Returns significant digits ig 
console.log(typeof(c))// returns string 
// NOTE THAT, THE RETURN TYPE OF BOTH ABOVE OPERATION IN STRING 
// YOU NEED TO PARSE INT TO AGAIN BACK IN INT 


const hundres = 100000000; 
console.log(hundres.toLocaleString()); // converts to 10,00,00,000 // 
// ig it detects local automatically 
// console.log(hundres.toLocaleString('en-IN')); // converts to 10,00,00,000 



//**************************  */

let sam = Math.abs(-400) 
sam = Math.round(4.6)
sam = Math.floor(4.6)
sam = Math.sqrt(4.6)
sam = Math.min(4,6,5,9); // returns minimum value in array 


// Radom 
console.log((Math.random()*10) + 1 );
// Generate random number between range [min,max] 

Math.floor(Math.random() * (max - min + 1) + min);
// +1 is added to include max as well
// random gnerated values [0,1)
