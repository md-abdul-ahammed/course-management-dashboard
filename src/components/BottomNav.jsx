import {
  HeartOutlined,
  HomeOutlined,
  ImportOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Affix } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BottomNav() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [activeUrl, setActiveUrl] = useState('/')
  const navigate = useNavigate()
  const navIconClasses = `
   text-xl
  `
  // useEffect(() => {
  //   navigate(activeUrl)
  // }, [activeUrl, navigate])

  const [scrollPosition, setScrollPosition] = useState(0)
  const [visibleBar, setVisibleBar] = useState(true)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition((prev) => {
      if (prev <= position) {
        setVisibleBar(false)
      }
      if (prev >= position) {
        setVisibleBar(true)
      }

      return position
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // console.log(scrollPosition, 'isVIsible?', visibleBar)

  const bottomNavs = [
    {
      title: 'Home',
      url: '/',
      icon: <HomeOutlined className={navIconClasses} />,
    },
    {
      title: 'Wishlist',
      url: '/wishlist',
      icon: <HeartOutlined className={navIconClasses} />,
    },
    {
      title: 'Invite & Earn',
      url: '/inviteAndEarn',
      icon: <UserAddOutlined className={navIconClasses} />,
    },
    {
      title: 'Account',
      url: '/account',
      icon: (
        <UserOutlined
          className={navIconClasses}
          // onClick={() => setIsLoggedIn(false)}
        />
      ),
    },
    {
      title: 'Login',
      url: '/login',
      icon: (
        <ImportOutlined
          className={navIconClasses}
          // onClick={() => setIsLoggedIn(true)}
        />
      ),
    },
  ]

  return (
    <div className={`md:hidden bg-white ${visibleBar ? '' : 'hidden'}`}>
      <Affix offsetBottom={0} className=' bg-white  rounded-b-none '>
        <div
          style={{ borderRadiusTop: 'none' }}
          className=' bg-white rounded-xl rounded-b-none flex justify-around py-1   '
        >
          {bottomNavs.map((item, i) => (
            <div
              onClick={() => {
                setActiveUrl(item.url)
                navigate(item.url)
              }}
              key={i}
              className={` flex items-center justify-center flex-col mx-2 font-medium cursor-pointer  ${
                activeUrl === item.url ? 'text-[#7D23E0]' : 'text-gray-400'
              } ${item.title === 'Account' && !isLoggedIn && 'hidden'} ${
                item.title === 'Login' && isLoggedIn && 'hidden'
              }`}
            >
              <span>{item.icon}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </Affix>
    </div>
  )
}
