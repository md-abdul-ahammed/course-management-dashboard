import React, { useEffect, useState } from 'react';
import { CustomInputField } from '../MerchantDashboardPages/MyProfile/CustomInputField';
import CategorySelect from '../../components/CategorySelect'
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, getInstituteDetails, getUser } from '../../redux/slices/authSlice';
const ProfileHome = () => {
  const dispatch = useDispatch()





    // const [locationFields, setLocationFields] = useState(['New Delhi'])
    // const [locationFieldsError, setLocationFieldsError] = useState('')

      
    const [userName, setUserName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userLocation, setUserLocation] = useState('New Delhi')

    const { instituteDetails, userData } = useSelector(authSelector)
  
    useEffect(() => {
      dispatch(getInstituteDetails())
      dispatch(getUser())
  
    }, [dispatch])

    const [isDisable, setIsDisable] = useState(true)


    return (
        <div className='p-5 mb-16'>
           <div className="heading my-2 ">
           <div className='flex justify-between'>
           <p className='text-2xl '>Profile Section</p>

<div >
{isDisable ? (
     <button
       className='  text-white w-20 rounded-full p-1  ml-auto'
       style={{ background: '#4C4C4C' }}
       onClick={() => {
         setIsDisable(false)
       }}
     >
       {' '}
       Edit{' '}
     </button>
   ) : (
     <button
       className='  text-white w-20 rounded-full p-1  ml-auto'
       style={{ background: '#4C4C4C' }}
       onClick={() => {
         setIsDisable(true)
       }}
     >
       {' '}
       Save{' '}
     </button>
   )}
</div>
           </div>
           </div>

           <div className="mt-5">
           <CustomInputField
                  inputState={[userName, setUserName]}
                  description={userData?.name}
                  className=' lg:full shrink  mb-4 lg:mb-0'
                  disableState={[isDisable, setIsDisable]}
                /> 
           <CustomInputField
                  inputState={[phoneNumber, setPhoneNumber]}
                  description={userData?.phonenumber}
                  className=' lg:full shrink  mb-4 lg:mb-0'
                  disableState={[isDisable, setIsDisable]}
                /> 
           <CustomInputField
                  inputState={[userEmail, setUserEmail]}
                  description={userData?.email}
                  className=' lg:full shrink  mb-4 lg:mb-0'
                  disableState={[isDisable, setIsDisable]}
                /> 

                {/* <CategorySelect
                    categories={['UX Design ', 'Product Design ', 'UI Design ']}
                    selectedState={[
                      locationFields,
                      setLocationFields,
                    ]}
                    placeholderText='Select Field '
                    errorState={[
                      locationFieldsError,
                      setLocationFieldsError,
                    ]}
                  /> */}

                  
                    <div >
                    <select className='shrink w-full px-6 py-2  shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out m-0 focus:outline-none text-xl mt-2' disabled={isDisable ? true : false} onChange={(e) => setUserLocation(e.target.value)}>
                        
                        <option className="text-xl bg-white  focus:outline-none w-full" value="Option 1">Punjab</option>
                        <option className="text-xl bg-white  focus:outline-none w-full" value={userLocation}selected="selected" > {userLocation}</option>
                        <option className="text-xl bg-white  focus:outline-none w-full" value="Option 2">Mumbai</option>
                    </select>
                    </div>
           </div>
        </div>
    );
};

export default ProfileHome;