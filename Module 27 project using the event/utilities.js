function getInputValueById(id){

    const value=document.getElementById(id).value;
    const value_converted_number = parseFloat(value);

    return value_converted_number;

}

function getInputValueByTextInnerId(id){

    const value = document.getElementById(id).innerText;
    const value_converted_number = parseFloat(value);

    return value_converted_number;

}

function setInnerTextByIddandvalue(id,value){

    document.getElementById(id).innerText=value;


}