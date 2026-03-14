import React, { useState } from 'react';

const Useritem = ({ useritemuse }) => {

    const initialdata = useritemuse;
    const[userdata,setUserdata] = useState(initialdata)

    console.log(useritemuse);

    const handle = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email)
        const user = { name, email }


        fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after the post', data)
                const newaddeddata= [...userdata,data];
                setUserdata(newaddeddata);
            })

    }

    return (
        <div>

            <form onSubmit={handle}>
                <input type='text' name='name'></input>
                <input type='email' name='email'></input>
                <button>Sumbit</button>

            </form>


            <div>
                {
                    userdata.map(data => (
                        <p key={data.id}>{data.id} : {data.name} : {data.email}</p>

                    ))
                }
            </div>
        </div>
    );
};

export default Useritem;