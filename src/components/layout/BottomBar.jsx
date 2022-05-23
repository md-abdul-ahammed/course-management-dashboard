import {
  HeartOutlined,
  HomeOutlined,
  ImportOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Affix } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogoForBottomMenu, setShowSideBar } from '../../redux/slices/UserProfileSidePopUp'

export default function BottomBar() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const [activeUrl, setActiveUrl] = useState('/')
  const navIconClasses = `
   text-xl
  `
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
      url: '/merchant',
      icon: <HomeOutlined className={navIconClasses} />,
    },
    {
      title: 'Wishlist',
      url: '/profile/wishlist',
      icon: <HeartOutlined className={navIconClasses} />,
      sidebar:false,
      logoBottomMenu : true,
    },
    {
      title: 'Invite & Earn',
      url: '/profile/invite&earns',
      icon: <UserAddOutlined className={navIconClasses} />,
      sidebar:false,
      logoBottomMenu : true,
    },
    {
      title: 'Account',
      url: '/profile',
      sidebar:true,
      logoBottomMenu : false,
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

  const navigate = useNavigate()
  return (
    <div className={`md:hidden ${visibleBar ? '' : 'hidden'}`}>
      <Affix offsetBottom={0} className=' '>
        <div className='bg-white  flex justify-around py-1  rounded-xl rounded-b-none '>
          {bottomNavs.map((item, i) => (
            <div
              onClick={() => {
                navigate(item?.url)
                setActiveUrl(item.url)
                dispatch(setShowSideBar(item?.sidebar))
                dispatch(setLogoForBottomMenu(item?.logoBottomMenu))
 
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
