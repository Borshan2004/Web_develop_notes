
const person={
    name:"borshan",
    roll:12408033,
    age:25,
    more_details:{
        address:"k-30 joar shahara Dhaka",
        Father_information:{
            name:"pintu",
            age:46,
        },
        Mother_information:{
            name:"emelia",
            age:40,
        }
    }
}

//to avoid the error we use the terneray operator 
//if the volue is true than the given work else it shows undefined insetead of showing error

console.log(person.more_details.Father_information.mother?.age);
console.log(person["more_details"]["Father_information"]["name"]);