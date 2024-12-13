let a = 3; 
let b = a++; 

console.log(a +" "+ b); // outputs 4 3


let p = 3; 
let q = ++p; 

console.log(p + " "+ q); // outputs 4 4



//---------------------------------------- 
// in first case , pehle assign hoga b mein then a will incremetn 
// so b ka value will be same as 'a' before 


// in second case , p will increment first and then assigned to q 
// thus both values are equal 

//------------------------------------------------------ 


// == vs === 

// == only compare content while === compares the type as well 


// 55 == 55
// true
// “55” == 55
// true

// "55" === 55 // false