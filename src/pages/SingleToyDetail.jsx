import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { authContext } from '../providers/AuthProvider';

const SingleToyDetail = () => {
    const toyInfo = useLoaderData();
    const {_id, name, quantity, supplier, email, price, rating, category, details, photo } = toyInfo;
    console.log(_id)

    // Spinner ----------------------------------------------------------
    const {loading} = useContext(authContext);
    if(loading){
        return <div className='text-center mt-5 pt-5'>
            <progress className="progress w-56"></progress>
        </div>
    }

    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <img src={photo} className="w-5/12 p-4 rounded-lg shadow-2xl" />
                    <div className='bg-white p-12'>
                        <h1 className="text-5xl font-bold pb-6">{name}</h1>
                        <h1 className="text-xl">Quantity: {quantity}</h1>
                        <h1 className="text-xl ">Supplier Name: {supplier}</h1>
                        <h1 className="text-xl ">Supplier Email: {email}</h1>
                        <h1 className="text-xl">Price: {price}</h1>
                        <h1 className="text-xl ">Rating: {rating}</h1>
                        <h1 className="text-xl pb-4">Category: {category}</h1>
                        <h1 className="text-xl ">Product Details: {details}</h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleToyDetail;