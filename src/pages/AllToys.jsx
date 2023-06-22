import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch(`https://y-ecru-tau.vercel.app/toys/?limit=20`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setToys(result)
            });

    }, []);


    const handleSearch = () => {
        fetch(`https://y-ecru-tau.vercel.app/getToysByText/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    return (
        <div className='container mx-auto'>
            <h3 className='text-3xl my-8 font-bold uppercase text-center'>All Toys</h3>
            <div className='flex justify-center my-8'>
                <div className="form-control">
                    <div className="input-group">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered border-yellow-500" />
                        <button onClick={handleSearch} className="btn btn-square border-yellow-500 bg-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto my-12 px-4">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            toys?.map((toy, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{toy.supplier}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td>
                                        <Link to={`/single-toy/${toy?._id}`}>
                                            <button className='btn btn-warning'> View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default AllToys;