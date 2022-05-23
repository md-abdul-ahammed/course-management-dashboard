import React from 'react';
import { useLocation } from 'react-router-dom';
import { useScroll } from '../../../components/hooks/useScroll';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiUserPlus } from 'react-icons/fi';
import { RiLoginBoxLine } from 'react-icons/ri';

import { Container } from './index.styled';
    
const BottomNavabr = () => {
    // const { y, x, scrollDirection } = useScroll();  
    const Location = useLocation();
    const { pathname } = Location;
    const splitLocation = pathname.split("/")

    return (
        <Container  className='fixed bottom-0 rounded-tr-lg rounded-tl-lg md:hidden flex items-center justify-evenly z-30 bg-white py-2 w-full '>
            <Link to="/courses_institutes" className={splitLocation[1] === "courses_institutes" ? 'flex flex-col items-center text-violet font-medium': 'flex flex-col items-center gray font-medium' }>
                <BiHomeAlt className='w-7 h-7' />
                <div className='text-xs'>Home</div>
            </Link>

            <Link to="/" className={splitLocation[1] === "wishlist" ?  'flex flex-col items-center text-violet font-medium': 'flex flex-col items-center gray font-medium' }>
                <AiOutlineHeart className='w-7 h-7' />
                <div className='text-xs'>Wish List</div>
            </Link>

            <Link to="/" className={splitLocation[1] === "invite" ?  'flex flex-col items-center text-violet font-medium': 'flex flex-col items-center gray font-medium' }>
                <FiUserPlus className='w-7 h-7' />
                <div className='text-xs'> Invite & Earn</div>
            </Link>

            <Link to="/signin" className={splitLocation[1] === "signin" ?  'flex flex-col items-center text-violet font-medium': 'flex flex-col items-center gray font-medium' }>
                <RiLoginBoxLine className='w-7 h-7' />
                <div className='text-xs'>Login</div>
            </Link>
        </Container>
    )
}

export default BottomNavabr

// className={scrollDirection === "down" ? 'transition-all opacity-1 fixed bottom-0 rounded-tr-lg rounded-tl-lg md:hidden flex items-center justify-evenly z-30 bg-white py-2 w-full duration-200' : 'transition-all duration-200 opacity-0 fixed bottom-0 rounded-tr-lg rounded-tl-lg md:hidden flex items-center justify-evenly z-30 bg-white py-2 w-full' }