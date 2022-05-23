import React, { useState } from 'react'
import { useClickOutside } from '../../../../components/hooks/useClickOutside'
import SearchHead from './SearchHead'
import LocationCard from './locationCard'
import Scroll from '../search_field/scroll'
import { useGeolocation } from 'react-use'
import GeoLocation from './GeoLocation'

const GpsDetector = () => {
  const [toggle, setToggle] = useState(false)
  let domNode = useClickOutside(() => {
    setToggle(false)
  })

  return (
    <div ref={domNode} className='relative w-full'>
      <SearchHead currentValue={toggle} onClick={() => setToggle(!toggle)} />

      {toggle && (
        <Scroll
          style={{ boxShadow: '0px 4px 15px rgba(125, 35, 224, 0.2)' }}
          className='md:h-24 '
        >
          <LocationCard />
        </Scroll>
      )}
    </div>
  )
}

export default GpsDetector
