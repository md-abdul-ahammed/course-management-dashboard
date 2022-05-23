import React from 'react';
//components
import Navbar from './navbar';
import Search from './search';
import Email from './email';
import Cards from './card';
import Footer from '../../components/Footer';
import MobileFooter from '../../components/mobilefooter/index';
//styled components
import { Container } from './index.styled';



const HelpCenter = () => {
    return (
        <Container className='h-full'>
            <Navbar />
            <div className='gradient flex flex-col justify-center items-center pt-20'>
                <h2 className='font-dm-sans text-4xl font-semibold text-violet pb-10 text-center w-72 md:w-full mb-10'>Ostello Help Center</h2>
                <Search />
                <Cards />
                <Email />
            </div>
            <Footer className="hidden md:block" />
            <MobileFooter className="md:hidden" />
        </Container>
    )
}
export default HelpCenter