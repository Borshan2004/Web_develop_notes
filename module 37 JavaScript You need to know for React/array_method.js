const products = [
  { name: "redmi", brand: "xiaomi", price: 3000, color: "black" },
  { name: "sam", brand: "samsung", price: 5000, color: "white" },
  { name: "apple1", brand: "apple", price: 5000, color: "gold" },
  { name: "apple2", brand: "apple", price: 5000, color: "gold" },
  { name: "redmi2", brand: "xiaomi", price: 2000, color: "black" },
];


// const result = products.map(product=>{

//     console.log(product.price);
    

// });

//use of the map->by using this we can make all the called or specific items in a new array
//->use when you want to transform each item into something new and make a array of that item
const result= products.map(product=>product.price)

console.log(result);


//use of the forEach ->use when you want to do something with each item
products.forEach(product=>console.log(product));


//filter ->use when you want to select items that match a condition and make a array of that condition item

const res3 = products.filter(product=>product.brand==="apple");
console.log(res3);



//use of the find
const res4 = products.find(product=>product.name==="apple1")
console.log(res4);