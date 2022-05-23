import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import React, { Children, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useClickOutside } from '../../components/hooks/useClickOutside'
import useScreenWidth from '../../components/hooks/useScreenWidth'
import { titleToUrl } from '../../components/utils'

export default function Dropdown({
  placeholderText,
  isOpen,
  children,
  isSelectOption,
  options = [],
  selectedValue,
  className,
  primaryVariant,
  onChange,
  baseLink,
}) {
  const params = useParams()
  const [open, setOpen] = useState(isOpen)
  const [selected, setSelected] = useState(placeholderText)
  const { screenWidth, screenSize } = useScreenWidth()
  const navigate = useNavigate()

  let domNode = useClickOutside(() => {
    if (screenWidth > 600) {
      setOpen(false)
    }
  })
  return (
    <div>
      <>
        <div ref={domNode} className=' w-fit bg-white'>
          <div
            onClick={() => setOpen(!open)}
            className={`flex items-center relative ring-1 ring-gray/30  justify-between m-1 px-3 rounded-md py-1 space-x-2 w-fit cursor-pointer select-none   ${
              primaryVariant && 'text-white bg-violet'
            } ${className}`}
          >
            <p className=' whitespace-nowrap'>
              {' '}
              {isSelectOption && selected ? selected : placeholderText}
            </p>
            {(children || options.length > 0) && (
              <>
                {open ? (
                  <UpOutlined
                    className={`flex items-center  text-xs ${
                      primaryVariant ? 'text-white' : 'text-gray/30'
                    }`}
                  />
                ) : (
                  <DownOutlined
                    className={`flex items-center  text-xs ${
                      primaryVariant ? 'text-white' : 'text-gray/30'
                    }`}
                  />
                )}
              </>
            )}
          </div>
          {isSelectOption ? (
            <>
              <div
                className={`absolute sm:shadow-3xl z-[999] py-1 rounded-lg w-fit  bg-white ${
                  !open && 'hidden'
                }`}
              >
                {options.map((item, i) => (
                  <div
                    onClick={() => {
                      setSelected(item)
                      onChange(titleToUrl(item))
                      setOpen(!open)
                    }}
                    key={i}
                  >
                    <p
                      className={`px-3 py-1 cursor-pointer transition-all duration-300 ease-in-out  ${
                        item.includes(selected)
                          ? 'bg-violet text-white'
                          : 'hover:bg-violet/60 hover:text-white'
                      }`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div
              className={` invisible sm:visible  rounded-md sm:shadow-3xl ${
                open ? ' z-[999] absolute bg-white' : 'hidden'
              }`}
            >
              {children}
            </div>
          )}
        </div>
      </>
      {screenWidth < 640 && (
        <>
          {!isSelectOption ? (
            <Drawer
              closable={false}
              headerStyle={{
                padding: 0,
                backgroundColor: 'transparent',
              }}
              bodyStyle={{ padding: 0, maxHeight: '70vh' }}
              className=' sm:hidden p-0 '
              title={
                <div className='p-4 rounded-lg'>
                  <p className=''>
                    {isSelectOption && selected ? selected : placeholderText}
                  </p>
                </div>
              }
              height={'auto'}
              visible={open}
              onClose={() => setOpen(false)}
              placement={'bottom'}
            >
              <span>{children}</span>
            </Drawer>
          ) : (
            <>
              <Drawer
                closable={false}
                headerStyle={{
                  padding: 0,
                  backgroundColor: 'transparent',
                }}
                bodyStyle={{ padding: 0, maxHeight: '70vh' }}
                className=' sm:hidden p-0 no-scrollbar '
                title={
                  <div className='p-4 rounded-lg'>
                    <p className=''>{placeholderText}</p>
                  </div>
                }
                height={'auto'}
                visible={open}
                onClose={() => setOpen(!open)}
                placement={'bottom'}
              >
                <div
                  className={` py-1 rounded-lg divide divide-y-[.5px] divide-gray/10   bg-white no-scrollbar ${
                    !open && 'hidden'
                  }`}
                >
                  {options.map((item, i) => (
                    <div
                      onClick={() => {
                        setSelected(item)
                        onChange(titleToUrl(item))
                      }}
                      key={i}
                    >
                      <p
                        className={`px-5 py-1 cursor-pointer transition-all duration-300 ease-in-out  ${
                          item === selected
                            ? 'bg-violet text-white'
                            : 'hover:bg-violet/60 hover:text-white'
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='flex p-2  rounded-lg justify-between border  border-b-0 border-l-0  border-r-0 border-gray/10   '>
                  <button className='text-violet text-sm px-8 py-1 font-medium'>
                    Clear All
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className='bg-violet text-white px-8 py-1 rounded-md '
                  >
                    Apply
                  </button>
                </div>
              </Drawer>
            </>
          )}
        </>
      )}
    </div>
  )
}
