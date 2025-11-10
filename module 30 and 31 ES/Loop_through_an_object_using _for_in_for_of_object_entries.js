const person={
    name:"borshan",
    roll:25,
    age:36
}

// for(let keys in person){
//     console.log(`Key: ${keys}: Value:${person[keys]}`);
// }

for(let[key,value] of Object.entries(person)){
    console.log(`Key: ${key} Value: ${value}`);
}