import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsFillCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdminInstitutes } from '../../redux/slices/adminInstitutesSlice'
import HybridIcon from '../HybridIcon/HybridIcon'
import Loader from '../Loader/Loader'
import { isEmpty } from '../utils'

const allData = [
  {
    title: 'Saraswati Institute , Delhi',
  },
  {
    title: 'Narada Institute , Bangalore',
  },
  {
    title: 'Mangalore Institute , Mangalore',
  },
  {
    title: 'IDK Institute , Pune',
  },
  {
    title: 'IDK Institute , Pune',
  },
]

const PendingRequests = () => {
  const dispatch = useDispatch()
  const { loading, adminInstitutes, error, isUpdated } = useSelector(
    (state) => state.adminInstitutes
  )

  useEffect(() => {
    dispatch(fetchAdminInstitutes())
  }, [dispatch, isUpdated])

  if (isEmpty(adminInstitutes)) return null

  return (
    <div className='lg:w-5/12 w-full'>
      <div className='bg-white md:p-3 p-5 rounded-lg'>
        <div className='md:px-8'>
          <div className='flex justify-between items-center'>
            <h4 className='capitalize font-bold text-[21px]'>
              Pending Requests{' '}
            </h4>
            <Link
              className='text-[#AD62FF] font-medium text-[14px]'
              to='/adminDashboard/requests/instituteRequests'
            >
              View All
            </Link>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className='max-h-[320px] overflow-y-auto'>
            {adminInstitutes.filter((data) => data.approval === 4).length ===
            0 ? (
              <div className='py-8 font-medium flex justify-center'>
                No pending requests are available now
              </div>
            ) : (
              <div className='space-y-3 pt-5 '>
                {adminInstitutes
                  ?.filter((data) => data?.approval === 4)
                  .map((data, index, self) => (
                    <div
                      key={index}
                      className={`  
           ${self.length - 1 !== index && 'border-b border-light-gray'}
           flex items-center gap-x-2 pb-2`}
                    >
                      <div className='space-y-1 md:px-8 flex w-full items-center justify-between'>
                        {!isEmpty(data.locations) && (
                          <p className='font-semibold text-[14px]'>
                            {data.name} ,{' '}
                            {isEmpty(data) &&
                              JSON?.parse(data?.locations)?.state}
                          </p>
                        )}

                        <div className='py-[2.5px] text-[#9FA2B4]'>
                          <div className='flex  md:mt-1 mb-2 mt-[-4px] items-center'>
                            {data.classmode === 1 ? (
                              <HybridIcon />
                            ) : (
                              <BsFillCircleFill
                                className={`text-[6px] ${
                                  data.classmode === 2
                                    ? 'text-[#3AC817]'
                                    : 'text-red-600'
                                }`}
                              />
                            )}
                            <span className='ml-2 capitalize text-[#414141]'>
                              {data.classmode === 1
                                ? 'Hybrid'
                                : data.classmode === 2
                                ? 'Online'
                                : 'Offline'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PendingRequests
