import React, { useState } from 'react';

const ProductForm = ({producthandler}) => {

    const [error,setError] = useState('');

    const handlersubmit = (e)=>{

           e.preventDefault()

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        

        const newProduct = {
            name,
            price,
            quantity
        }

        if(name.length===0){
            setError("The written name is not string");
            return;
        }
        else if(price.length===0){
            setError("please enter the price")
            return;
        }
        else if(price<0){
            setError("the price is negative");
            return;
        }
        else if(quantity.length===0){
            setError("please enter the quantity");
            return
        }
        else{
            setError('');
        }



        producthandler(newProduct);
        
    }

    return (
        <div>

            <form onSubmit={handlersubmit} >

                <input type="text" name='name' placeholder='Enter your  name'/>
                <input type="text" name='price' placeholder='Enter your  price'/>
                <input type="text" name='quantity' placeholder='Enter your quantity'/>
                <input type="submit" />
                

            </form>
            <p><small>{error}</small></p>
            
        </div>
    );
};

export default ProductForm;