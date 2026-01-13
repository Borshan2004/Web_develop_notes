import React from 'react';
import './Bottle2.css'

const Bottle2 = ({api_bottle_api,handle_click_on_button_pops}) => {
    const {img,name}=api_bottle_api;
    return (
        <div className='card'>
           <img className='size_pic' src={img} alt={name} /> 
          <button onClick={()=>handle_click_on_button_pops(api_bottle_api)}>Click</button>
        </div>
    );
};

export default Bottle2;