import React, { use, useState } from 'react';

const Users = ({ userpromise }) => {


    const datauser = use(userpromise)
    console.log(datauser)

    const [savedata, setSavedata] = useState(datauser)

    const handleonsumbit = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const users = { name, email }
        console.log(users)


        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    //this id giving is very imporant for both delete and add case
                    users._id = data.insertedId;
                    const data_store = [...savedata, users];
                    setSavedata(data_store);
                    e.target.reset();
                }
            })


    }

    const handledelete = (id) => {
        console.log("delete this item", id);

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {


                if (data.deletedCount) {
                    const afterdeleteitem = savedata.filter(data => data._id !== id);
                    setSavedata(afterdeleteitem)
                }
                console.log("deteted", data)
            })
    }

    return (
        <div>
            <form onSubmit={handleonsumbit}>
                <input type="text" name='name' placeholder='name' />
                <input type='email' name='email' placeholder='email'></input>
                <button>submit</button>
            </form>

            <div>
                {
                    savedata.map(d => (
                        <p key={d._id}>{d.name} : :{d.email}
                            <button onClick={() => handledelete(d._id)}>delete</button>
                        </p>


                    ))
                }

            </div>

        </div>
    );
};

export default Users;