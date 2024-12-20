

const arr = [1,2,6,9,3]

// for-of loop 
// same as for(auto i : arr) in c++ 
// useful for traversing string, arr
for(let i of arr) {
    // console.log(i); 
}


// for objects we use for in 

// map vs foreach 
// foreach use to perform just action 
// map returns new array that's why it's used is react 


const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // Output: [2, 4, 6]


const country = new Map(); 
country.set("india", 'delhi');
country.set("japan ", 'tokyo');
country.set("usa", 'newyork');


for(let [key,value] of country){ // destructing of key and value 
    console.log(key);
}


//--------------------------------------------------- 

const myobj = {
    js : 'javascript', 
    cpp : 'c++', 
    rb : 'ruby'
}

for(let key in myobj){
    console.log(key); // gives you key in object 
    // to get values do consolelog(myobj[key])
    
}


numbers.forEach((num,i,arr) => console.log(num,i,arr)); // note that the thrid argument is arr itself

