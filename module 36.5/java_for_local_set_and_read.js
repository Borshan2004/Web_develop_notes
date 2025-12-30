// const mynew_age = 10;

// localStorage.setItem("mynew_age",mynew_age);

storage_work_function=()=>{

    const person={
        name:"borhan purification",
        age: 22,
        color:"brown"
    }

    const convert_into_string = JSON.stringify(person);
    localStorage.setItem("new_val",convert_into_string);

}

const local_value=localStorage.getItem("new_val");

const convert_to_obj=JSON.parse(local_value);

console.log(local_value);
console.log(convert_to_obj);