import React from 'react';
import BG from '../../../assets/courses_institutions/top-locations/Background.png';
import SingleDesktop from './singleDesktop';
import SingleMobile from './singleMobile';
import { Container, Faq } from './index.style';

const TopLocations = () => {
    return (
        <Faq className='relative overflow-x-hidden'>
            <Container style={{backgroundImage:`url(${BG})`}} className="z-10 w-full flex items-center justify-center ">
                <h1 className='font-dm-sans font-semibold text-2xl md:text-4xl text-white text-center'>Top Locations in  Delhi NCR</h1>
            </Container>
            <SingleMobile className="lg:hidden" />
            <SingleDesktop className="hidden lg:flex" />
        </Faq>
    )
}

export default TopLocations