import React, { useEffect } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import NavHeader from '../../components/NavHeader'
import axios from 'axios'
import { host } from '../../util/constant/constant'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, getInstituteDetails } from '../../redux/slices/authSlice'
import { isEmpty } from '../../components/utils'

const Finished = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { instituteDetails, loading } = useSelector(authSelector)

  const approval = instituteDetails.approval
  useEffect(() => {
    if (window.localStorage.getItem('OWNER_ID') === null) {
      navigate('/merchant/details')
    }

    axios
      .get(`${host}/users/id?id=${window.localStorage.getItem('OWNER_ID')}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem(
            'ACCESS_TOKEN'
          )}`,
        },
      })
      .then((res) => {
        if (res.data.message.institute === null) {
          navigate('/merchant/details')
          return
        }

        window.localStorage.setItem(
          'INSTITUTE_ID',
          res.data.message.institute.id9090
        )
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (isEmpty(instituteDetails)) {
      dispatch(getInstituteDetails())
    }
    if (!loading && instituteDetails.approval === 1) {
      navigate('/merchant/dashboard')
    }
  }, [loading, instituteDetails])

  return (
    <main className='merchant-details-bg'>
      <NavHeader className='' type='merchant' isForm={false} />
      <main className='flex flex-col justify-between items-center w-screen h-screen m-0 p-0 overflow-y-auto overflow-x-hidden font-dm-sans  '>
        <div className='flex flex-col items-center justify-center h-fit bg-white rounded-2xl w-full lg:w-4/6 px-6 lg:px-12 py-2 lg:py-12 mt-4'>
          <div className='flex flex-col items-center justify-center w-full font-dm-sans'>
            <div className='mb-6 w-36 h-36 flex justify-center items-center rounded-full bg-gradient-to-br from-cyan via-turquoise to-lavender'>
              <BsCheck2 className='text-8xl text-white' />
            </div>
            <h1 className='my-2 text-2xl text-center w-max font-bold'>
              Institute Details Submitted
            </h1>
            <h2 className='text-gray text-center  text-lg'>
              {approval === 4
                ? 'Our team will verify the details and update once you are approved by the admin panel'
                : approval === 2
                ? 'Your request has been rejected,Please refill the form again.'
                : approval === 3 &&
                  'Your application is on hold. Please connect with our support team for more details'}
            </h2>

            <Link
              to={
                approval === 4
                  ? '/merchant'
                  : approval === 3
                  ? '/contactus'
                  : approval === 2 && '/merchant/details'
              }
              className='bg-violet text-white uppercase px-12 py-2 rounded-full'
            >
              Go to{' '}
              {approval === 4
                ? 'Homepage'
                : approval === 3
                ? 'Contact page'
                : approval === 2 && 'Registration forms'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </main>
  )
}

export default Finished
