import React from 'react';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa'; // Optional: Use react-icons for the buttons
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ data, coffestate, setcoffestate }) => {

    const { _id, name, chef, price, url } = data;


    const handle_on_delete = (id) => {

        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffes/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                        const remaining = coffestate.filter(data => data._id !== _id)
                        setcoffestate(remaining)

                    })


            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl border border-gray-100 max-w-2xl p-6 flex items-center gap-8">
            {/* Product Image */}
            <figure className="w-1/3">
                <img
                    src={url} // Replace with your actual image path
                    alt="Americano Coffee"
                    className="object-contain h-48"
                />
            </figure>

            {/* Card Body */}
            <div className="flex flex-1 justify-between items-center">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-700">
                        <span className="font-bold">Name: </span>
                        <span className="font-normal text-gray-500">{name}</span>
                    </h2>
                    <p className="text-xl font-semibold text-gray-700">
                        <span className="font-bold">Chef: </span>
                        <span className="font-normal text-gray-500">{chef}</span>
                    </p>
                    <p className="text-xl font-semibold text-gray-700">
                        <span className="font-bold">Price: </span>
                        <span className="font-normal text-gray-500">{price}</span>
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                    <Link to={`/coffes/${_id}`}>
                        <button className="btn btn-square bg-[#D2B48C] hover:bg-[#bda17a] border-none text-white">
                            <FaEye size={18} />
                        </button>
                    </Link>



                    <Link to={`/updatecoffe/${_id}`}>
                        <button className="btn btn-square bg-[#3C3939] hover:bg-[#2a2828] border-none text-white">
                            <FaPencilAlt size={18} />
                        </button>
                    </Link>


                    <button onClick={() => handle_on_delete(_id)} className="btn btn-square bg-[#EA4744] hover:bg-[#c93a38] border-none text-white">
                        <FaTrash size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;