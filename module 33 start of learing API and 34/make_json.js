const person={
    name:"Borshan",
    age:20,
    is_present:true,
    friends:["borno","rakib","karim"],

}

const convert_person_obj_to_json = JSON.stringify(person);

console.log(convert_person_obj_to_json);

const convert_person_json_to_obj = JSON.parse(convert_person_obj_to_json);

console.log(convert_person_json_to_obj);