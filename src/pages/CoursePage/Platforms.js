import React from 'react'
import { Link } from 'react-router-dom'

export default function Platforms() {
  const platforms = [
    {
      name: 'School',
      categories: [
        {
          title: 'Class 5',
          url: '/',
        },
        {
          title: 'Class 6',
          url: '/',
        },
        {
          title: 'Class 7',
          url: '/',
        },
        {
          title: 'Class 8',
          url: '/',
        },
        {
          title: 'Class 9',
          url: '/',
        },
        {
          title: 'Class 10',
          url: '/',
        },
        {
          title: 'Class 11',
          url: '/',
        },
        {
          title: 'Class 12',
          url: '/',
        },
      ],
    },
    {
      name: 'Engineering',
      categories: [
        {
          title: 'JEE Main',
          url: '/',
        },
        {
          title: 'JEE Advanced',
          url: '/',
        },
        {
          title: 'GATE',
          url: '/',
        },
        {
          title: 'NATA',
          url: '/',
        },
        {
          title: 'DUET',
          url: '/',
        },
        {
          title: 'AMET',
          url: '/',
        },
        {
          title: 'CIPET JEE',
          url: '/',
        },
        {
          title: 'IMU CET',
          url: '/',
        },
      ],
    },
    {
      name: 'Medical',
      categories: [
        {
          title: 'NEET',
          url: '',
        },
        {
          title: 'NEET PG',
          url: '',
        },
        {
          title: 'AIIMS',
          url: '',
        },
        {
          title: 'AIIMS PG',
          url: '',
        },
        {
          title: 'PGIMER',
          url: '',
        },
        {
          title: 'CMSE',
          url: '',
        },
        {
          title: 'NBE FET',
          url: '',
        },
      ],
    },
    {
      name: 'Skill Based',
      categories: [
        {
          title: 'Photography',
          url: '',
        },
        {
          title: 'Business ',
          url: '',
        },
        {
          title: 'IT & Software',
          url: '',
        },
        {
          title: 'Design',
          url: '',
        },
        {
          title: 'Marketing',
          url: '',
        },
        {
          title: 'Development',
          url: '',
        },
        {
          title: 'Other Skills',
          url: '',
        },
      ],
    },
  ]
  return (
    <>
      <div className='lg:flex space-x-5 justify-around py-20 px-10 bg-[#F3F5F7] hidden border-[#7178D3]/20 border-l-0 border-r-0 border-2 '>
        {platforms.map((item, i) => (
          <div key={i}>
            <p className='font-bold md:text-2xl text-xl my-5'>{item.name}</p>
            <div className='flex flex-col text-xl'>
              {item.categories.map((category, idx) => (
                <Link
                  to={category.url}
                  className='text-current hover:text-violet'
                  key={idx}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
