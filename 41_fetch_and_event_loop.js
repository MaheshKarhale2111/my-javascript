// say there are operations like 
// console.log("start")
// setTimeOut((console.log("one")), 0)
// fetch().then(Cosnole.log("two"))
// console.log("end")

// the output will be 
// start 
// end 
// two 
// one

// few oberservations 
// synchronous operations a done first ( simple console.logs)
// note that even if timout is 0 sec, it's execulated later 
// fetch is executed prior to tiemout even if it's writeen first 



// understanding event loop ( see diagram in lec 37 )
// fetch() is part of the Web APIs and is asynchronous, running on the event loop. 
// It gets priority over a setTimeout operation, even though both are asynchronous

// Why Fetch Outputs Come First
// The Event Loop in JavaScript
// JavaScript uses a single-threaded concurrency model with an event loop that handles the execution of code, including asynchronous tasks like:

// Microtasks (Higher priority):
// Promises (e.g., fetch).
// Anything queued with .then(), .catch(), .finally().
// async/await internally queues microtasks.

// Macrotasks (Lower priority):
// setTimeout(), setInterval(), and similar APIs.
// UI rendering.
// Microtasks always execute before macrotasks in the event loop. This means that a promise resolution (like fetch) will complete before a setTimeout callback


//------------------- 

// So basically there are two queues . One is for fetch(microta) ( which has higher priority)
//  and one for macrotasks

// since they are queues they follow FIFO operations among themselves 

// VIMP -> only after finishing all micro tasks(fetch ops), then only control moves to macro task queue 
// even if it's taking too much time 
// see this in next file 