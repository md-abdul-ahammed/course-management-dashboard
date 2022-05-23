import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';

const Social = () => {
    return (
        <div className='flex justify-center items-center mt-12'>
            <Link to="/">
                <FaFacebookF className='text-white mx-2 text-2xl'/>
            </Link>
            <Link to="/">
                <AiOutlineInstagram className='text-white mx-2  text-2xl' />
            </Link>
            <Link to="/">
                <AiFillYoutube className='text-white mx-2  text-2xl' />
            </Link>
            <Link to="/">
                <FaLinkedinIn className='text-white mx-2 text-2xl'/>
            </Link>
        </div>
    )
}

export default Social