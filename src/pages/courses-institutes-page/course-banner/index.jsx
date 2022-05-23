import React, { useRef } from 'react'
import Carousel from 'react-elastic-carousel'
import Data from './data'
import { Container } from './index.styled'
import BannerCard from './card'
import { pink } from '@mui/material/colors'

const CourseBanner = () => {
  const ref = useRef(null)
  console.log(ref)
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      ref.current.goTo(0)
    }
  }

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      ref.current.goTo(Data.length)
    }
  }
  return (
    <Container className='custom-carousel relative overflow-x-hidden'>
      <Carousel
        ref={ref}
        enableAutoPlay
        autoPlaySpeed={1500}
        itemsToShow={1}
        showArrows={false}
        onNextStart={onNextStart}
        onPrevStart={onPrevStart}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div className='flex items-center space-x-2 '>
              {pages?.map((page) => {
                const isActivePage = activePage === page
                return (
                  <div
                    className={`cursor-pointer  h-2 rounded-lg my-5 transition-all duration-500 ease-in-out ${
                      isActivePage ? 'bg-violet w-28 ' : 'bg-violet/20 w-6'
                    }`}
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                )
              })}
            </div>
          )
        }}
      >
        {Data.map((d) => (
          <BannerCard currentValue={d} />
        ))}
      </Carousel>
    </Container>
  )
}

export default CourseBanner
