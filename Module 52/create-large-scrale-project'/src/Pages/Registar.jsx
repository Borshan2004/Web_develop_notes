import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Authmanagement/AuthContext';
const Registar = () => {

    const { EmailPassAuRegistar, updateprofile, setuseri } = useContext(AuthContext);

    const handle_click_registar = (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const photourl = event.target.photourl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        EmailPassAuRegistar(email, password)
            .then(res => {
                console.log(res);
                const user = res.user;

                updateprofile({ displayName: name, photoURL: photourl })
                    .then(resp => {
                        setuseri({ ...user, displayName: name, photoURL: photourl })

                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div>
            <form onSubmit={handle_click_registar} className="fieldset bg-base-100 border-base-300 rounded-box w-180 h-170 border p-32 ">

                <h1 className='text-4xl text-center font-bold'>Register your account</h1>
                <hr className="border-t border-base-300 my-8" />

                <label className="label text-[20px]">Name</label>
                <input name="name" type="text" className="input w-full bg-base-300" placeholder="Name" />

                <label className="label text-[20px]">Photo Url</label>
                <input name="photourl" type="text" className="input w-full bg-base-300" placeholder="Email" />


                <label className="label text-[20px]">Email</label>
                <input name="email" type="email" className="input w-full bg-base-300" placeholder="Email" />

                <label className="label text-[20px]">Password</label>
                <input name="password" type="password" className="input w-full bg-base-300" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Register</button>
                <p className='text-center mt-3'>
                    Have An Account ? <Link to='/auth/login' className='text-secondary'> Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Registar;