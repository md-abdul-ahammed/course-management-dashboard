import React, { useState } from 'react'
import LogoWithTitle from '../../assets/logo_title.svg'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import LoginVector1 from '../../assets/studentSignup/vector2.png'
const SelectAgeGrp = () => {
  const [borderCol1, setBorderCol1] = useState(false)
  const [borderCol2, setBorderCol2] = useState(false)
  return (
    <>
      <main className='w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-hidden  font-dm-sans'>
        <section className=' hidden lg:flex px-32 '>
          <img
            src={LogoWithTitle}
            alt='logo'
            className='w-40 h-14 flex flex-row-reverse '
          />
        </section>
        <nav className='lg:hidden flex items-center justify-between w-full px-6 py-4'>
          <button className='text-gray py-4 space-x-2 flex items-center'>
            <IoIosArrowBack />
            <p className=''>Back</p>
          </button>
          <div className='flex-1'></div>
          <img src={LogoWithTitle} alt='Ostello Logo' className='w-auto h-8' />
        </nav>
        <div className='flex h-full p-0 m-0 w-screen justify-center '>
          <section className='h-full overflow-y-auto w-full lg:w-fit flex flex-col lg:flex-row justify-start items-center lg:py-0 lg:px-16'>
            <img
              src={LoginVector1}
              alt=''
              className='hidden lg:flex  mx-auto h-auto justify-center pb-40 items-start'
            />
            <div className='flex flex-col  lg:ml-auto lg:mr-0  px-6  h-3/4  xl:w-2/5 lg:shadow-2xl lg:shadow-lavender pb-20 lg:rounded-2xl '>
              <div className='text-violet ml-auto hidden lg:flex text-3xl'>
                <Link to={'/'}>
                  <AiFillCloseCircle />
                </Link>
              </div>
              <div className='lg:px-10 lg:py-10'>
                <h1 className='text-violet text-3xl lg:text-4xl font-bold'>
                  Select Age Group
                </h1>
                <p className='  py-2'>
                  Platform usage by a minor has to be with the consent of such
                  minor's parent/legal guardian, who agrees to be bound by the
                  <Link to='/terms'>
                    <span className='text-violet'> Terms</span>
                  </Link>
                  <span className='text-violet'> &</span>
                  <Link to='/privacy'>
                    <span className='text-violet'> Privacy policy </span>
                  </Link>
                </p>
                <div
                  className={
                    (borderCol1 ? 'border-violet' : 'border-black') +
                    ' border-2 w-11/12 mt-4  px-3 py-2 rounded-xl flex'
                  }
                >
                  <input
                    className='form-radio h-6 w-6 text-purple-main my-auto'
                    type='radio'
                    id='above18'
                    name='age'
                    value='above18'
                    onClick={() => {
                      setBorderCol1(true)
                      setBorderCol2(false)
                    }}
                  />
                  <label htmlFor='above18' className='px-2 pl-5'>
                    18 & Above
                  </label>
                </div>
                <div
                  className={
                    (borderCol2 ? 'border-violet' : 'border-black') +
                    ' border-2 w-11/12 mt-4  px-3 py-2 rounded-xl flex'
                  }
                >
                  <input
                    className='form-radio h-6 w-6 accent-purple-main my-auto'
                    type='radio'
                    id='below18'
                    name='age'
                    value='below18'
                    onClick={() => {
                      setBorderCol1(false)
                      setBorderCol2(true)
                    }}
                  />
                   
                  {/* <label htmlFor='below18' className='px-2 pl-5'>
                    Below 18
                  </label> */}
                </div>
                <Link to='student-sign-in/student-details'>
                  <button className='bg-violet p-1 mt-10 w-32 h-10 rounded-lg text-white font-xl'>
                    Continue
                  </button>
                </Link>
                <p className='  md:mb-5 font-dm-sans text-light-black text-sm  w-11/12 mx-auto mt-10'>
                  By continuing, you agree to Ostello’s
                  <Link className='text-violet' to='/'>
                    {' '}
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link className='text-violet' to='/'>
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* <section className=" hidden lg:flex  py-4  ">
          <img
            src={LogoWithTitle}
            alt="logo"
            className="w-40 h-14 flex flex-row-reverse "
          />
        </section>
        <section className="h-screen overflow-y-auto w-full  flex justify-start items-center lg:py-6 lg:px-12">
          <nav className="lg:hidden flex items-center justify-between w-full px-6 py-4">
            <Link to="student-sign-in">
              <button className="text-gray py-4 space-x-2 flex items-center">
                <IoIosArrowBack />
                <p className="">Back</p>
              </button>
            </Link>
            <div className="flex-1"></div>
            <img
              src={LogoWithTitle}
              alt="Ostello Logo"
              className="w-auto h-8"
            />
          </nav>

          <img
            src={LoginVector1}
            alt=""
            className="  hidden lg:flex ml-0 mr-auto "
          />

          <div className="flex flex-col  lg:ml-auto lg:mr-0  px-6  h-full   xl:w-2/5 lg:shadow-2xl lg:shadow-red lg:rounded-2xl ">
            <div className="text-violet ml-auto hidden lg:flex text-3xl">
              <Link to={"/"}>
                <AiFillCloseCircle />
              </Link>
            </div>
            <div className="lg:px-10 lg:py-10">
              <h1 className="text-violet text-4xl font-bold">
                Select Age Group
              </h1>
              <p className="  py-2">
                Platform usage by a minor has to be with the consent of such
                minor's parent/legal guardian, who agrees to be bound by the
                <Link to="/terms">
                  <span className="text-violet"> Terms</span>
                </Link>
                <span className="text-violet"> &</span>
                <Link to="/privacy">
                  <span className="text-violet"> Privacy policy </span>
                </Link>
              </p>
              <div
                className={
                  (borderCol1 ? "border-violet" : "border-black") +
                  " border-2 w-11/12 mt-4  px-3 py-2 rounded-xl "
                }
              >
                <input
                  type="radio"
                  id="above18"
                  name="age"
                  value="above18"
                  onClick={() => {
                    setBorderCol1(true);
                    setBorderCol2(false);
                  }}
                />
                <label htmlFor="above18" className="px-2">
                  18 & Above
                </label>
              </div>
              <div
                className={
                  (borderCol2 ? "border-violet" : "border-black") +
                  " border-2 w-11/12 mt-4  px-3 py-2 rounded-xl "
                }
              >
                <input
                  type="radio"
                  id="below18"
                  name="age"
                  value="below18"
                  onClick={() => {
                    setBorderCol1(false);
                    setBorderCol2(true);
                  }}
                />
                 
                <label htmlFor="below18" className="px-2">
                  Below 18
                </label>
              </div>
              <Link to="student-sign-in/student-details">
                <button className="bg-violet p-1 mt-10 w-32 h-10 rounded-lg text-white font-xl">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        // </section> 
      </main>*/}
    </>
  )
}

export default SelectAgeGrp
