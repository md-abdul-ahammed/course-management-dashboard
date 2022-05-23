import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo_title.svg';

const Navbar = () => {
    return (
        <div className='shadow z-40 flex justify-between items-center px-6 md:px-14 pt-6 pb-4 bg-white w-full'>
                <Link to="/"><img src={Logo} alt="logo" className='w-40'/></Link>
                <Link className='bg-violet px-8 py-1 font-dm-sans text-white rounded-lg' to="/login">Login</Link>
            </div>
    )
}

export default Navbar