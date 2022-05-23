import React from 'react'
import Container from '../../components/layout/Container'
import calculation from '../../assets/images/icons/calculation.svg'
import siteMap from '../../assets/images/icons/sitemap.svg'
import searchFile from '../../assets/images/icons/search file.svg'
import barGraph from '../../assets/images/icons/bar graph.svg'

export default function Objectives() {
  const objectives = [
    {
      title: 'Learn How to do user research',
      icons: calculation,
    },
    {
      title: 'Learn efficient Data Optimization',
      icons: siteMap,
    },
    {
      title: 'Get to know Digital Marketing Basics',
      icons: searchFile,
    },
    {
      title: 'Master the skills of SEO',
      icons: barGraph,
    },
  ]
  return (
    <div name='Objectives' className='py-20'>
      <>
        <div className='  learning_objectives md:h-[300px]  h-[200px]  '>
          <h1 className='lg:text-5xl text-3xl pt-10 text-center lg:pt-20  font-medium text-white mx-5 lg:px-20'>
            Learning Objectives
          </h1>
        </div>
        <Container>
          <div className=' grid grid-cols-2 md:flex justify-center place-items-center   md:justify-center  mx-5  -mt-20 xl:gap-20 gap-10  sm:gap-10  '>
            {objectives.map((item, i) => (
              <div
                key={i}
                className='bg-white   lg:w-[200px] lg:h-[200px] h-[120px] w-[120px]  rounded-xl  shadow-ostf shadow-[#7ab1dc]/20    flex flex-col items-center justify-center lg:text-2xl  space-y-2  p-2 shadow-3xl '
              >
                <img className=' w-10 xl:w-20 ' src={item.icons} alt='' />
                <p className='text-center text-xs lg:text-xl  '>{item.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </>
    </div>
  )
}
