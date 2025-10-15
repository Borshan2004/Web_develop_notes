const products = [
    {name:'shampo',price:300,quantity:2},
    {name:'cheruni',price:100,quantity:3},
    {name:'shirt',price:700,quantity:5},
    {name:'pant',price:1200,quantity:1},
]

function calcutate_total(products){

    let total=0;
    for(const product of products){

        let total_quantity_product = product.price*product.quantity;
        total=total+total_quantity_product;

    }
    return total;

}


const total_cal = calcutate_total(products);
console.log(total_cal);