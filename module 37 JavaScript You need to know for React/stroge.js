const stroge_work=()=>{
    const name= document.getElementById("name_value").value;
    const email= document.getElementById("email_value").value;

    const id = document.getElementById("id_value").value;


    // localStorage.setItem(name,email);

    const data={
        name,email
    }

    //when we set in the local storage the first one is key and the second item is value
    localStorage.setItem(id,JSON.stringify(data));

}

const storeitem =localStorage.getItem("52");
console.log(JSON.parse(storeitem));



const local_storage_clear=()=>{
    localStorage.clear();
}