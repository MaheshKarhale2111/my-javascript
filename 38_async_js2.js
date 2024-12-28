// settimeout and set interval 

const timeoutref = setTimeout(() => {
    console.log("I am mahesh")
}, 2000);

// but sometimes we need to clear timeout inbetween 

// document.querySelector('btn').addEventListener('click', ()=> {
//     clearInterval(timeoutref); 
// })

//-------------------------------- 
// while settimeout run only one time after given time interval 
// setinterval run continouly at fixed intervals 

setInterval(() => {
    console.log("This is it")
}, 2000);

// similarly you can clear the interval 