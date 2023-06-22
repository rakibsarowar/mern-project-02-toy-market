import React, { useContext, useState } from 'react';
import { authContext } from './providers/AuthProvider';
import { signOut } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from './pages/Header';

const Login = () => {
    const { signIn, user, signInWithGoogle } = useContext(authContext);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    // sign in by email & password ------------------------------------------------------------
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                setError("");
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }

    // sign by google ------------------------------------------------------------
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                setError("");
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
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className='text-center font-bold'>{error}</p>
                        {
                            user && 
                            <p className='text-center font-bold my-4'>Yahoo! you are logged in! </p> 
                        }
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>

                        </div>
                        <div className='text-center'>
                            Or,
                        </div>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary m-4">Google</button>
                        <div className="text-center">
                            <h1 className="p-4">New member? <Link className='font-bold underline' to="/register">Register</Link> here</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;