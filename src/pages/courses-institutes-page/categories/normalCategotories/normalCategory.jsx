import React from 'react';
import { NormalCategory } from '../index.styled';
import CategoryCard from './card';
import Data from './data';

const NormalCategories = () => {
    return (
        <NormalCategory className='overflow-x-hidden'>
            <h2 className='font-medium font-dm-sans text-lg md:text-5xl mb-4'>Categories</h2>

            <div className='flex flex-wrap justify-center '>
                {Data.map(d => (
                    <CategoryCard currentValue={d} />
                ))}
            </div>
            
        </NormalCategory>
    )
}

export default NormalCategories