import React from 'react'
import './style.css'
import logo from '../../../../assets/logo_title.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav id='nav' className='nav-bg p-4 w-full shadow-md'>
      <div className='w-full mx-auto flex justify-between items-center md:px-24 sm:px-14'>
        <img className='w-40 ml-5' src={logo} alt='ostello' />
        <button
          onClick={() => navigate(-1)}
          className='nav-btn rounded-lg ml- px-5 py-1 font-light capitalize  font-color-two hover:text-white duration-300'
        >
          cancel
        </button>
      </div>
    </nav>
  )
}

export default Navbar
