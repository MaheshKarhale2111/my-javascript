// read previous file before this 

console.log("start"); 


setTimeout(()=> console.log("This is timeout"),0)

new Promise((resolve,reject)=> {
    console.log("start of promise"); 
    for(let i = 0; i < 1000000; i++){} //huge time is taken here but still timeout wala msg is printed later 
    resolve("finished promise"); 
})
.then((msg)=> console.log(msg));

console.log("End");


// output -> 
// start
// start of promise // yes this is printed before end as synchrrous operation
// End
// finished promise
// This is timeout


//---------------------
// Step-by-Step Execution:
// Synchronous Execution:

// The first console.log("start") is executed, and "start" is logged to the console.
// Promise Creation:

// A new Promise is created. The executor function of the promise is executed immediately (synchronously) when the promise is created.
// "start of promise" is logged immediately because the code inside the promise executor is executed synchronously.
// After executing the executor, the promise is resolved with the value "finished promise". This resolves the promise and queues the .then() callback to be executed later.
// .then() Callback:

// The .then() callback is a microtask. It is queued in the microtask queue after the promise is resolved. This callback will be executed after the synchronous code has finished, but before any macrotasks (like setTimeout).
// setTimeout:

// setTimeout is a macrotask. Although the delay is set to 0, macrotasks are executed only after the microtasks are processed. So, even with 0 milliseconds, it will run after all microtasks are finished.
// Synchronous Code Continuation:

// "End" is logged to the console synchronously.
// Event Loop:

// After executing all synchronous code (which includes console.log("start") and console.log("End")), the event loop processes the microtask queue.
// The microtask queue contains the .then() callback, which logs "finished promise".
// Processing Macrotask (setTimeout):

// Finally, after the microtask queue is empty, the event loop processes the macrotask queue, which contains the setTimeout callback. This logs "This is timeout".