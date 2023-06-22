import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FilterData2 = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://y-ecru-tau.vercel.app/toys')
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, []);

    // Define the desired sub-category
    const desiredSubCategory = 'lego-star-wars';

    // Filter toys based on the sub-category
    const filteredToys = toys.filter((toy) => toy.category === desiredSubCategory);

    return (
        <>
            <div className='flex flex-col md:flex-row gap-4'>
                {filteredToys.map((toy) => (
                    <div>

                        <div key={toy._id} className="card w-80 md:w-96 mt-4 bg-base-100 shadow-xl">
                            <figure><img className='p-4 mt-4' src={toy.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-violet-600">{toy.name}</h2>
                                <p>Price: ${toy.price}</p>
                                <p>Rating: {toy.rating}</p>
                                <div className='text-center md:text-left'>
                                    <Link to={`/single-toy/${toy?._id}`}>
                                        <button className='btn btn-outline btn-primary'>View Details</button>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
};

export default FilterData2;