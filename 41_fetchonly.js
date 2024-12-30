// what is fetch ? ( for interview)
// The fetch API in JavaScript allows you to make HTTP requests asynchronously 
// and returns a Promise that resolves to the response of that request


// When you send fetch request 
// two things happenns behind the scene 
// one goes to fetch the data from url other one created memory for response data 


// important facts about fetch 
// fetch output needs to be converted to json by using .json() 
// while in axios it's by default json 


// The fetch() function will reject the promise on some errors ( network failures;  authenticaiton of permission issues ), 
// but not if the server responds with an error status like 404 : 
// so we also check the response status and throw if it is not OK.

// what does this mean 
// if there is 404 error , fetch promise will resolve ( and not reject )
// means even if it's error, it won't be catched in .catch() method 
// why? because it's returnning something , even if it's error , it's returning an object 
// which status not ok 

// Even if the server responds with an error status code like 404 (Not Found), 500 (Internal Server Error),
//  or 503 (Service Unavailable), the fetch() promise will not reject. Instead, it resolves 
// successfully with a Response object that contains details about the error response.


// why this? -fetch is desinged to handle network request and return reponse whethere server is available or not 
//If the server responds with a 404 error, the request itself was successfully made (i.e., the network operation succeeded), 
// but the server could not find the requested resource.


// what to do ? 
// need to manually check the status 
//--Since fetch() doesn't automatically reject on server errors, it's up to you to check the response's 
// status and decide whether the response is valid or not.

//--You can use response.ok (a boolean property) or response.status (an HTTP status code) 
// to detect if the request was successful.

//--response.ok: A boolean that is true if the status code is in the range of 2
// 00-299 (indicating a successful response) and false otherwise.

//--response.status: The actual HTTP status code returned by the server (e.g., 200, 404, 500).

//-- here axios comes handly 
// axios automatically rejects the promise for HTTP error statuses (e.g., 404, 500). This allows you to catch and handle 
// errors more easily without having to check the response.ok or response.status yourself, which is required with fetch().
//------------------------------------------------------------------------------------------- 

// Example  

fetch("https://api.example.com/data")
    .then(response => {
        // If response is not OK (status is not in the 200-299 range), manually throw an error
        if (!response.ok) {
            // Log the status code for debugging
            console.log("Request failed with status:", response.status);
            // Throw an error to reject the promise
            throw new Error("Network response was not ok");
        }
        // If the response is OK, parse the JSON data
        return response.json();
    })
    .then(data => {
        // Process the data if the response is successful
        console.log("Data received:", data);
    })
    .catch(error => {
        // Handle the error, whether it's network-related or from invalid status code
        console.error("There was a problem with the fetch operation:", error);
    });


