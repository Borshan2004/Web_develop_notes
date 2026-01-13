
const getData_from_the_local_storage=()=>{
    const stored_string_data = localStorage.getItem('cart');

    if(stored_string_data){
        const converted_data=JSON.parse(stored_string_data);
        return converted_data;
    }
    return [];
}

const add_new_data_for_the_local_storage=id=>{

    const newdatacontainer = getData_from_the_local_storage();
    newdatacontainer.push(id);

    show_data_in_the_local_stroge(newdatacontainer);
}

const show_data_in_the_local_stroge=newdatacontainer=>{

    const convert_into_string=JSON.stringify(newdatacontainer);
    localStorage.setItem('cart',convert_into_string);


}

export{
    show_data_in_the_local_stroge,
    add_new_data_for_the_local_storage
}