import React from 'react';

const ManageCards = () => {
    return (
        <div className='h-full p-5 mb-16'>
            <div className="heading my-2 ">
           <p className='text-2xl font-bold '>Manage Cards</p>
        </div>

        <div className='text-center mt-5'>
        <div className='border border-dashed border-ghost/80 p-3 inline-block mx-auto px-8 rounded text-xl text-ghost/80'>
            <p>You don't have any saved payments method</p>
        </div>
        </div>

        </div>
    );
};

export default ManageCards;