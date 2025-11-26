const urls=[
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/1',
]


Promise.all(urls.map(url=>{
    return fetch(url).then(response=>response.json()).then(data=>data)
}))
.then(res=>res).then(newdata=>console.log(newdata)).catch(err=>console.log(err));