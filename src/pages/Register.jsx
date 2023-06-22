import React, { useContext, useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
    const [error, setError] = useState("")
    const { createUser } = useContext(authContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(form, name, photo, email, password)

        createUser(email, password, name, photo )
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setError("");
                form.reset();
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }




    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">New Member? Register Now!</h1>
                        <p className='text-center font-bold'>{error}</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-6">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>


                        </div>

                        <div className='text-center'>
                            Or,
                        </div>

                        <div className="text-center">
                            <h1 className="p-4">Already have an account? <Link className='font-bold underline' to="/login">Login</Link> Now</h1>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;