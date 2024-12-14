// learn in depth about scope and all 
// for now , var is global scoped and let is local scoped 

let a = 5 

{
    let a = 6 ; 
    console.log(a); // prints 6
}

console.log(a); // prints 5

// /--------------------------------

var b = 10; 

{
    var b = 11; 
    console.log(b);  // prints 11 
}

console.log(b); // prints 11 , since var is global scoped, it's value changed inside curly braces 

//-------------------------------------------------



// someting interesting 


addone(50); // we can call regular function before declaration 
// because of hoisting( to be covered)  
function addone(num) {
    console.log(num+1);
}

addtwo(40); // but we can not call functions declared by this way before declaration
const addtwo  = function(num){
    console.log(num+2);
}
