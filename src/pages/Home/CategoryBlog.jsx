import React from 'react';
import img1 from '../../assets/product-1.png'
import img2 from '../../assets/product-2.png'


const CategoryBlog = () => {
    return (
        <div className='flex flex-col md:flex-row md:px-20 gap-x-4'>

            <div className="hero bg-white mb-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-full'>
                        <h1 className="text-2xl text-center font-bold">Lego Dujar City</h1>
                        <p className="text-center py-6"> - LEGO® interpretation of the New York City skyline. <br /> <br />
                            - Features the Flatiron Building, Chrysler Building™, Empire State Building, One World Trade Center and the Statue of Liberty.</p>
                        <div className='text-center'>
                            <button className="btn btn-outline btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-white mb-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img2} className="md:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold text-center">Lego Friends City</h1>
                        <p className="py-6 text-center"> - LEGO® interpretation of the New York City skyline. <br /> <br />
                            - Features the Flatiron Building, Chrysler Building™, Empire State Building, One World Trade Center and the Statue of Liberty.</p>
                        <div className='text-center'>
                            <button className="btn btn-outline btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryBlog;