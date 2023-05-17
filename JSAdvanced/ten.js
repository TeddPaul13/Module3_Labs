/**  10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in
the comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs. */

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}
console.log(fetchURLData("https://api.squiggle.com.au/?q=teams"));

//a) Write a new version of this function using async/await

const fetchURLData1 = async (url) => {
  const options = {
    method: "GET",
  };

  let response = await fetch(url, options);

  if (response.status === 200) {
    response = await response.json();
    console.log(response);
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
};
fetchURLData1("https://api.squiggle.com.au/?q=teams"); // Test passed
