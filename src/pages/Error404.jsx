import React from 'react'
import NavHeader from '../components/NavHeader'
import vector404 from '../assets/vectors/404.png'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='font-dm-sans w-screen h-screen overflow-hidden'>
      <NavHeader />

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit max-w-[100vw] flex flex-col items-center justify-center space-y-3 h-[calc(100vh)] px-6 lg:py-12'>
        <img
          src={vector404}
          alt=''
          className='h-5/6 max-h-[300px] lg:max-h-[400px] w-auto '
        />
        <h1 className='text-3xl lg:text-5xl font-bold text-center'>
          Left, Right Oops <span className='text-violet'>Lost</span>
        </h1>
        <div className='text-center text-red text-lg font-medium'>
          The page you are looking for might have been removed, had it's name
          changed, or is temporarily unavailable.
        </div>

        <Link
          to='/'
          className='bg-violet text-white uppercase px-12 py-2 rounded-full'
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export default Error404
