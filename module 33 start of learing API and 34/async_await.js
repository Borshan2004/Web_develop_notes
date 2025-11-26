//this is for the error catching 
// const async_await_work=()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.jsn())
//     .then(data=>console.log(data))
//     .catch(error=>console.log("error pisi",error))

// }

// async_await_work();



// const num1 = 10;
// const num2 = 20;
// const result = num1 + num2;

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data));

// console.log(result);
// console.log("hello");

// //when we call the fetch like this is takes time to come data for this reason the print of hte hello is done before the fetch print though the print of the fetch class is called first 


 const num1 = 10;
const num2 = 20;
 const result = num1 + num2;

const handle_async = async()=>{

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

}

handle_async();
console.log("hello");

//Declaring an Async Function

// async means this function can use await inside it.
// await pauses the function until a Promise is completed.


// Fetching Data From an API

// fetch() sends a request to the URL.
// It returns a Promise, so we use await to wait until the server sends the response.
// response contains the HTTP response (status, headers, body, etc.).


// Converting Response Data to JSON

// The response.json() also returns a Promise.
// await waits for the JSON conversion to finish.
// data now contains a JavaScript array of user objects.