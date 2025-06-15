function sendRequest(cb, url) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.status === 200 && request.readyState === 4) {
      cb(request.responseText, null);
    }

    if (request.status !== 200 && request.readyState === 4) {
      console.log(null, "Failed to fetch data");
    }
  });

  request.open("GET", url);
  request.send();
}

// sendRequest((data, err) => {
//   if (!data) {
//     console.log("error =>", err);
//   } else {
//     console.log("data =>", data);
//   }
// }, "https://jsonplaceholder.typicode.com/users/1");




// callback hell | pyramid of doom

sendRequest((data, err) => {
  if (!data) {
    console.log("error =>", err);
  } else {
    console.log("data =>", data);

    sendRequest((data, err) => {
      if (!data) {
        console.log("error =>", err);
      } else {
        console.log("data =>", data);

        sendRequest((data, err) => {
          if (!data) {
            console.log("error =>", err);
          } else {
            console.log("data =>", data);

            sendRequest((data, err) => {
              if (!data) {
                console.log("error =>", err);
              } else {
                console.log("data =>", data);
              }
            }, "https://jsonplaceholder.typicode.com/users/4");
          }
        }, "https://jsonplaceholder.typicode.com/users/3");
      }
    }, "https://jsonplaceholder.typicode.com/users/2");
  }
}, "https://jsonplaceholder.typicode.com/users/1");
