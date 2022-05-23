import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoWithTitle from '../../assets/logo_title.svg'
import Logo from '../../assets/logo.svg'
import {
  BsFillGridFill,
  BsFillFileTextFill,
  BsFillGearFill,
} from 'react-icons/bs'
import { MdInsertChart } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

import { HiBell, HiOutlineLogout } from 'react-icons/hi'
import { MerchantDashboardContext } from '../../pages/MerchantDashboardPages/MerchantDashboardWrapper'
import { logout } from '../../pages/Auth/Login'

const DashboardSideNav = ({ expandedState }) => {
  const location = useLocation()
  const [expanded, setExpanded] = useContext(
    MerchantDashboardContext
  ).navExpandedState
  const isDashboardActive = location.pathname === '/merchant/board/dashboard'
  const isCoursesActive = location.pathname === '/merchant/board/courses'
  const isOutletsActive = location.pathname === '/merchant/board/outlets'
  const isMyProfileActive = location.pathname === '/merchant/board/profile'
  const isAccountancyActive =
    location.pathname === '/merchant/board/accountancy'
  const isNotificationActive =
    location.pathname === '/merchant/board/notifications'
  const isSettingsActive = location.pathname === '/merchant/board/settings'
  const [isMobileNav, setIsMobileNav] = useState(false)

  return (
    <React.Fragment>
      <div className='flex-1'></div>
      <FiMenu
        className={`text-xl lg:hidden relative top-11 z-10 ml-1 ${
          isMobileNav ? 'hidden' : 'block'
        }`}
        onClick={() => {
          setIsMobileNav(!isMobileNav)
        }}
      />

      <nav
        className={` font-dm-sans h-screen ${
          isMobileNav ? 'flex' : 'hidden'
        } lg:${
          expanded ? 'w-48' : 'w-20'
        } transition-all py-4 bg-white  absolute lg:relative z-40 lg:z-0 lg:flex items-center flex-col`}
      >
        <img
          loading='lazy'
          src={expanded ? LogoWithTitle : Logo}
          alt=''
          className='h-8 w-auto hidden lg:flex mb-12'
        />

        <div className='flex items-center space-x-12 justify-center my-12 lg:hidden'>
          <img
            loading='lazy'
            src={LogoWithTitle}
            alt=''
            className='h-6 w-auto  lg:hidden '
          />

          <AiOutlineClose
            className={`text-xl ${isMobileNav ? 'flex' : 'hidden'}`}
            onClick={() => {
              setIsMobileNav(!isMobileNav)
            }}
          />
        </div>
        <div className='flex flex-col space-y-4 w-full'>
          <Link to={'/merchant/board/dashboard'} className='w-full'>
            <button
              onClick={() => setExpanded(true)}
              className='h-8 w-full py-1 items-center flex transition-all justify-start px-4'
              style={
                isDashboardActive
                  ? {
                      background:
                        'linear-gradient(to right, rgba(156, 77, 244, .5) 0%, rgba(156, 77, 244,0) 2rem)',
                    }
                  : {}
              }
            >
              <BsFillGridFill
                className={`h-6 w-6  ${
                  isDashboardActive ? 'text-violet' : 'text-ghost'
                }`}
              />
              {expanded && (
                <p
                  className={`ml-4 hidden lg:flex font-medium ${
                    isDashboardActive ? 'text-violet' : 'text-ghost'
                  }`}
                >
                  Dashboard
                </p>
              )}
              <p
                className={`ml-4 lg:hidden font-medium ${
                  isDashboardActive ? 'text-violet' : 'text-ghost'
                }`}
              >
                Dashboard
              </p>
            </button>
          </Link>

          <Link to={'/merchant/board/courses'} className='w-full'>
            <button
              onClick={() => setExpanded(true)}
              className='h-8 w-full py-1 items-center flex transition-all justify-start px-4'
              style={
                isCoursesActive
                  ? {
                      background:
                        'linear-gradient(to right, rgba(156, 77, 244, .5) 0%, rgba(156, 77, 244,0) 2rem)',
                    }
                  : {}
              }
            >
              <BsFillFileTextFill
                className={`h-6 w-6 ${
                  isCoursesActive ? 'text-violet' : 'text-ghost'
                }`}
              />
              {expanded && (
                <p
                  className={`ml-4 hidden lg:flex font-medium ${
                    isCoursesActive ? 'text-violet' : 'text-ghost'
                  }`}
                >
                  Courses
                </p>
              )}
              <p
                className={`ml-4 lg:hidden font-medium ${
                  isCoursesActive ? 'text-violet' : 'text-ghost'
                }`}
              >
                Courses
              </p>
            </button>
          </Link>

          {/* <Link to={"/merchant/board/courses"} className="w-full">
            <button
              onClick={() => setExpanded(true)}
              className="h-8 w-full py-1 items-center flex transition-all justify-start px-4"
              style={
                isCoursesActive
                  ? {
                      background:
                        "linear-gradient(to right, rgba(156, 77, 244, .5) 0%, rgba(156, 77, 244,0) 2rem)",
                    }
                  : {}
              }
            >
              <MdOutlineInsertChart
                className={`h-6 w-6 ${
                  isCoursesActive ? "text-violet" : "text-ghost"
                }`}
              />
              {expanded && (
                <p
                  className={`ml-4 font-medium ${
                    isCoursesActive ? "text-violet" : "text-ghost"
                  }`}
                >
                  Accountancy
                </p>
              )}
            </button>
          </Link> */}
          <Link to={'/merchant/board/accountancy'} className='w-full'>
            <button
              onClick={() => setExpanded(true)}
              className='h-8 w-full py-1 items-center flex transition-all justify-start px-4'
              style={
                isAccountancyActive
                  ? {
                      background:
                        'linear-gradient(to right, rgba(156, 77, 244, .5) 0%, rgba(156, 77, 244,0) 2rem)',
                    }
                  : {}
              }
            >
              <MdInsertChart
                className={`h-6 w-6 ${
                  isAccountancyActive ? 'text-violet' : 'text-ghost'
                }`}
              />
              {expanded && (
                <p
                  className={`ml-4 hidden lg:flex font-medium ${
                    isAccountancyActive ? 'text-violet' : 'text-ghost'
                  }`}
                >
                  Accountancy
                </p>
              )}
              <p
                className={`ml-4 lg:hidden font-medium ${
                  isAccountancyActive ? 'text-violet' : 'text-ghost'
                }`}
              >
                Accountancy
              </p>
            </button>
          </Link>

          <Link to='/' className='w-full'>
            <button
              onClick={() => setExpanded(true)}
              className='h-8 w-full py-1 items-center flex transition-all justify-start px-4'
              style={
                isMyProfileActive
                  ? {
                      background:
                        'linear-gradient(to right, rgba(156, 77, 244, .5) 0%, rgba(156, 77, 244,0) 2rem)',
                    }
                  : {}
              }
            >
              <FaUserAlt
                className={`h-6 w-6 ${
                  isMyProfileActive ? 'text-violet' : 'text-ghost'
                }`}
              />
              {expanded && (
                <p
                  className={`ml-4 hidden lg:flex font-medium ${
                    isMyProfileActive ? 'text-violet' : 'text-ghost'
                  }`}
                >
                  My Profile
                </p>
              )}
              <p
                className={`ml-4 lg:hidden font-medium ${
                  isMyProfileActive ? 'text-violet' : 'text-ghost'
                }`}
              >
                My Profile
              </p>
            </button>
          </Link>

          <Link to={'/merchant/board/notifications'} className='w-full'>
            <button
              onClick={() => setExpanded(true)}
              className='h-8 w-full py-1 items-center flex transition-all justify-start px-4'
              style={
                isNotificationActive
                  ? {
                      background:
                        'linear-gradient(to right, rgba(156, 77, 244, .5) 0%, rgba(156, 77, 244,0) 2rem)',
                    }
                  : {}
              }
            >
              <HiBell
                className={`h-6 w-6 ${
                  isNotificationActive ? 'text-violet' : 'text-ghost'
                }`}
              />
              {expanded && (
                <p
                  className={`ml-4 hidden lg:flex font-medium ${
                    isNotificationActive ? 'text-violet' : 'text-ghost'
                  }`}
                >
                  Notifications
                </p>
              )}
              <p
                className={`ml-4 lg:hidden font-medium ${
                  isNotificationActive ? 'text-violet' : 'text-ghost'
                }`}
              >
                Notifications
              </p>
              <div className='p-0.5 text-xs bg-light-red text-red rounded-full ml-2'>
                4
              </div>
            </button>
          </Link>

          {/* <Link to={"/merchant/board/outlets"} className="w-full">
            <button onClick={() => setExpanded(true)}
              className="h-8 w-full py-1 items-center flex transition-all justify-start px-4"
              style={
                isOutletsActive
                  ? {
                      background:
                        "linear-gradient(to right, rgba(156, 77, 244, .5) 0%, rgba(156, 77, 244,0) 2rem)",
                    }
                  : {}
              }
            >
              <RiLineChartLine
                className={`h-6 w-6 ${
                  isOutletsActive ? "text-violet" : "text-ghost"
                }`}
              />
              {expanded && (
                <p
                  className={`ml-4 font-medium ${
                    isOutletsActive ? "text-violet" : "text-ghost"
                  }`}
                >
                  Outlets
                </p>
              )}
            </button>
          </Link> */}

          <Link to={'/merchant/board/settings'} className='w-full'>
            <button
              onClick={() => setExpanded(true)}
              className='h-8 w-full py-1 items-center flex transition-all justify-start px-4'
              style={
                isSettingsActive
                  ? {
                      background:
                        'linear-gradient(to right, rgba(156, 77, 244, .5) 0%, rgba(156, 77, 244,0) 2rem)',
                    }
                  : {}
              }
            >
              <BsFillGearFill
                className={`h-6 w-6 ${
                  isSettingsActive ? 'text-violet' : 'text-ghost'
                }`}
              />
              {expanded && (
                <p
                  className={`ml-4 hidden lg:flex font-medium ${
                    isSettingsActive ? 'text-violet' : 'text-ghost'
                  }`}
                >
                  Settings
                </p>
              )}
              <p
                className={`ml-4 lg:hidden font-medium ${
                  isSettingsActive ? 'text-violet' : 'text-ghost'
                }`}
              >
                Settings
              </p>
            </button>
          </Link>

          <Link to={'/merchant'} className='w-full'>
            <button
              onClick={() => {
                setExpanded(true)
                console.log('a')
                // window.localStorage.removeItem("ACCESS_TOKEN");
                // window.localStorage.removeItem("OWNER_ID");
                // window.location.reload();
                logout()
              }}
              className='h-8 w-full py-1 items-center flex transition-all justify-start px-4'
            >
              <HiOutlineLogout className={`h-6 w-6 text-ghost`} />
              {expanded && (
                <p className={`ml-4 hidden lg:flex font-medium text-ghost`}>
                  Logout
                </p>
              )}
              <p className={`ml-4 lg:hidden font-medium text-ghost`}>Logout</p>
            </button>
          </Link>
        </div>
        <div className='flex-1'></div>
        {/* <div
          className={`flex ${
            expanded
              ? "flex-row items-center space-x-2"
              : "flex-col items-center space-y-2"
          }`}
        >
          <div className="w-8 h-8 rounded-xl bg-gray shadow-lg"></div>
          {expanded && (
            <div className="">
              <p className="text-sm font-medium">Easin Arafat</p>
              <p className="text-xs text-ghost">XYZ Classes</p>
            </div>
          )}
          <button
            className=""
            onClick={(e) => {
              e.preventDefault();
              window.localStorage.removeItem("ACCESS_TOKEN");
              window.localStorage.removeItem("OWNER_ID");
              window.location.href = "/";
            }}
          >
            <IoMdExit className="h-6 w-6 text-ghost" />
          </button>
        </div> */}
      </nav>

      {/* Mobile Bottom nav */}

      <nav
        className='hidden'
        //   className={`flex justify-center px-2 space-x-2 hidden fixed bottom-0 z-30 h-20 bg-white w-screen transition-all ${
        //     isMobileNavExpanded ? "translate-y-20" : "translate-y-0"
        //   }`
        // }
      >
        <Link to={'/merchant/board'} className='w-1/5 '>
          <button className='w-full h-full flex flex-col items-center space-y-2'>
            <div
              className={`h-2 rounded-full w-full ${
                isDashboardActive ? 'bg-violet' : 'bg-transparent'
              }`}
            ></div>
            <BsFillGridFill
              className={`h-8 w-8 ${
                isDashboardActive ? 'text-violet' : 'text-ghost'
              }`}
            />
            <p
              className={`${
                isDashboardActive ? 'text-violet' : 'text-ghost'
              } text-xs`}
            >
              Dashboard
            </p>
          </button>
        </Link>
        <Link to={'/merchant/board/courses'} className='w-1/5 '>
          <button className='w-full h-full flex flex-col items-center space-y-2'>
            <div
              className={`h-2 rounded-full w-full ${
                isCoursesActive ? 'bg-violet' : 'bg-transparent'
              }`}
            ></div>
            <BsFillFileTextFill
              className={`h-8 w-8 ${
                isCoursesActive ? 'text-violet' : 'text-ghost'
              }`}
            />
            <p
              className={`${
                isCoursesActive ? 'text-violet' : 'text-ghost'
              } text-xs`}
            >
              Courses
            </p>
          </button>
        </Link>
        {/* <Link to={"/merchant/board/accountancy"} className="w-1/5 ">
          <button className="w-full h-full flex flex-col items-center space-y-2">
            <div
              className={`h-2 rounded-full w-full ${
                isAccountancyActive ? "bg-violet" : "bg-transparent"
              }`}
            ></div>
            <MdInsertChart
              className={`h-8 w-8 ${
                isAccountancyActive ? "text-violet" : "text-ghost"
              }`}
            />
            <p
              className={`${
                isAccountancyActive ? "text-violet" : "text-ghost"
              } text-xs`}
            >
              Accountancy
            </p>
          </button>
        </Link> */}
        <Link to={'/merchant/board/outlets'} className='w-1/5 '>
          <button className='w-full h-full flex flex-col items-center space-y-2'>
            <div
              className={`h-2 rounded-full w-full ${
                isOutletsActive ? 'bg-violet' : 'bg-transparent'
              }`}
            ></div>
            <FaUserAlt
              className={`h-8 w-8 ${
                isOutletsActive ? 'text-violet' : 'text-ghost'
              }`}
            />
            <p
              className={`${
                isOutletsActive ? 'text-violet' : 'text-ghost'
              } text-xs`}
            >
              My Profile
            </p>
          </button>
        </Link>
        <Link to={'/merchant/board/settings'} className='w-1/5  '>
          <button className='w-full h-full flex flex-col items-center space-y-2'>
            <div
              className={`h-2 rounded-full w-full ${
                isSettingsActive ? 'bg-violet' : 'bg-transparent'
              }`}
            ></div>
            <BsFillGridFill
              className={`h-8 w-8 ${
                isSettingsActive ? 'text-violet' : 'text-ghost'
              }`}
            />
            <p
              className={`${
                isSettingsActive ? 'text-violet' : 'text-ghost'
              } text-xs`}
            >
              Settings
            </p>
          </button>
        </Link>
      </nav>
    </React.Fragment>
  )
}

export default DashboardSideNav
