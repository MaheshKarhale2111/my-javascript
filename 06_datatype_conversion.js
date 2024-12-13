console.log(Number(new Date())); // return miliseconds since 1 jan 1970
console.log(Number("Mahesh")); // NaN // can't convert string 
console.log(typeof(Number("Mahesh"))) // but type will be number 

console.log(Number("32.32")) // 32.32 -> good for converting decimal strings
console.log(Number("32.32eoiur")) // NaN -> it only converts convertable numbers 
console.log(Number("  32.32  ")) // excludes starting and ending white spaces 


console.log(Number("-32")); // consider negative as well 


// Number vs ParseInt 
// parseInt is specifically for string to INT conversation 
// it can't convert to flaot 

console.log(parseInt("32.32")) // output 32 
// use parseFloat to convert to floating number 
Number("42abc");      // NaN (cannot fully convert)
parseInt("42abc");    // 42 (stops at 'a')


//***************************************** */

console.log(String(null)) // "null"
console.log(String(new Date())); //"Mon Dec 09 2024 12:36:11 GMT+0530 (India Standard Time)"

// string() vs .tostring()

// tostring() does not work for null or undefined data 
String(123);          // "123"
(123).toString();     // "123"

String(null);         // "null"
null.toString();      // TypeError: Cannot read properties of null