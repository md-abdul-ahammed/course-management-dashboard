import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import FaqLogic from './FaqLogic';
import Data from './data';
import { Container } from './index.styled';

const Faq = () => {
    const [clicked, setClicked] = useState(1);

    const handleToggle = (id) => {
        if (clicked === id) {
            return setClicked(1)
        }
        setClicked(id)
    }

    return (
        <Container className='relative overflow-x-hidden'>
            <h2 className="font-dm-sans  md:text-4xl font-semibold mb-4 md:mb-12 text-left md:text-center ml-4 md:ml-0">Frequently Asked Questions</h2>
            <div className='flex items-center justify-center flex-col'>
                {Data.map(d => (
                    <FaqLogic currentValue={d}  onClick={() => handleToggle(d.id)}  active={clicked === d.id} />
                ))}
            </div>
            <div className="flex justify-center md:justify-end items-center w-full md:w-4/5">
                <p className='text-medium-slate text-center md:text-right'> Or visit our help center to know more <br className='md:hidden' /><Link to="/helpcenter" className='underline font-bold ml-2' style={{color:"#0026AE"}}>Help Center</Link></p>
            </div>
        </Container>
    )
}

export default Faq