import React from 'react';
import Swal from 'sweetalert2';

const Addcoffe = () => {

    const handleonsumbit = (e) => {
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);

        const coffedata = Object.fromEntries(formData.entries())
        console.log(coffedata)

        fetch("http://localhost:3000/coffes", {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(coffedata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            })


    }

    return (
        <div>

            <div className='flex flex-col gap-6 justify-center items-center'>

                <div className='text-center'>
                    <h1>Update Existing Coffee Details</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <div>
                    <form onSubmit={handleonsumbit} className='grid grid-cols-2 gap-9'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="My awesome page" />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                            <label className="label">Chef</label>
                            <input type="text" name="chef" className="input" placeholder="My awesome page" />
                        </fieldset>


                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                            <label className="label">Supplier</label>
                            <input type="text" name="supplier" className="input" placeholder="My awesome page" />
                        </fieldset>


                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                            <label className="label">Taste</label>
                            <input type="text" name="taste" className="input" placeholder="My awesome page" />
                        </fieldset>


                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                            <label className="label">Price</label>
                            <input type="text" name="price" className="input" placeholder="My awesome page" />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                            <label className="label">Details</label>
                            <input type="text" name="details" className="input" placeholder="My awesome page" />
                        </fieldset>


                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 col-span-2">
                            <label className="label ">Url</label>
                            <input type="text" name="url" className="input w-full" placeholder="My awesome page" />
                        </fieldset>
                        <button className='btn col-span-2' >Submit</button>
                    </form>


                </div>


            </div>


        </div>
    );
};

export default Addcoffe;