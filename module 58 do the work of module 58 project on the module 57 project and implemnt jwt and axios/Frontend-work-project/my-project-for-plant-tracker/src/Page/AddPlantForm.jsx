import axios from 'axios';
import React from 'react';

const AddPlantForm = () => {







    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const plantData = Object.fromEntries(formData.entries())
        console.log("Plant Data Submitted:", plantData);
        // Add your axios/fetch POST request here to save to MongoDB
         
        // fetch('http://localhost:3000/plantinfo',{
        //     method:'POST',
        //     headers:{
        //         'content-type':"application/json"
        //     },
        //     body:JSON.stringify(plantData)
        // })
        // .then(res=>res.json())
        // .then(data=>console.log(data))

        axios.post('http://localhost:3000/plantinfo',plantData,{
            withCredentials:true
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    
    };


    return (
        <div data-theme="plant-light" className="min-h-screen text-emerald-900  py-10 px-4">
            <div className="max-w-3xl mx-auto card bg-white text-emerald-900 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-6 text-primary">Add New Plant</h2>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Plant Name */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Plant Name</span></label>
                            <input
                                type="text" name="plantName" required
                                placeholder="e.g. Monsterra Deliciosa"
                                className="input input-bordered focus:input-primary"

                            />
                        </div>

                        {/* Image URL */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Image URL</span></label>
                            <input
                                type="url" name="image"
                                placeholder="https://image-link.com"
                                className="input input-bordered focus:input-primary"

                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Category</span></label>
                            <select
                                name="category" required
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
                                name="careLevel" required
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
                                type="text" name="wateringFrequency"
                                placeholder="e.g. every 3 days"
                                className="input input-bordered"

                            />
                        </div>

                        {/* Health Status */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Health Status</span></label>
                            <input
                                type="text" name="healthStatus"
                                placeholder="Healthy / Needs Attention"
                                className="input input-bordered"

                            />
                        </div>

                        {/* Last Watered Date */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Last Watered Date</span></label>
                            <input
                                type="date" name="lastWatered"
                                className="input input-bordered"

                            />
                        </div>

                        {/* Next Watering Date */}
                        <div className="form-control">
                            <label className="label"><span className="label-text">Next Watering Date</span></label>
                            <input
                                type="date" name="nextWatering"
                                className="input input-bordered"

                            />
                        </div>

                        {/* Description - Full Width */}
                        <div className="form-control md:col-span-2">
                            <label className="label"><span className="label-text">Description</span></label>
                            <textarea
                                name="description"
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
                            <input type="text" name='email' className="input input-bordered bg-base-200 " />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control md:col-span-2 mt-6">
                            <button type="submit" className="btn btn-primary btn-block">Add Plant to Collection</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPlantForm;