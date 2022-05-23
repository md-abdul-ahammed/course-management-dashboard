import React from 'react'
import Container from '../../components/layout/Container'
import mahima from '../../assets/images/mahima.jpg'
import vishal from '../../assets/images/nitiya.jpg'
import nitiya from '../../assets/images/vishal.jpg'
import Carousel from 'react-elastic-carousel'
import { isEmpty } from '../../components/utils'

export default function Faculty({ faculties }) {
  // const faculties = [
  //   {
  //     name: 'Mahina Singh',
  //     degree: 'PHD, MSc',
  //     img: mahima,
  //     details:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
  //   },
  //   {
  //     name: 'Vishal Kumar',
  //     degree: 'PHD, MSc',
  //     img: nitiya,
  //     details:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
  //   },
  //   {
  //     name: 'Nitya Kashyap',
  //     degree: 'PHD, MSc',
  //     img: vishal,
  //     details:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pr",
  //   },
  // ]

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ]
  if (!isEmpty(faculties)) <></>
  return (
    <section name='Faculty' className='md:py-20 py-12'>
      <Container className={''}>
        <h1 className='text-4xl font-bold text-center py-10'>Faculty</h1>
        <div className='md:max-w-[1400px] mx-auto'>
          <Carousel
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <div className='flex items-center space-x-2 mt-2'>
                  {pages?.map((page, i) => {
                    return (
                      <div
                        className={`cursor-pointer  h-2 rounded-lg transition-all duration-500 ease-in-out  ${
                          activePage === page
                            ? 'bg-violet w-28 '
                            : 'bg-gray/20 w-6'
                        }`}
                        key={i}
                        onClick={() => onClick(page)}
                      />
                    )
                  })}
                </div>
              )
            }}
            breakPoints={breakPoints}
            showArrows={false}
          >
            {faculties?.map((item, i) => (
              <div className=' mx-2 '>
                <div
                  key={item.id}
                  className=' p-5 md:py-12  lg:w-[350px] lg:mx-5 my-5  shadow-[#7ab1dc]/20 shadow-3xl shrink-0 rounded-2xl '
                >
                  <div className='mb-2 md:mb-8 text-center '>
                    <img
                      className='h-[150px] w-[150px] mx-auto rounded-full my-2'
                      src={item.avatar.url}
                      alt=''
                    />
                    <p className='font-bold text-xl'>{item.name}</p>
                    <p className='text-md text-[#A4A4A4]'>
                      {item.qualification}
                    </p>
                  </div>
                  <p className='text-lg text-center'>{item.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  )
}
