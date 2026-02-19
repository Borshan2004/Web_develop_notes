import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div className='text-center flex flex-col justify-center items-center my-7 gap-4'>
            <img src='/src/assets/logo.png' alt="logo" />

            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(),"EEEE, MMMM MM,yyyy")}</p>
        </div>
    );
};

export default Header;
