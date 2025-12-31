const work_of_the_click_on_button=()=>{

    const Product_name = document.getElementById("pName");
    const Product_quantity = document.getElementById("pQuantity");

    const name = Product_name.value;
    const quantity = Product_quantity.value;

    add_this_on_the_local_storage(name,quantity);
    display_work(name,quantity);
    Product_name.value = "";
    Product_quantity.value= "";

}

const display_work=(name,quantity)=>{

    const container = document.getElementById("unorder_list_id");

    const li = document.createElement("li");
    li.innerHTML=`
    ${name}:${quantity}
    `

    container.appendChild(li);

}


const getproductfromlocalstorage=()=>{

    let cart={};
    const getcartproduct=localStorage.getItem("cart");

    if(getcartproduct){
        cart=JSON.parse(getcartproduct);
    }
    return cart;
}

const add_this_on_the_local_storage=(name,quantity)=>{


    const cart = getproductfromlocalstorage();

    cart[name]=quantity;

    // const product={name: quantity};
    localStorage.setItem("cart",JSON.stringify(cart));

}

