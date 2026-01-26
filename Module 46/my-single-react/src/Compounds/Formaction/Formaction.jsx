import React from 'react';

const Formaction = () => {

    //use from action and also use the formData in the hanleaction
    const handleaction = (formData) => {

        console.log(formData.get('name'));
        console.log(formData.get('email'));


    }

    return (

        <div>

            <form action={handleaction}>
                <input type="text" name='name' placeholder='enter your name' />
                <br />
                <input type="email" name='email' placeholder='enter your email' />
                <button type='submit'> Submit </button>

            </form>

        </div>
    );
}


export default Formaction;