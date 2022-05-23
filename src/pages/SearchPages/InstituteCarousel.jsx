import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import React, { useEffect, useRef } from 'react'
import Carousel from 'react-elastic-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import i1 from '../../assets/institutes/i1.png'
import i2 from '../../assets/institutes/i2.png'
import i3 from '../../assets/institutes/i3.png'
import i4 from '../../assets/institutes/i4.png'
import i5 from '../../assets/institutes/i5.png'
import i6 from '../../assets/institutes/i6.png'
import { isEmpty, titleToUrl } from '../../components/utils'
import { institutesSelector } from '../../redux/slices/instituteSlice'

export default function InstituteCarousel({ visible, hidden }) {
  const carouselRef = useRef({})
  const { institutes } = useSelector(institutesSelector)
  const breakPoints = [
    { width: 320, itemsToShow: 2 },
    { width: 376, itemsToShow: 3 },

    { width: 700, itemsToShow: 6 },
    { width: 1400, itemsToShow: 5 },
    { width: 1800, itemsToShow: 6 },
  ]
  return (
    <>
      <div
        hidden={hidden}
        style={{
          background:
            'linear-gradient(180deg, rgba(122, 129, 220, 0.1) 0%, rgba(196, 196, 196, 0) 100%)',
        }}
        className='py-5 px-10  border-[#7178D3]/20 border-l-0 border-r-0 border-2 mb-5'
      >
        <h1
          hidden={hidden}
          className='sm:text-center sm:my-5 sm:text-4xl text-2xl'
        >
          Top institutes for you
        </h1>
        <Carousel
          breakPoints={breakPoints}
          className=''
          showEmptySlots={false}
          itemsToShow={4}
          pagination={false}
          renderArrow={({ onClick, type, isEdge }) => {
            return (
              <div className='my-auto hidden md:block '>
                {type === 'PREV' ? (
                  <LeftOutlined
                    onClick={() => carouselRef.current.slidePrev()}
                    className='bg-[#7D23E0] text-3xl text-white flex items-center justify-center h-16 w-16 rounded-full cursor-pointer mr-5'
                  />
                ) : (
                  <RightOutlined
                    onClick={() => carouselRef.current.slideNext()}
                    className='bg-[#7D23E0] text-3xl text-white flex items-center justify-center h-16 w-16 rounded-full cursor-pointer ml-5'
                  />
                )}
              </div>
            )
          }}
          showArrows={true}
          ne
          ref={carouselRef}
        >
          {institutes.map((item, i) => (
            <Link to={`/institute/${titleToUrl(item.name)}`}>
              <img
                src={item.images?.[0]}
                className='rounded-full md:h-40 md:w-40 w-20 h-20  shadow-2xl my-10 sm:my-20'
                key={i}
                alt={i}
              />
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  )
}
