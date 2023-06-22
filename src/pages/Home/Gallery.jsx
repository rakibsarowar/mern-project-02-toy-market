import React from 'react';
import img1 from '../../assets/product-1.png'
import img2 from '../../assets/product-2.png'
import img3 from '../../assets/product-3.png'
import img4 from '../../assets/product-4.png'
import img5 from '../../assets/product-5.png'
import img6 from '../../assets/product-6.png'
import img7 from '../../assets/product-7.png'
import img8 from '../../assets/product-8.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Gallery = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero">
                <div data-aos="fade-up" data-aos-duration="1000" className="hero-content flex-col md:flex-row md:flex-wrap ">
                    <img className='max-w-sm rounded-lg shadow-2xl w-5/6 md:w-4/6 p-4' src={img1} alt="" />
                    <img className='max-w-sm rounded-lg shadow-2xl w-5/6 md:w-4/6 p-4' src={img2} alt="" />
                    <img className='max-w-sm rounded-lg shadow-2xl w-5/6 md:w-4/6 p-4' src={img3} alt="" />
                    <img className='max-w-sm rounded-lg shadow-2xl w-5/6 md:w-4/6 p-4' src={img4} alt="" />
                    <img className='max-w-sm rounded-lg shadow-2xl w-5/6 md:w-4/6 p-4' src={img5} alt="" />
                    <img className='max-w-sm rounded-lg shadow-2xl w-5/6 md:w-4/6 p-4' src={img6} alt="" />
                    <img className='max-w-sm rounded-lg shadow-2xl w-5/6 md:w-4/6 p-4' src={img7} alt="" />
                    <img className='max-w-sm rounded-lg shadow-2xl w-5/6 md:w-4/6 p-4' src={img8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;