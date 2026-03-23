import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Compound/Navbar';
import Footer from '../Compound/Footer';

const Updateform = () => {
    const loaddata = useLoaderData()
    console.log(loaddata)

    const handleonsumbit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData  = new FormData(form);

        const dataofform = Object.fromEntries(formData.entries());
        console.log(dataofform)

        fetch(`http://localhost:3000/plantinfo/${loaddata._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(dataofform)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }

    return (
        <div>
            <Navbar></Navbar>
            <div data-theme="plant-light" className="min-h-screen bg-base-100 py-10 px-4 text-emerald-900">
            <div className="max-w-3xl mx-auto card bg-white shadow-xl text-emerald-900">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-6 text-primary">Update Plant</h2>

                    <form onSubmit={handleonsumbit}  className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Plant Name */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Plant Name</span></label>
                            <input
                                type="text" name="plantName" defaultValue={loaddata.plantName} required
                                placeholder="e.g. Monsterra Deliciosa"
                                className="input input-bordered focus:input-primary"

                            />
                        </div>

                        {/* Image URL */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Image URL</span></label>
                            <input
                                type="url" name="image" defaultValue={loaddata.image}
                                placeholder="https://image-link.com"
                                className="input input-bordered focus:input-primary"

                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Category</span></label>
                            <select
                                name="category" defaultValue={loaddata.category} required
                                className="select select-bordered focus:select-primary"

                            >
                                <option value="" disabled selected>Select Category</option>
                                <option value="succulent">Succulent</option>
                                <option value="fern">Fern</option>
                                <option value="flowering">Flowering</option>
                                <option value="cactus">Cactus</option>
                                <option value="foliage">Foliage</option>
                            </select>
                        </div>

                        {/* Care Level Dropdown */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Care Level</span></label>
                            <select
                                name="careLevel" required defaultValue={loaddata.careLevel}
                                className="select select-bordered focus:select-primary"

                            >
                                <option value="" disabled selected>Select Level</option>
                                <option value="easy">Easy</option>
                                <option value="moderate">Moderate</option>
                                <option value="difficult">Difficult</option>
                            </select>
                        </div>

                        {/* Watering Frequency */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Watering Frequency</span></label>
                            <input
                                type="text" name="wateringFrequency" defaultValue={loaddata.wateringFrequency}
                                placeholder="e.g. every 3 days"
                                className="input input-bordered"

                            />
                        </div>

                        {/* Health Status */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Health Status</span></label>
                            <input
                                type="text" name="healthStatus" defaultValue={loaddata.healthStatus}
                                placeholder="Healthy / Needs Attention"
                                className="input input-bordered"

                            />
                        </div>

                        {/* Last Watered Date */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Last Watered Date</span></label>
                            <input
                                type="date" name="lastWatered" defaultValue={loaddata.lastWatered}
                                className="input input-bordered"

                            />
                        </div>

                        {/* Next Watering Date */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Next Watering Date</span></label>
                            <input
                                type="date" name="nextWatering" defaultValue={loaddata.nextWatering}
                                className="input input-bordered"

                            />
                        </div>

                        {/* Description - Full Width */}
                        <div className="form-control md:col-span-2">
                            <label className="label"><span className="label-text">Description</span></label>
                            <textarea 
                                name="description" defaultValue={loaddata.description}
                                className="textarea textarea-bordered h-24"
                                placeholder="Tell us more about your plant..."

                            ></textarea>
                        </div>


                        <div className="form-control">
                            <label className="label"><span className="label-text">Added By</span></label>
                            <input type="text" className="input input-bordered bg-base-200 " />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="text" name='email' defaultValue={loaddata.email} className="input input-bordered bg-base-200 " />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control md:col-span-2 mt-6">
                            <button type="submit" className="btn btn-primary btn-block">Add Plant to Collection</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
        
    );
};

export default Updateform;