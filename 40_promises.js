//very important 
// promises are objects representing the event completion or failure of asynchronoue operation 
// note , it's an object 

// there are two parts, one is creating a promise ( by using new promise  )
// other one being consuming promise ( done using async-await-try-catch or .then method )



//----------------------------------------------------------------- 
// promise creation takes a funciton with two parameters (resolve and reject)
// why they are important - they communicate completion or failure of asynchronous operation 
// without then we will never know what happened to async operaiton , it will be always in pending state 




const promiseOne = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let err = true; 
        console.log("Mahesh");
        if(!err) {
            resolve("Data fetch is successful")
        }
        else {
            reject("Data fetch is unsuccesful")
        }
    },1000)
})

// console.log(promiseOne);// if if print this , I will get promise<pending> in console and then output 
promiseOne.then((msg)=> {
    console.log(msg);
})
.catch((msg)=> {
    console.log(msg);
})

//---------------------------------------------------------------
//.then() is connected to resolve() and similarly .catch() is connected to .reject() 
// argument passed through resolve() goes to .then() and simlar for .reject() 

// about chaining promises 
// resolve allows you to chain multiple asynchronous operations in sequence by passing results from one .then() to the next.
const promiseTwo = new Promise((resolve,reject)=> {
    let err = false; 
    if(!err){
        resolve({username : "mahesh", age : 15})
    }
    else {
        reject("Error occured"); 
    }
})
// in chaining multiple operations, return of first .then() is passed to next .then() as input parameter 
promiseTwo.then((user)=> {
    console.log(user); 
    return user.username; 
}).
then((username)=> {
    console.log(username)
}).
catch((msg)=> {
    console.log(msg);
})

// why promise chaining is used 
// Example 
const fetchData = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });

const processData = (data) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(`${data} and processed`), 1000);
    });

const displayData = (data) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(`${data} and displayed`), 1000);
    });

fetchData()
    .then((data) => processData(data)) // Pass fetched data to processing
    .then((processedData) => displayData(processedData)) // Pass processed data to display
    .then((finalResult) => console.log(finalResult)); // Log the final result

// without promise chaining it will fall into callback thell 
// eg of callback hell 
fetchData((data) => {
    processData(data, (processedData) => {
        displayData(processedData, (finalResult) => {
            console.log(finalResult);
        });
    });
});


// Also in chaining , we can have single .catch() to handl error for all steps, avoiding the need to handle errors at every level.

// .finally() in promises 
// acts as cleanup ,  stopping a loader or closing a database connection.
// .finally() is called after the promise is either resolved or rejected ( or better word is settled)

// L-------------------------------------------------------------------------------------- 
// Lil about fetch 
// fetch returns a promise 
// either use it as fetch(url).then().catch()
// or use async await block 
//  const fetchData = async()=> {
//          try {
//             const res = await fetch(); 
//          } catch (error) {
//             // error here 
//          }
//     }

// ------------------------------------------------------------------------------------------- 
// when to use .then() vs when to use async await 

// Use .then():
// When you have simple promise chains.
// For quick one-off operations.
// When you need to handle promises in parallel using methods like Promise.all().

// Use async/await:
// For complex asynchronous flows with sequential operations.
// When you want to make asynchronous code more readable and synchronous-like.
// For better error handling with try-catch.


// example of async-await vs .then() method 
// Hard to read with .then()
// fetchData()
//     .then((data) => processData(data))
//     .then((result) => displayResult(result))
//     .catch((error) => handleError(error));

// // Cleaner with async/await
// async function handleFlow() {
//     try {
//         const data = await fetchData();
//         const result = await processData(data);
//         displayResult(result);
//     } catch (error) {
//         handleError(error);
//     }
// }
