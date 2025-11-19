fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(data=>{

    workfun(data);
})


const workfun=(data)=>{

    const container = document.getElementById("id_of_post");

    for(let i=0;i<data.length;i++){

         console.log(data[i]);
         const div = document.createElement("div");
         div.classList.add("card")
         div.innerHTML=`
         
         <p>Title:${data[i].title}</p>
         <p>Body:${data[i].body}</p>
         <p>Id:${data[i].id}</p>
         `
         container.appendChild(div);

    }
}