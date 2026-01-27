import React, { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductTable from '../ProductTable/ProductTable';

const ProductManagement = () => {
    
    const [productadd,setProductadd] =useState([])

    const producthandler = (newProduct) =>{
 
        const container = [...productadd,newProduct];
        setProductadd(container);

    }

    return (

        <div>
            <ProductForm producthandler={producthandler}></ProductForm>
            <ProductTable productadd={productadd}></ProductTable>
        </div>
    );
};

export default ProductManagement;