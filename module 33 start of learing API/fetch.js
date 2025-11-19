/**
 * 
 * 
fetch(url)
→ Sends a request to the API and returns a Promise.

.then(res => res.json())
→ Waits for the response, then converts it into a real JavaScript JSON object.

.then(data => {...})
→ Runs after the JSON object is ready.

console.log(data)
→ Prints the final data on the console.
 */



// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res=>res.json())
// .then(data=>console.log(data))


const fectchcaller = () => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))

}

const morefetchcaller= ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}