
// Switch statement
//------------------------- 
// imp 
// empty array is true but empty string is false , interesting 


// falsy values 
// false, 0,-0,BigInt 0n, "", null, undefined, NaN 
// all other than this are considered as true

// surprising truthy values 
// "0", 'false', " ", []( empty array), {}(empty array), function(){} (empty function)

// so while checking empty array 
const arr = []
if(arr.length == 0){
    
}

// for checking if object is empty or not 
const emptyObj = {}; 
if((Object.keys(emptyObj)).length){ // very imp

}

//------------------------------------------------------- 

// Nullish coalescing Operator(??) : 
// safety checker for null or undefined 
let val1; 

val1 = null ?? 5; // 5 is stored in val1 
val1 = null ?? 10 ?? 50; // 10 is stored 

console.log(val1);
