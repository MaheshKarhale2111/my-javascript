// in one liner, 'this' referes to current context
// what is context -> means abhi is current time pe kis ke bare mein baat ho rahi hai 



const user = {
    name : "mahesh",
    age : 22,
    greetings : function(){
        console.log(this); 
    }
}


console.log(user.greetings()) // it will print the given object 


// ------------------------------- 
// this is node enviorment vs this is brower 
console.log(this); // In a browser: Window object, In Node.js: {} or global object 


//---------------------------- 
// about arrow functions 

const add = (num1,num2)=> {
    return num1 + num2; 
}

const add2 = (num1,num2)=> (num1+ num2); 

// when using curly braces , we explicitly need to write return keyword 
// for single liners, use parenthesis and not need of return keyword 