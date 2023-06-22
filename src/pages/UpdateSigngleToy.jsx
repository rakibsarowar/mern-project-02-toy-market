import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Data Updated');

const UpdateSingleToy = () => {

    const toy = useLoaderData();
    const {_id} = toy;

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const email = form.email.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const UpdatedToy = { name, quantity, supplier, email, price, rating, category, details, photo }

        console.log(UpdatedToy);

        // send data to the server
        fetch(`https://y-ecru-tau.vercel.app/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                        'data is updated'
                }
            })
    }


    return (
        <div className='flex justify-center'>
            <h2>Update Toy</h2>

            <div className='w-2/3 p-8'>
                <form onSubmit={handleUpdateToy}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Toy Name" defaultValue={toy?.name} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={toy?.quantity} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" placeholder="Supplier Name" defaultValue={toy?.supplier} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Supplier Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="Your Email" defaultValue={toy?.email} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category" defaultValue={toy?.category} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" defaultValue={toy?.details} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="rating" defaultValue={toy?.rating} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Photo and Price row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="photo" defaultValue={toy?.photo} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="price" defaultValue={toy?.price} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className='text-center'>
                    <input onClick={notify} type="submit" value="Update Toy" className="btn btn-primary" />
                    <Toaster
                    position="top-right"
                    reverseOrder={false}
                    />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateSingleToy;