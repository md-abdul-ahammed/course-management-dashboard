import React from 'react'
import Data from './data'
import Item from './AccordionItem'

const AccordPaymentMethod = () => {
  return (
    <div className='md:hidden'>
      <div>
        {Data.map((d) => (
          <Item currentvalue={d} />
        ))}
      </div>
    </div>
  )
}

export default AccordPaymentMethod
