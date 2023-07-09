const controller = new AbortController();
const signal = controller.signal;
const url = "https://api.giphy.com/v1/gifs/translate?api_key=1e6ObMjF2eIpNxlvNOSzwSuWZkg8oLqM&s=cat";

const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector("#abort");

downloadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(url, { signal });
    console.log("Download complete", response);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
});

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});



// =========== Sending Request with credentials included =========== //

// To cause browsers to send a request with credentials included on both same-origin and cross-origin calls, 
// add credentials: 'include' to the init object you pass to the fetch() method.

fetch("https://example.com", {
    credentials: "include",
});

// Access-Control-Allow-Origin is prohibited from using a wildcard for requests with credentials: 'include'
// in such cases, the exact origin must be provided; even if you are using a CORS unblocker extenstion, the request
// sill still fail.

// if you only want to send credentials if the request URL is on the same origin as the calling script,
// add      credentials: 'same-origin'

fetch("https://example.com", {
  credentials: "same-origin",
});

// To instead ensure browsers don't include credentials in the request, use credentials: 'omit'.

fetch("https://example.com", {
    credentials: "omit",
})


// ========================== Uploading JSON data ========================== //
// use fetch() to POST JSON-encoded data
async function postJson(date) {
    try {
        const response = await fetch("https://example.com/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error: ", error);
    }
}


const data = { username: "example"};
postJson(data);



// ================================= Uploading multiple files ================================= // 
// files can be uploaded using an html <input type='file' multiple /> input element, FormData() and fetch().

async function uploadMultiple(formData) {
    try {
        const response = await fetch("https://example.com/posts", {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}
  
const photos = document.querySelector('input[type="file"][multiple]');
const formData = new FormData();
  
formData.append("title", "My Vegas Vacation");
  
for (const [i, photo] of Array.from(photos.files).entries()) {
    formData.append(`photos_${i}`, photo);
}
  
uploadMultiple(formData);



// ==================== Checking that the fetch was successful ==================== //


async function fetchImage() {
    try {
        const response = await fetch("flowers.jpg");
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const myBlob = await response.blob();
        myImage.src = URL.createObjectURL(myBlob);
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}






// ============================= Headers =============================== //
/*
    The Headers interface allows you to create your own headers object via the Headers() constructor. 
    A headers object is a simple multi-map of names to values:
*/

const content = "Hello, World";
const myHeader = new Headers();

myHeader.append("Content-Type", "text/plain");
myHeader.append("Content-Length", content.length.toString());
myHeader.append("X-Custom-Header", "ProcessThisImmediately");

// The same can be achieved by passing an array of arrays or an object literal to the constructor:

const myHeaders = new Headers({
    "Content-Type": "text/plain",
    "Content-Length": content.length.toString(),
    "X-Custom-Header": "ProcessThisImmediately",
});


// The contents can be queried and retrieved:

console.log(myHeaders.has("Content-Type"));     // true
console.log(myHeaders.has("Set-Cookie"));       // false

myHeaders.set("Contet-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length"));       // 11
console.log(myHeaders.get("X-Custom-Header"));      // ['ProcessThisImmediately', 'AnotherValue'];
// Note that .get('X-Custom-Headers)    --->  there are two objects with that name.
// So, the returned value will be an array of all values of that name

myHeader.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header'));      // null
// removes all objects with name = 'X-Custom-Header'




////// A good use case for headers is checking whether the content type is correct before you process it further. 
// For example:

async function fetchJSON(request) {
    try {
        const response = await fetch(request);
        const contentType = response.headers.get("content-type");
        if(!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Oops, we haven't got JSON!");
        }
        const jsonData = await response.json();
        // process your data further
    } catch (error) {
        console.error("Error: ", error);
    }
}







// ===================================== Response Objects ===================================== //
// As you have seen above, Response instances are returned when fetch() promises are resolved.

/* 
    The most common response properties you'll use are:
        Response.status — An integer (default value 200) containing the response status code.
        Response.statusText — A string (default value ""), which corresponds to the HTTP status code message. Note that HTTP/2 does not support status messages.
        Response.ok — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a boolean value.
*/

