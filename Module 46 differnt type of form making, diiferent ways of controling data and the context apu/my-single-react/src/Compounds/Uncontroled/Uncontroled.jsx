import React, { useRef } from 'react';

const Uncontroled = () => {

    const emailref = useRef('');
    const password = useRef('');


    const handleaction = (e) => {

        e.preventDefault();

        const email = emailref.current.value;
        console.log(email);

    }

    return (
        <div>
             <form onSubmit={handleaction}>
                <input type="email" name='' ref={emailref} placeholder='enter your email' required />
                <input type="pass" ref={password} required/>
                <button type='submit'> Submit </button>

            </form>
        </div>
    );
};

export default Uncontroled;