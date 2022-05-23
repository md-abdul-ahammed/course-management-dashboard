import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import CourseSubject from '../CourseAdding/DropDowns/CourseSubject'

const Acadamics = () => {
  const [isDropDown10, setIsDropDown10] = useState(false)
  const [isDropDown20, setIsDropDown20] = useState(false)
  const [isDropDown30, setIsDropDown30] = useState(false)
  return (
    <>
      <div className='lg:flex  gap-3 bg-white rounded-lg  lg:my-5'>
        <div className='reltive'>
          <div
            className={` px-4 py-3 w-full mb-5 lg:mb-5 lg:w-40  rounded-lg text-base cursor-pointer font-normal text-white bg-violet flex   first-letter:transition ease-in-out m-0`}
            onClick={() => {
              setIsDropDown10(!isDropDown10)
              setIsDropDown20(false)
              setIsDropDown30(false)
            }}
          >
            Select Class
          </div>
          <div className='block lg:absolute '>
            {isDropDown10 && (
              <div
                className='bg-white mb-5 lg:mb-5 lg:w-40 rounded-lg py-3 flex-col text-[#939393] px-5 space-y-5 whitespace-nowrap'
                style={{
                  boxShadow: '0px 2px 40px rgba(125, 35, 224, 0.15)',
                }}
                onChange={(e) => {
                  console.log(e)
                  //   if (e.target.checked) {
                  //     selectClassValues.push(e.target.name);
                  //   } else {
                  //     selectClassValues.pop(e.target.checked);
                  //   }
                  //   console.log(selectClassValues);

                  //   window.localStorage.setItem(
                  //     "selectClass_Checked",
                  //     JSON.stringify(selectClassValues)
                  //   );
                }}
              >
                <div className='flex items-center space-x-3'>
                  <input
                    type='checkbox'
                    name='Pre-nursery'
                    className='text-xl Pre-nursery'
                  />{' '}
                  <label htmlFor='Pre-nursery' className='text-xl'>
                    Pre-nursery
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input
                    type='checkbox'
                    name='Nursery'
                    className='text-xl Nursery'
                  />{' '}
                  <label htmlFor='Nursery' className='text-xl'>
                    Nursery
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='KG' className='text-xl KG' />{' '}
                  <label htmlFor='KG' className='text-xl'>
                    KG
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input
                    type='checkbox'
                    name='Class 1'
                    className='text-xl Class 1'
                  />{' '}
                  <label htmlFor='Class 1' className='text-xl'>
                    Class 1
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input
                    type='checkbox'
                    name='Class 2'
                    className='text-xl Class 2'
                  />{' '}
                  <label htmlFor='Class 2' className='text-xl'>
                    Class 2
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input
                    type='checkbox'
                    name='Class 3'
                    className='text-xl Class 3'
                  />{' '}
                  <label htmlFor='Class 3' className='text-xl'>
                    Class 3
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input
                    type='checkbox'
                    name='Class 4'
                    className='text-xl Class 4'
                  />{' '}
                  <label htmlFor='Class 4' className='text-xl'>
                    Class 4
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input
                    type='checkbox'
                    name='Class 5'
                    className='text-xl Class 5'
                  />{' '}
                  <label htmlFor='Class 5' className='text-xl'>
                    Class 5
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='Class 6' className='text-xl' />{' '}
                  <label for='Class 6' className='text-xl'>
                    Class 6
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='Class 7' className='text-xl' />{' '}
                  <label for='Class 7' className='text-xl'>
                    Class 7
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='Class 8' className='text-xl' />{' '}
                  <label for='Class 8' className='text-xl'>
                    Class 8
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='Class 9' className='text-xl' />{' '}
                  <label for='Class 9' className='text-xl'>
                    Class 9
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='Class 10' className='text-xl' />{' '}
                  <label for='Class 10' className='text-xl'>
                    Class 10
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='Class 11' className='text-xl' />{' '}
                  <label for='Class 11' className='text-xl'>
                    Class 11
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='Class 12' className='text-xl' />{' '}
                  <label for='Class 12' className='text-xl'>
                    Class 12
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=''>
          <div
            className='flex items-center mb-5 lg:mb-5 rounded-lg cursor-pointer text-lg px-3 py-2 border '
            onClick={() => {
              setIsDropDown20(!isDropDown20)
              setIsDropDown30(false)
              setIsDropDown10(false)
            }}
          >
            <input
              type='text'
              className='text-slate focus:outline-none cursor-pointer w-full lg:w-36 bg-white'
              placeholder='Select Subjects'
              disabled
            />
            <MdKeyboardArrowDown
              className={`text-2xl ${isDropDown20 ? 'hidden' : 'flex'}`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isDropDown20 ? 'flex' : 'hidden'}`}
            />
          </div>

          <div
            className=' lg:absolute left-0 w-full h-auto bg-white  '
            style={{
              boxShadow: '0px 2px 40px rgba(125, 35, 224, 0.15)',
            }}
          >
            {isDropDown20 && <CourseSubject />}
          </div>
        </div>

        <div className='relative'>
          <div
            className='flex items-center  lg:w-44  rounded-lg text-lg px-3 py-2 border cursor-pointer '
            onClick={() => {
              setIsDropDown30(!isDropDown30)
              setIsDropDown20(false)
              setIsDropDown10(false)
            }}
          >
            <input
              type='text'
              className='text-slate focus:outline-none cursor-pointer w-full lg:w-32 bg-white'
              placeholder='Select Board'
              disabled
            />
            <MdKeyboardArrowDown
              className={`text-2xl ${isDropDown30 ? 'hidden' : 'flex'}`}
            />
            <MdKeyboardArrowUp
              className={`text-2xl ${isDropDown30 ? 'flex' : 'hidden'}`}
            />
          </div>
          <div className='block lg:absolute '>
            {isDropDown30 && (
              <div
                className='bg-white w-full m-auto rounded-lg  py-3 flex-col text-[#939393] px-5 space-y-5'
                style={{
                  boxShadow: '0px 2px 40px rgba(125, 35, 224, 0.15)',
                }}
                onChange={(e) => {
                  console.log(e)
                  //   if (e.target.checked) {
                  //     selectBoardValues.push(e.target.name);
                  //   } else {
                  //     selectBoardValues.pop(e.target.checked);
                  //   }
                  //   console.log(selectBoardValues);

                  //   window.localStorage.setItem(
                  //     "selectBoard_Checked",
                  //     JSON.stringify(selectBoardValues)
                  //   );
                }}
              >
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='CBSE' className='text-xl' />{' '}
                  <label for='CBSE' className='text-xl'>
                    CBSE
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='ICSE' className='text-xl' />{' '}
                  <label for='ICSE' className='text-xl'>
                    ICSE
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='NIOS' className='text-xl' />{' '}
                  <label for='NIOS' className='text-xl'>
                    NIOS
                  </label>
                </div>
                <div className='flex items-center space-x-3'>
                  <input type='checkbox' name='State' className='text-xl' />{' '}
                  <label for='State' className='text-xl'>
                    State
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Acadamics
