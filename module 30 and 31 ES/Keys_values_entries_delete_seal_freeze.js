const person={
    name:"borshan",
    roll:20,
    section:12
}
//if we use the seal we can not able to add a  new item in the person 
Object.seal(person);
person.status="hello this is borshan";
//in using the seal time we can chage the previous value of the obj
person.roll=50;

//to not do anything we can use 
Object.freeze(person);
person.roll=100;//becasue of using the freeze we can not change the value of the roll 


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));