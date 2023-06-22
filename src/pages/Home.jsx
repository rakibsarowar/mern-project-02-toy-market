import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import ToysInfo from './ToysInfo';
import Gallery from './Home/Gallery';
import BlogsCard from '../BlogsCard';
import CategoryBlog from './Home/CategoryBlog';

const Home = () => {


    return (
        <div>
            <Hero></Hero>
            <div className='card md:py-6 '>
                <h2 className='text-4xl font-bold uppercase text-center text-neutral-800 py-8 underline'>Shop by category</h2>
                <ToysInfo></ToysInfo>
            </div>
            <div className='bg-base-200 md:pb-12'>
                <h2 className='text-4xl font-bold uppercase text-center text-neutral-800 py-16 underline'>Gallery</h2>
                <Gallery></Gallery>
            </div>
            <div className='md:pb-12'>
                <h2 className='text-4xl font-bold uppercase text-center text-neutral-800 py-16 underline'>Blog</h2>
                <BlogsCard></BlogsCard>
            </div>
            <div className='mx-auto bg-base-200 md:pb-12'>
                <h2 className='text-4xl font-bold uppercase text-center text-neutral-800 py-16 underline'>Popular Items</h2>
                <CategoryBlog></CategoryBlog>
            </div>
        </div>
    );
};

export default Home;