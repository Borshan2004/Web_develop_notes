const person={
    name:"hero alom",
    age:40,
    friends:["bd","Cn","rahim"],
    family:{
        fathername:"kolim uddin",
        mothername: "jorina"
    }
}

//to convert the obj to string 

const objTOstring = JSON.stringify(person);

console.log(objTOstring);


// to convert the string to obj

const stringTOobj = JSON.parse(objTOstring);

console.log(stringTOobj);


const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);


const products = [
  { name: "redmi", brand: "xiaomi", price: 3000, color: "black" },
  { name: "sam", brand: "samsung", price: 5000, color: "white" },
  { name: "apple1", brand: "apple", price: 5000, color: "gold" },
  { name: "apple2", brand: "apple", price: 5000, color: "gold" },
  { name: "redmi2", brand: "xiaomi", price: 2000, color: "black" },
];


const new_data={

    name:"walton" ,
    brand:"walton",
    price:1290,
    color:"black",
}


const remaining_product = products.filter(product=>product.brand!="apple");
console.log(remaining_product);

const new_array=[...products,new_data,remaining_product];
console.log(new_array);