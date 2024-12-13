// NOte that Date is object 

let date1 = new Date(); 

console.log(date1) // print 2024-12-12T18:50:00.555Z -> UTC timing 
console.log(date1.getDay()) // gives day of week // starting index is 0 , starting from sunday 
console.log(date1.getMonth()) // gives month of year   // starting index is 0 .. imp 
console.log(date1.getTime()); // 1734029830970 // miliseconds from 1 jan 1970

// how to get dates before 1970 
console.log(new Date(1909,0,13)) // note yyyy-mm-dd format is important  and month start at index 0
console.log(new Date("12-11-1872"))
//You can pass a negative value to represent a date before the epoch.
const date = new Date(-157766400000); // December 25, 1965


// converting miliseconds to seconds // asked in interview 
let nowTime = Date.now(); 
console.log(Math.floor(nowTime  / 1000))
 

// for getting year , use getFullYear() which returns 4 digit number
// don't use getYear() it's inconsitent and not follow ECMA script 
