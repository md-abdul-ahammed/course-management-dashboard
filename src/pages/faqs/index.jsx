import React, {useState} from 'react';
//components
import Navbar from '../help-center/navbar/index';
import Footer from '../../components/Footer';
import MobileFooter from '../../components/mobilefooter/index';
import FaqLogic from '../courses-institutes-page/FAQ/FaqLogic';
import Data from '../courses-institutes-page/FAQ/data';
import Email from '../help-center/email/index';
//styled components
import { Container } from './index.styled';

const FaqPage = () => {
    const [clicked, setClicked] = useState(1);
    const handleToggle = (id) => {
        if (clicked === id) {
            setClicked(1)
        }
        setClicked(id)
    }

    return (
        <Container>
            <Navbar />
            <div className='gradient pt-20'>
                <h2 className='font-dm-sans text-4xl font-semibold text-violet pb-10 text-center w-72 md:w-full mb-10'>Frequently Asked Questions</h2>
                <div className='flex items-center justify-center flex-col'>
                    {Data.map(d => (
                        <FaqLogic currentValue={d} onClick={() => handleToggle(d.id)} active={clicked === d.id} />
                    ))}
                </div>
                <Email className="mt-16" />
            </div>
            <Footer className="hidden md:block" />
            <MobileFooter className="md:hidden" />
        </Container>
    )
}
export default FaqPage