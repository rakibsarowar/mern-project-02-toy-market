import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
    const { user, logOut } = useContext(authContext);
    console.log(user?.photoURL)

    const location = useLocation();
    const [pageTitle, setPageTitle] = useState('Logo World');
    console.log(pageTitle)

    useEffect(() => {
        const route = location.pathname;
        let newPageTitle = 'Logo World'; // Default page title
      
        if (route === '/login') {
          newPageTitle = 'Logo World | Login';
        } else if (route === '/register') {
          newPageTitle = 'Logo World | Register';
        } else if (route === '/products') {
          newPageTitle = 'Logo World | Our Products';
        } else if (route === '/blogs') {
          newPageTitle = 'Logo World | Blogs';
        } else if (route === '/addToy') {
          newPageTitle = 'Logo World | Add Toy';
        } else if (route === '/myToys') {
          newPageTitle = 'Logo World | My Toy';
        } else if (route === '/allToys') {
          newPageTitle = 'Logo World | All Toys';
        } else if (route === '/single-toy/:_id') {
          newPageTitle = 'Logo World | Toy Detail';
        }
      
        setPageTitle(newPageTitle); // Update the state with the new page title
        document.title = newPageTitle; // Update the document title
      }, [location]);



    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar flex flex-col md:flex-row  bg-base-100 font-bold text-gay-400 md:px-10">
                <div className="navbar-start justify-center md:justify-start w-full md:w-2/4">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/allToys">All Toys</NavLink>
                            {
                                user &&
                                <NavLink to="/myToys">My Toys</NavLink>
                            }
                            {
                                user &&
                                <NavLink to="/addToy">Add a Toy</NavLink>
                            }

                            <NavLink to="/blogs">Blogs</NavLink>
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                    <a className="btn btn-ghost font-black normal-case text-xl">{pageTitle}</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/allToys">All Toys</NavLink>
                        {
                            user &&
                            <NavLink to="/myToys">My Toys</NavLink>
                        }
                        {
                            user &&
                            <NavLink to="/addToy">Add a Toy</NavLink>
                        }

                        <NavLink to="/blogs">Blogs</NavLink>
                    </ul>
                </div>
                <div className="navbar-end flex flex-row">
                    <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                        {
                            user &&
                            <img className='rounded-full pe-2'
                                style={{ width: "50px", height: "50px" }}
                                src={user?.photoURL} alt="" />
                        }
                    </div>

                    {
                        user ?
                            <button onClick={handleLogOut} className="btn">Logout</button> :
                            <div className='grid grid-cols-2 divide-x'>
                                <Link to='/register'>
                                    <button className="btn btn-link">Register</button>
                                </Link>
                                <Link to='/login'>
                                    <button className="btn btn-link">Login</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;