import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success("let's edit !");

const MyToys = () => {
    const { user } = useContext(authContext);
    const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending
    const [sortedToys, setSortedToys] = useState([]);
    const [toys, setToys] = useState([]);
    const { loading } = useContext(authContext);


    if (loading) {
        return <div className='text-center mt-5 pt-5'>
            <progress className="progress w-56"></progress>
        </div>
    }


    // useEffect(() => {
    //     fetch(`https://y-ecru-tau.vercel.app/toys/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setToys(data)
    //         })
    // }, [user])
    useEffect(() => {
        const fetchToys = async () => {
            const response = await fetch(`https://y-ecru-tau.vercel.app/toys/${user?.email}?sort=${sortOrder}`);
            const data = await response.json();
            setSortedToys(data);
        };

        fetchToys();
    }, [user, sortOrder]);


    const handleDelete = (_id) => {
        fetch(`https://y-ecru-tau.vercel.app/toys/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    'Deleted the Id'
                }
            });

        notify_1();
    }


    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl my-8 font-bold uppercase text-center'>My Toys</h2>
            <div className='text-center'>
                <button className='btn btn-secondary' onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                    {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'};
                </button>
            </div>


            <div className="overflow-x-auto my-12 px-4">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Sub-category</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            sortedToys?.map((toy, index) => (
                            
                                <tr key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>{toy.name}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.quantity}</td>
                                    <td>
                                        <Link to={`/updateSingleToy/${toy?._id}`}>
                                            <button onClick={notify} className="btn btn-warning">Edit</button>
                                        </Link>
                                        <Toaster />
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(toy?._id)} className="btn btn-warning">Delete</button>

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

export default MyToys;