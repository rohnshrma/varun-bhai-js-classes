// This is a comment. Comments start with // and are ignored by the computer.
// They help explain code to humans.

// These lines describe the **readyState** values of an XMLHttpRequest (explained later).
// 0	UNSENT: The request object is created, but not initialized (open() not called yet).
// 1	OPENED: The request is set up (open() has been called).
// 2	HEADERS_RECEIVED: The request is sent, and the server has sent back headers (like status codes).
// 3	LOADING: The response is being received, but not complete yet (partial data available).
// 4	DONE: The request is complete, and all data is received (or failed).

// **Concept**: A variable is like a labeled box that stores data.
// Here, we create a variable called 'url' and store a web address (URL) as a string.
// This URL points to a fake API (Application Programming Interface) that provides sample data.
const url = "https://jsonplaceholder.typicode.com/posts/1";

// **Concept**: XMLHttpRequest (XHR) is a built-in JavaScript tool used to make requests to a server.
// It allows your code to fetch data from a URL (like the one above) without reloading the webpage.
// Here, we create a new XMLHttpRequest object and store it in a variable called 'request'.
const request = new XMLHttpRequest();

// **Concept**: An event listener is like setting up a "watchdog" that waits for something to happen.
// Here, we add an event listener to the 'request' object to watch for the "readystatechange" event.
// This event fires every time the request's readyState (status of the request) changes.
request.addEventListener("readystatechange", () => {
  // **Concept**: The arrow function (=>) is a shorthand way to write a function in JavaScript.
  // This function runs every time the readyState changes.

  // **Concept**: Conditional statements (if) check if something is true and run code if it is.
  // Here, we check if the request's status is 200 (means success) AND readyState is 4 (means done).
  if (request.status === 200 && request.readyState === 4) {
    // **Concept**: console.log() prints messages to the console (a tool developers use to see output).
    // Here, we print the response data (responseText), the status code, and the readyState.
    console.log(
      `Response : ${request.responseText}\nStatus : ${request.status}\nReady State : ${request.readyState}`
    );
    // **Concept**: Template literals (``) allow us to mix strings and variables easily.
    // ${variable} inserts the value of a variable into the string.
    // \n adds a new line for readability.
  }

  // This checks if the request failed (status is NOT 200) but is complete (readyState is 4).
  if (request.status !== 200 && request.readyState === 4) {
    // If the request failed, print an error message to the console.
    console.log("Failed to get data back");
  }
});

// **Concept**: The open() method sets up the request.
// It takes two arguments: the HTTP method ("GET" means fetch data) and the URL to fetch from.
request.open("GET", url);

// **Concept**: The send() method actually sends the request to the server.
// After this, the request starts, and the event listener waits for changes in readyState.
request.send();
