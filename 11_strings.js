let name = "mahesh" // type is string 
let myName = new String("Mahesh"); // type is object 


// methods 

// console.log(name.toUpperCase())
// console.log(name.indexOf('h')) // gives first index 

let sample = "mahesh"

const newString = sample.substring(0,4) // mahe

const another = sample.slice(-3) // gives last 3 characters. So prefer slice over substring
console.log(sample.slice(0, -1)); // Output: "mahes" . Removed last charcter 
// slice( startindex, endindex) 
// if negative means counting starts from back  

let string1 = "    bottle   "
console.log(string1.trim());  // removes white spaces from front and back 

let string2 = "www.iitm.ac.in/eml%20team"
console.log(string2.replace("%20","-")); // www.iitm.ac.in/eml-team
console.log(string2.includes("eml"));
console.log(string2.includes("")) // note this, this will return true as well. Blank string is present


let string3 = "Mahesh is great coder"
console.log(string3.split(" ")) // splits based on ]

// syntax 
// .split(" ", limit) -> limit is how many elements you want in output array 
// if limit == 0 then include all elemeents 






