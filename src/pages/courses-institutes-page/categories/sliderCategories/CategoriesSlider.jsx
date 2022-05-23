import React from 'react'
import Carousel from 'react-elastic-carousel'
import { SliderCategorty } from '../index.styled'
import SliderCard from './sliderCard'
import Data from './data'

const CategoriesSlider = () => {
  return (
    <SliderCategorty className='slider overflow-x-hidden'>
      <h2 className='font-dm-sans font-medium ml-5 mb-6 text-2xl text-light-black'>
        Categories
      </h2>

      <div>
        {Data.map((d) => (
          <>
            <Carousel pagination={false} showArrows={false} itemsToShow={2}>
              {d.firstrow.map((dd) => (
                <SliderCard currentValue={dd} />
              ))}
            </Carousel>

            <Carousel pagination={false} showArrows={false} itemsToShow={2}>
              {d.secondrow.map((dd) => (
                <SliderCard currentValue={dd} />
              ))}
            </Carousel>
          </>
        ))}
      </div>
    </SliderCategorty>
  )
}

export default CategoriesSlider
