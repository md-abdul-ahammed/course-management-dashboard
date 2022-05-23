import React, { useEffect, useState } from 'react'
import InputField from '../../components/InputField'
import { BsCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addContactInformation } from '../../redux/slices/merchantSlice'

const ContactInformation = ({
  merchantDetailsState,
  pageState,
  progressState,
}) => {
  const dispatch = useDispatch()
  const [merchantDetails, setMerchantDetails] = merchantDetailsState
  const [, setPage] = pageState
  const [, setProgress] = progressState
  const [mobileNumber, setMobileNumber] = useState(
    merchantDetails.page1.mobileNumber
  )
  const [landlineNumber, setLandlineNumber] = useState(
    merchantDetails.page1.landlineNumber
  )
  const [ownerName, setOwnerName] = useState(merchantDetails.page1.ownerName)
  const [ownerEmail, setOwnerEmail] = useState(merchantDetails.page1.ownerEmail)
  const [ownerMobileNumber, setOwnerMobileNumber] = useState(
    merchantDetails.page1.ownerMobileNumber
  )
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let mobileValue = window.localStorage.getItem('Mobile_Number')
    let ownerNameValue = window.localStorage.getItem('Owner_Name')
    let ownerEmailValue = window.localStorage.getItem('Owner_Email')
    let ownerMobileValue = window.localStorage.getItem('Owner_Mobile')

    setMobileNumber(mobileValue)
    setOwnerName(ownerNameValue)
    setOwnerEmail(ownerEmailValue)
    setOwnerMobileNumber(ownerMobileValue)
  }, [])

  const saveIsError = () =>
    mobileNumber === null ||
    mobileNumber.length !== 10 ||
    landlineNumber === null ||
    (landlineNumber.length !== 0 && landlineNumber.length !== 11) ||
    ownerName === null ||
    ownerName.length === 0 ||
    ownerEmail === null ||
    ownerEmail.length === 0 ||
    ownerMobileNumber === null ||
    ownerMobileNumber.length !== 10

  const [mobileNumberError, setMobileNumberError] = useState('')
  const [landlineNumberError, setLandlineNumberError] = useState('')
  const [ownerNameError, setOwnerNameError] = useState('')
  const [ownerEmailError, setOwnerEmailError] = useState('')
  const [ownerMobileNumberError, setOwnerMobileNumberError] = useState('')

  const handleSave = (e) => {
    e.preventDefault()

    if (mobileNumber === null || mobileNumber.length === 0)
      setMobileNumberError('Mobile number is required')
    else if (mobileNumber === null || mobileNumber.length !== 10)
      setMobileNumberError('Enter a valid mobile number')
    if (
      landlineNumber === null ||
      (landlineNumber.length !== 0 && landlineNumber.length !== 11)
    )
      setLandlineNumberError('Enter a valid landline number')
    if (ownerName === null || ownerName.length === 0)
      setOwnerNameError('Owner name is required')
    if (ownerEmail === null || ownerEmail.length === 0)
      setOwnerEmailError('Owner email is required')
    if (ownerMobileNumber === null || ownerMobileNumber.length === 0)
      setOwnerMobileNumberError('Owner mobile number is required')
    else if (ownerMobileNumber === null || ownerMobileNumber.length !== 10)
      setOwnerMobileNumberError('Enter a valid owner mobile number')
    if (saveIsError()) {
      alert('Please fill all the fields correctly')
      return
    }

    dispatch(
      addContactInformation({
        mobileNumber,
        ownerName,
        ownerEmail,
        ownerMobileNumber,
      })
    )

    setMerchantDetails({
      ...merchantDetails,
      page1: {
        ...merchantDetails.page1,
        mobileNumber,
        landlineNumber,
        ownerName,
        ownerEmail,
        ownerMobileNumber,
      },
    })
    setProgress((progress) => progress + 1)
    setPage((page) => page + 1)
    window.localStorage.setItem('PAGE', 2)
  }

  const handleCheck = (e) => {
    e.preventDefault()
    setOwnerMobileNumberError('')
    setChecked(!checked)
  }

  useEffect(() => {
    if (checked) {
      setOwnerMobileNumber(mobileNumber)
    } else {
      setOwnerMobileNumber('')
    }
  }, [checked, mobileNumber])

  return (
    <form className='text-left w-full' onSubmit={(e) => e.preventDefault()}>
      <div className='space-y-2 mb-4'>
        <h1 className='text-xl font-medium text-slate'>
          Contact number at institute
        </h1>
        <div className='h-1 w-36 bg-violet'></div>
      </div>
      <InputField
        className=''
        inputState={[mobileNumber, setMobileNumber]}
        placeholderText='Mobile No.'
        errorState={[mobileNumberError, setMobileNumberError]}
      />
      <InputField
        className=''
        inputState={[landlineNumber, setLandlineNumber]}
        placeholderText='Landline No. (Optional)'
        errorState={[landlineNumberError, setLandlineNumberError]}
      />
      <div className='space-y-2 mb-4'>
        <h1 className='text-xl font-medium text-slate'>
          Institute owner Details
        </h1>
        <div className='h-1 w-36 bg-violet'></div>
      </div>
      <InputField
        className=''
        inputState={[ownerName, setOwnerName]}
        placeholderText="Owner's Name"
        errorState={[ownerNameError, setOwnerNameError]}
      />
      <InputField
        className=''
        inputState={[ownerEmail, setOwnerEmail]}
        placeholderText="Owner's Email"
        errorState={[ownerEmailError, setOwnerEmailError]}
      />
      <button
        className='flex space-x-2 items-center ml-1 select-none'
        onClick={(e) => handleCheck(e)}
      >
        <div
          className={`h-4 w-4 border-gray ${
            !checked ? 'bg-white' : 'bg-violet'
          } border items-center justify-center`}
        >
          <BsCheck
            className={`${!checked ? 'text-transparent' : 'text-white'}`}
          />
        </div>
        <p className='text-slate text-sm'>Same as Institute mobile no.</p>
      </button>
      <InputField
        className=''
        inputState={[ownerMobileNumber, setOwnerMobileNumber]}
        placeholderText="Owner's Mobile No."
        errorState={[ownerMobileNumberError, setOwnerMobileNumberError]}
      />
      <div className='w-full flex items-center justify-center'>
        <button
          onClick={(e) => handleSave(e)}
          className='my-2 transition-all hover:-translate-y-1 border-2 bg-[#9766CD] shadow-md hover:shadow-lg rounded-full px-12 py-2 text-white font-medium'
        >
          Save & Continue
        </button>
      </div>
    </form>
  )
}

export default ContactInformation
