import { DownOutlined, UpOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react'

const Tabs = ({ currentValue, onToggle, active }) => {
  const { icon, type, id, placeholderText, content } = currentValue
  const [isOpened, setIsOpened] = useState(false)
  const inputRef = useRef({})

  useEffect(() => {
    inputRef.current.autoFocus = true
  })
  return (
    <div
      className={
        active
          ? 'relative w-full  flex  items-center border border-violet  rounded-full p-2  space-x-1 transition-all duration-700 ease-in border-opacity-40 '
          : 'border-violet border-opacity-40 flex items-center border rounded-full p-2 space-x-1  '
      }
      key={id}
    >
      <div
        onClick={onToggle}
        className={`text-violet text-2xl rounded-full ${
          id === 2 && active && 'order-2 pl-3'
        }`}
      >
        {icon}
      </div>

      <input
        ref={inputRef}
        onClick={() => setIsOpened(!isOpened)}
        autoFocus={true}
        className={` outline-none
            border-none
            w-full
            placeholder:text-sm
            focus:bg-none
             transition-all duration-1000 ease-in
            autofill:bg-transparent ${!active && 'hidden'}`}
        placeholder={placeholderText}
        name={type}
        defaultValue={content}
        onChange={(e) => console.log(e.target.value, type)}
      />
      {type === 'location' && active && (
        <>
          {isOpened ? (
            <UpOutlined className=' absolute right-5' />
          ) : (
            <DownOutlined className=' absolute right-5' />
          )}
        </>
      )}
    </div>
  )
}

export default Tabs
