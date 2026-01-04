const products =[
    {id:1, name:"Iphone",color:"Black",price:1200,brand:"Apple"},
    {id:1, name:"S8",color:"White",price:5200,brand:"Sumgsung"},
    {id:1, name:"Gold4",color:"Red",price:14540,brand:"Vivo"},
    {id:1, name:"Terbo4",color:"Blue",price:5620,brand:"Redmi"},
    {id:1, name:"Node 5CE",color:"Gray",price:1200,brand:"Oneplus"},
]

//foreach is used to run a loop in the array but is does not return anything 

// products.forEach(product=>{
//     if(product.price===1200){
//         console.log(product);
//     }
// })


//filter work run a loop and work like  a condition if the condition match then it work and return array else it return a empty array

// const check=products.filter(product=>{
//     return product.price>4000;
// })

// console.log(check);

//find also work like filter-> means it run loop and give condition but it returns only one thing that aks in the condition not return a array or element like the filter

const check2=products.find(product=>{
    return product.price===5200;
})

console.log(check2);
