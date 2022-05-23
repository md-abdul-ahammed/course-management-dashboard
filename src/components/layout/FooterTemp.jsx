import React from 'react'
import LogoLightWithTitle from '../../images/footerLogo.svg'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function FooterTemp() {
  const socialLinks = [
    {
      title: 'instagram',
      link: 'https://www.instagram.com/ostelloindia/?hl=en',
      icon: <AiOutlineInstagram />,
    },
    {
      title: 'facebook',
      link: 'https://m.facebook.com/ostellocare/',
      icon: <FaFacebookF />,
    },
    {
      title: 'youtube',
      link: 'https://youtube.com/channel/UCO0FJ52dFGo4xS6f6NQ-qoQ',
      icon: <AiFillYoutube />,
    },
    {
      title: 'linkedin',
      link: 'https://www.linkedin.com/company/ostello-india',
      icon: <FaLinkedinIn />,
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
    <div>
      <footer className=' py-10 md:hidden'>
        <>
          <div className='bg-[#1C1C1C] container mx-auto text-white '>
            <div className='grid md:flex  grid-col-1 md:justify-around     '>
              <div className='flex flex-col '>
                <img
                  className={`w-40 lg:w-60 mr-auto ml-10 md:m-0`}
                  src={LogoLightWithTitle}
                  alt=''
                />
                <div className='md:flex space-x-5 items-center justify-center hidden my-3   '>
                  {socialLinks.map((item, i) => (
                    <div className='' key={i}>
                      <a href={item.link} target='_blank' rel='noreferrer'>
                        <div className='w-8 cursor-pointer'>{item.icon}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {footerLinks.map((item, i) => (
                <div key={i} className='mb-5 px-5 hidden sm:block '>
                  <p
                    onClick={() => {
                      item.url && navigate(item.url)
                    }}
                    className='font-medium mb-2 lg:mb-4 text-lg lg:text-2xl '
                  >
                    {item.header}
                  </p>
                  <div className='flex-col'>
                    {item.links.map((link, i) => (
                      <Link
                        className='block lg:text-xl text-md '
                        key={i * 7}
                        to={link.url}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className='grid-cols-1 divide-solid divide-y divide-gray-600 md:divide-none w-screen  sm:hidden'>
                {footerLinks.map((item, i) => (
                  <div key={i} className='mb-5 pl-10 '>
                    <p className='font-bold mb-2  mt-5 text-lg  '>
                      {item.header}
                    </p>
                    <div className='flex-col'>
                      {item.links.map((link, i) => (
                        <Link
                          className='block  text-md font-medium '
                          key={i * 7}
                          to={link.url}
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>

        <div className='flex space-x-5 items-center justify-center md:hidden my-2 mt-10 '>
          {socialLinks.map((item, i) => (
            <div className='' key={i}>
              <a href={item.link} target='_blank' rel='noreferrer'>
                <div className='w-[30px] cursor-pointer'>{item.icon}</div>
              </a>
            </div>
          ))}
        </div>

        <div className='text-white text-center font-medium text-lg py-2'>
          2022 &copy; Ostello India Private Limited{' '}
        </div>
      </footer>
    </div>
  )
}
