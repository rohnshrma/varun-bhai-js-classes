// **Promises Recap**
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// States: Pending (ongoing), Fulfilled (success, resolves with a value), Rejected (failure, rejects with an error).
// Promises are used to handle async tasks (e.g., HTTP requests) and enable chaining with .then/.catch.

// **Async/Await Recap**
// Async/await is a syntactic sugar built on Promises to make asynchronous code look and behave more like synchronous code.
// - `async` functions always return a Promise, allowing await or .then/.catch usage.
// - `await` pauses execution inside an async function until a Promise resolves or rejects, yielding the resolved value or throwing an error.
// - Errors are handled with try/catch, similar to synchronous error handling.
// Benefits: Avoids callback hell and nested .then chains, improves readability, and simplifies error handling.

// **Promise-Based HTTP Request Function**
// Define a function `sendRequest` that takes a `url` and returns a Promise for an HTTP GET request
function sendRequest(url) {
  // Return a new Promise with `resolve` and `reject` functions
  return new Promise((resolve, reject) => {
    // Create an XMLHttpRequest object to handle the HTTP request
    const request = new XMLHttpRequest();

    // Listen for the "readystatechange" event to track request progress
    request.addEventListener("readystatechange", () => {
      // Check if the request succeeded (status 200) and is complete (readyState 4)
      if (request.status === 200 && request.readyState === 4) {
        // Resolve the Promise with an object containing parsed JSON data and HTTP status
        resolve({
          data: JSON.parse(request.responseText), // Parse JSON response into a JS object
          status: request.status, // Include status (200)
        });
      }

      // Check if the request failed (non-200 status, e.g., 404, 500) and is complete
      if (request.status !== 200 && request.readyState === 4) {
        // Reject the Promise with an error object
        reject({ message: "Failed to fetch data" });
      }
    });

    // Initialize a GET request for the given URL
    request.open("GET", url);

    // Send the request to the server
    request.send();
  });
}

// **Async/Await Function to Handle Requests**
// Define an async function `handleRequest` to fetch and log data from a URL
async function handleRequest(url) {
  // Use try/catch to handle Promise resolution or rejection
  try {
    // Await the Promise returned by sendRequest, pausing until it resolves
    // `data` receives the resolved value (e.g., { data: { id: 1, ... }, status: 200 })
    const data = await sendRequest(url);
    // Log the resolved data
    console.log("data =>", data);
  } catch (err) {
    // Catch any errors (e.g., network failure, non-200 status, JSON parsing error)
    // Log the error object (e.g., { message: "Failed to fetch data" })
    console.log("error => ", err);
  }
}

// **Calling handleRequest for Multiple URLs**
// Call handleRequest for four different URLs to fetch user data
// These calls are asynchronous and run concurrently, not sequentially
handleRequest("https://jsonplaceholder.typicode.com/users/1"); // Fetch user 1
handleRequest("https://jsonplaceholder.typicode.com/users/2"); // Fetch user 2
handleRequest("https://jsonplaceholder.typicode.com/users/3"); // Fetch user 3
handleRequest("https://jsonplaceholder.typicode.com/users/4"); // Fetch user 4

// **Async/Await Explanation**

// **How Async/Await Works**
// - `async` marks a function as asynchronous, ensuring it returns a Promise.
//   - `handleRequest` returns a Promise that resolves to `undefined` (since there's no explicit return).
// - `await` can only be used inside an async function and pauses execution until the Promise resolves.
//   - In `handleRequest`, `await sendRequest(url)` waits for the HTTP request to complete.
//   - If the Promise resolves, `await` yields the value (e.g., `{ data: {...}, status: 200 }`).
//   - If the Promise rejects, `await` throws an error, caught by the try/catch block.
// - try/catch handles errors similarly to synchronous code, catching rejections or runtime errors.

// **Execution Flow of the Code**
// - Each `handleRequest` call starts an independent HTTP request via `sendRequest`.
// - Since the calls are not awaited at the top level, they run concurrently:
//   - All four requests are sent to the server almost simultaneously.
//   - Responses are logged as they arrive, in the order of completion (not necessarily 1, 2, 3, 4).
// - Inside each `handleRequest`:
//   - `await sendRequest(url)` pauses that function's execution until its Promise resolves.
//   - On success, it logs the data; on failure, it logs the error.
// - Total execution time depends on the slowest request, typically a fraction of a second for JSONPlaceholder.

// **Output Example**
// Assuming all requests succeed, the console might log (order may vary due to network timing):
// data => { data: { id: 1, name: "Leanne Graham", ... }, status: 200 }
// data => { data: { id: 2, name: "Ervin Howell", ... }, status: 200 }
// data => { data: { id: 3, name: "Clementine Bauch", ... }, status: 200 }
// data => { data: { id: 4, name: "Patricia Lebsack", ... }, status: 200 }
// If any request fails (e.g., invalid URL), it logs:
// error => { message: "Failed to fetch data" }

// **Comparison to Previous Examples**
// - **Callback-Based sendRequest**: Your earlier callback version required nested callbacks, leading to callback