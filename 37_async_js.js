// Blocking code vs non blocking code 
// blocking : which blocks entire execution of till the given task is complted ( ( line by line code execution ))
// non blocking : does not wait for given task to complte,move on and check it later 

// is non-blocking better then? 
// no , depends on usecase 
// say userdata form submission, we can't send success message to user until we verify his data has been successfully saved is db 


//------------------------------------------------------------------------- 
// ABOUT JAVASCRIPT 
// Single threaded language , default behaviout is synchronous ( line by line code execution )
// But it also has capability to act as asynchrous -> timeout, async-await , event loop , 


//------------------------------------ 
// if js is single threaded then how async taks are handled? 
// answed in chai with code diagram 
//1.When an asynchronous operation is encountered (e.g., setTimeout, fetch, or reading a file), 
// the JavaScript engine delegates this task to Web APIs (in browsers) or Node.js APIs.
// 2.These APIs handle the heavy lifting (e.g., timers, HTTP requests) on separate threads 
// provided by the browser or the Node.js environment.
// 3. Once an asynchronous task completes, its callback or promise resolution is added to the task queue or microtask queue.

// see example 