import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { ImYoutube } from 'react-icons/im'

import LogoLightWithTitle from '../assets/logo_title_light.svg'
import { FooterDivider } from './mobilefooter/index.styled'

const Footer = ({ className }) => {
  const navigate = useNavigate()
  const socialLinks = [
    {
      title: 'instagram',
      link: 'https://www.instagram.com/ostelloindia/?hl=en',
      icon: <AiFillInstagram />,
    },
    {
      title: 'facebook',
      link: 'https://m.facebook.com/ostellocare/',
      icon: <AiFillFacebook />,
    },
    {
      title: 'youtube',
      link: 'https://youtube.com/channel/UCO0FJ52dFGo4xS6f6NQ-qoQ',
      icon: <ImYoutube />,
    },
    {
      title: 'linkedin',
      link: 'https://www.linkedin.com/company/ostello-india',
      icon: <AiFillLinkedin />,
    },
  ]
  const footerLinks = [
    {
      header: 'About us',
      links: [
        {
          title: 'Who we are',
          url: '/about-us',
          disabled: false,
        },
        {
          title: 'Press',
          url: '/press',
          disabled: true,
        },
        {
          title: 'Careers',
          url: '/career',
          disabled: false,
        },
        {
          title: 'Blogs',
          url: '/blogs',
          disabled: false,
        },
      ],
    },
    {
      header: 'Events',
      url: '/events',
      links: [
        {
          title: 'About Our Events',
          url: '/',
          disabled: true,
        },
        {
          title: 'Scholarship',
          url: '/',
          disabled: true,
        },
      ],
    },
    {
      header: 'Contact Us',
      links: [
        {
          title: 'FAQs',
          url: '/',
          disabled: true,
        },
        {
          title: 'Support',
          url: '/contactus',
          disabled: true,
        },
      ],
    },
    {
      header: 'Terms of Use',
      links: [
        {
          title: 'Terms & Conditions',
          url: '/terms',
        },
        {
          title: 'Privacy Ploicy',
          url: '/privacy',
        },
        {
          title: 'Refund Policy',
          url: '/',
        },
        {
          title: 'Trust & Safety',
          url: '/',
        },
        {
          title: 'Support',
          url: '/contactus',
        },
      ],
    },
  ]

  return (
    <>
      <footer className=' pt-20  bg-solid'>
        <>
          <div className='bg-[#1C1C1C]  mx-auto text-white'>
            <div className='lg:container lg:mx-auto grid lg:grid-cols-5 grid-cols-1'>
              <div className='flex flex-col w-fit px-5'>
                <img
                  className={`lg:w-56 w-40`}
                  src={LogoLightWithTitle}
                  alt=''
                />
                <div className='lg:flex  items-center justify-center space-x-5  hidden my-3   '>
                  {socialLinks.map((item, i) => (
                    <div className='' key={i}>
                      <a
                        className='text-white'
                        href={item.link}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <div className='w-8 cursor-pointer text-4xl'>
                          {item.icon}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {footerLinks.map((item, i) => (
                <div key={i} className='mb-5 px-5 hidden lg:block '>
                  <p
                    onClick={() => {
                      item.url && navigate(item.url)
                    }}
                    className='font-medium mb-2 lg:mb-4 text-lg lg:text-2xl text-white'
                  >
                    {item.header}
                  </p>
                  <div className='flex-col'>
                    {item.links.map((link, i) => (
                      <Link
                        className='block lg:text-xl text-md  text-white hover:text-violet'
                        key={i}
                        to={link.url}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className={`grid-cols-1  w-screen  lg:hidden `}>
                {footerLinks.map((item, i) => (
                  <div key={i}>
                    <div className='mb-5 pl-10 '>
                      <p className='font-bold mb-2  mt-5 text-xl  '>
                        {item.header}
                      </p>
                      <div className='flex-col'>
                        {item.links.map((link, i) => (
                          <Link
                            className='block  text-sm font-medium text-white hover:text-violet'
                            key={i}
                            to={link.url}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <FooterDivider
                      className={`${i === footerLinks.length - 1 && 'hidden'}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>

        <div className='flex space-x-5 items-center justify-center lg:hidden my-2 mt-10 '>
          {socialLinks.map((item, i) => (
            <div className='' key={i}>
              <a href={item.link} target='_blank' rel='noreferrer'>
                <div className='w-[30px] cursor-pointer text-white text-4xl'>
                  {item.icon}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className='text-white text-center font-medium text-md py-2 pb-20 lg:pb-5'>
          2022 &copy; Ostello India Private Limited{' '}
        </div>
      </footer>
    </>
  )
}

export default Footer
