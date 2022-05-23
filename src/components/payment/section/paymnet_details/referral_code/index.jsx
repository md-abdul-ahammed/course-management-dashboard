import React from 'react'
// import './style.css'
const Referral = () => {
  return (
    <div className='flex mt-6 radius shadow  '>
      <input
        type='text'
        placeholder='Type referral code here'
        className='input-referral w-full rounded-lg px-7 py-4 '
      />
      <button className='py-1 px-3 rounded-xl ml-4 font-bold'>Redeem</button>
    </div>
  )
}

export default Referral
