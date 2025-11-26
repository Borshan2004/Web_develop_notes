const work_as=async()=>{
    try{
            console.log("hello");

    console.log("second function");

    const num1 =await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data =await num1.json();
    console.log(data);

    console.log(10);
    }
    catch{
        console.log("error")
    }



}

work_as();