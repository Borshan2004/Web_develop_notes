//in normarl way 
const dena={
    name:"borshan",
    age:25,
    color:"black"
}

const dena_name = dena.name;
const dena_age =dena.age;
const dena_color =dena.color;

console.log(dena_name);
//or
console.log(dena.name);



//using the destructuring

const {name,age,color}=dena;
console.log(name);
console.log(age);
console.log(color);

//using this in the obj there is no need to use the previous way for printing the obj



//in normal array
const arr=["hasn","kamal",50];
console.log(arr[0]);
console.log(arr[1]);


//using the destructuring
const [name1,name2,num]=arr;
console.log(name1);
console.log(name2);
console.log(num);