import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const AddToy = () => {
    const {loading} = useContext(authContext);

    if(loading){
        return <div className='text-center mt-5 pt-5'>
            <progress className="progress w-56"></progress>
        </div>
    }
    

const notify = () => toast.success('Toy Added!');


    const handleAddToy = event => {
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

        const newToy = { name, quantity, supplier, email,price, rating, category, details, photo }
        console.log(newToy);

        // send data to the server
        fetch('https://y-ecru-tau.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>
            <div className="container mx-auto">
                <div className='text-center'>
                <h2 className="text-3xl my-8 font-bold uppercase">Add a Toy</h2>
                </div>

                <form onSubmit={handleAddToy} className='px-12'>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Supplier Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div>
                    <input onClick={notify} type="submit" value="Add Toy" className="btn btn-block my-8" />
                    <Toaster 
                    position="top-right"
                    reverseOrder={false}
                    />
                    </div>

                </form>
                
            </div>

        </>
    );
};

export default AddToy;