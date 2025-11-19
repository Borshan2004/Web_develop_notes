const moremoreflechwork=()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>{
        //console.log(data);
        displayseparatly(data);//now the converted obj data will work as a array
    })

}

//here the data is working as a array which have the nunmber of objects
const displayseparatly=(data)=>{

    const container_of_the_user = document.getElementById("users");

    for(let i=0;i<data.length;i++){

        //using this loop we separate every data obj from the array

        //const printwork = data[i];
        //console.log(data[i]);
        const li = document.createElement('li');
        li.innerText=data[i].name;
        container_of_the_user.appendChild(li);

    }


    
}