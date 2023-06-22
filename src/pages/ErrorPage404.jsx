import React from 'react';
import { useRouteError } from 'react-router-dom';
import img from '../assets/404-page.png'

const ErrorPage404 = () => {
    const { error, status } = useRouteError()

    return (
        <>
            <div className='mt-12'>
                <div className='flex justify-center'>
                    <img className='img-fluid w-25' src={img} alt="" />
                </div>
                <h2 className='mt-12 text-center'>
                    <span className=''>Error</span> {status || 404}
                </h2>
                <p className='text-2xl font-bold text-center'>
                    {error?.message}
                </p>

            </div>

        </>
    );
};

export default ErrorPage404;