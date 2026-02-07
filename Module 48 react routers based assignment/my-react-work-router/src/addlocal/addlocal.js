const getexitstingdata =()=>{

    const dataremaining = localStorage.getItem("formdata");
 
    if(dataremaining){
        return JSON.parse(dataremaining);
    }
    else{
        return [];
    }

}

const addtodata =(id)=>{

    const existingdata = getexitstingdata();    

    if(existingdata.includes(id) ){
        alert("Data already exists");
    }
    else{
        existingdata.push(id);
        const addnewdata = JSON.stringify(existingdata);
        localStorage.setItem("formdata",addnewdata);
    }


}

const removedata =(id)=>{

    const existingdata = getexitstingdata();
    const filteredData = existingdata.filter(item => item !== id);
    const removeeddata = JSON.stringify(filteredData);
    localStorage.setItem("formdata",removeeddata);

}

export {addtodata,getexitstingdata,removedata};