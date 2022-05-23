import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/nodata.png'
const NoData = ({text}) => {
    return (
        <div className='mb-16'>
            <img src={image} className='mx-auto' alt="" />

            <div className='text-center mb-5'>
                <p className='text-3xl font-semibold my-5'> {text}</p>
                <Link className='px-4 py-2 bg-violet text-white text-xl rounded' to='/courses_institutes'>Start Browsing</Link>
            </div>
        </div>
    );
};

export default NoData;