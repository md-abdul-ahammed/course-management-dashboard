import React from 'react'
import Data from './data'

const CategoryFooter = () => {
  return (
    <div style={{ borderTop: '2px solid #7178D380' }} className='bg-light-gray'>
      <footer
        className='w-screen  container mx-auto  bg-light-gray
        py-20 hidden lg:flex flex-col lg:flex-row  space-y-6  lg:space-y-0 '
      >
        {Data.map((d, i) => (
          <>
            <div
              key={i}
              className='font-dm-sans text-slate flex w-full items-center justify-around'
            >
              <div className=''>
                <h1 className='font-bold text-2xl mb-3'>School</h1>
                <div className='text-lg text-medium-slate'>
                  {d.school.map((sch, i) => (
                    <p className='capitalize mb-2 text-xl' key={`${sch.title}`}>
                      {sch.title}
                    </p>
                  ))}
                </div>
              </div>
              <div className=''>
                <h1 className='font-bold text-2xl mb-3 '>Engineering</h1>
                <div className='text-lg text-medium-slate'>
                  {d.engineering.map((eng) => (
                    <p key={`${eng.title}`} className='mb-2 text-xl'>
                      {eng.title}
                    </p>
                  ))}
                </div>
              </div>
              <div className=''>
                <h1 className='font-bold text-2xl mb-3'>Medical</h1>
                <div className='text-lg text-medium-slate'>
                  {d.medical.map((med) => (
                    <p key={`${med.title}`} className='mb-2 text-xl'>
                      {med.title}
                    </p>
                  ))}
                </div>
              </div>
              <div className=''>
                <h1 className='font-bold text-2xl mb-3'>Skill Based</h1>
                <div className='text-lg text-medium-slate'>
                  {d.skillBased.map((skill, i) => (
                    <p key={`${skill.title}`} className='mb-2 text-xl'>
                      {skill.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </footer>
    </div>
  )
}

export default CategoryFooter
