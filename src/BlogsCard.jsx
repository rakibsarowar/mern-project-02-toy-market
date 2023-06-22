import React from 'react';
import img1 from '../src/assets/blog1.jpeg'
import img2 from '../src/assets/blog2.jpeg'

const BlogsCard = () => {
    return (
        <div className='flex flex-col  md:flex-row justify-center gap-4'>
            <div className="card w-80 mx-auto bg-base-100 hover:shadow-xl md:mx-0">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Best LEGO® NINJAGO® Sets</h2>
                    <p>This ultimate fighting machine includes a mech, car, tank, and jet that can be played with separately, or combined to form one powerful mech. The set also comes with 7 minifigures, including Kai, Jay, Zane, and Cole, as well as new enemies Cobra Mechanic and Boa Destructor, and Wu Bot . . . .</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-primary">Read More</button>
                    </div>
                </div>
            </div>

            <div className="card w-80 mx-auto bg-base-100 hover:shadow-xl md:mx-0">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How to teach kids about the natural world</h2>
                    <p>You’re never too early to learn about the importance of protecting the natural world and maintaining ecological balance through choices in our daily lives.

                        These choices can relate to everything from our clothes, to our possessions and especially our food.. . . </p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-primary">Read more</button>
                    </div>
                </div>
            </div>

            <div className="card w-80 mx-auto bg-base-100 hover:shadow-xl md:mx-0">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How to teach kids about the natural world</h2>
                    <p>You’re never too early to learn about the importance of protecting the natural world and maintaining ecological balance through choices in our daily lives.

                        These choices can relate to everything from our clothes, to our possessions and especially our food.. . . </p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-primary">Read more</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogsCard;