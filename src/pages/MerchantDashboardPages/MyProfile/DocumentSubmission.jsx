import axios from 'axios'
import React, { useState } from 'react'
import { MdFileUpload } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { getInstituteDetails } from '../../../redux/slices/authSlice'
import { host } from '../../../util/constant/constant'

export default function DocumentSubmission() {
  const [aadharFile, setaadharFile] = useState()
  const [addressFile, setaddressFile] = useState()
  const [registrationFile, setregistrationFile] = useState([])
  const dispatch = useDispatch()
  const uploadFiles = () => {
    const myFile = document.getElementById('myFile')
    const customText = document.getElementById('custom-text')
    myFile.click()
    myFile.addEventListener('change', function (e) {
      setaadharFile(e.target.files[0])

      if (myFile.value) {
        customText.innerHTML = myFile.value.match(
          // eslint-disable-next-line no-useless-escape
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1]
      } else {
        customText.innerText = 'Upload aadhar card '
      }
    })
  }

  const uploadFiles2 = () => {
    const myFile = document.getElementById('myFile2')
    const customText = document.getElementById('custom-text2')
    myFile.click()
    myFile.addEventListener('change', function (e) {
      setaddressFile(e.target.files[0])

      if (myFile.value) {
        customText.innerHTML = myFile.value.match(
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1]
      } else {
        customText.innerText = 'Upload address proof'
      }
    })
  }

  const handleSave = () => {
    if (
      (!aadharFile && !registrationFile) ||
      (!addressFile && !registrationFile) ||
      (!aadharFile && !addressFile)
    ) {
      let count = 2
      if (aadharFile) count--
      if (addressFile || registrationFile) count--
      if (count > 0)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          toast: true,
          title: `Please upload atleast ${count} documents`,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        })
      return
    }
    const formBody = new FormData()
    formBody.append('id', window.localStorage.getItem('INSTITUTE_ID'))
    formBody.append('adhaardoc', aadharFile)
    formBody.append('addressdoc', addressFile)
    formBody.append('registrationdoc', registrationFile)
    formBody.append('updates', JSON.stringify({}))

    axios
      .patch(`${host}/institute/update`, formBody, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${window.localStorage.getItem(
            'ACCESS_TOKEN'
          )}`,
        },
      })
      .then(() => {
        console.log('uploaded')
        dispatch(getInstituteDetails())
      })
      .catch((err) => {
        console.log('got error', err)
      })
  }

  const uploadFiles3 = () => {
    const myFile = document.getElementById('myFile3')
    const customText = document.getElementById('custom-text3')
    myFile.click()
    myFile.addEventListener('change', function (e) {
      setregistrationFile(e.target.files[0])

      if (myFile.value) {
        customText.innerHTML = myFile.value.match(
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1]
      } else {
        customText.innerText = 'Institute registration document'
      }
    })
  }
  return (
    <div>
      <div>
        <h2 className='text-lg font-medium text-slate my-4'>
          Upload documents (any two)
        </h2>

        <div
          className={` lg:mb-6 px-4 py-3 w-full shadow-md text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat  first-letter:transition ease-in-out m-0`}
          style={{ border: '0.5px dashed ', borderColor: '#2A2A2A' }}
        >
          <div className='flex items-center'>
            <h2
              className=''
              id='custom-text'
              style={{ color: 'rgba(0, 0, 0, 0.68)' }}
            >
              Upload aadhar card{' '}
            </h2>
            <MdFileUpload
              className='ml-auto text-violet lg:text-xl'
              onClick={uploadFiles}
            />
          </div>
          <input type='file' id='myFile' name='filename' className='hidden' />
        </div>

        <div
          className={` px-4 py-3 w-full  lg:mb-6 shadow-md text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat  first-letter:transition ease-in-out m-0`}
          style={{ border: '0.5px dashed ', borderColor: '#2A2A2A' }}
        >
          <div className='flex items-center'>
            <h2
              className=''
              id='custom-text2'
              style={{ color: 'rgba(0, 0, 0, 0.68)' }}
            >
              Upload address proof{' '}
            </h2>
            <MdFileUpload
              className='ml-auto text-violet lg:text-xl'
              onClick={uploadFiles2}
            />
          </div>
          <input type='file' id='myFile2' name='filename' className='hidden' />
        </div>
        <div
          className={` px-4 py-3 w-full shadow-md text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat  first-letter:transition ease-in-out m-0`}
          style={{ border: '0.5px dashed ', borderColor: '#2A2A2A' }}
        >
          <div className='flex items-center'>
            <h2
              className=''
              id='custom-text3'
              style={{ color: 'rgba(0, 0, 0, 0.68)' }}
            >
              Institute registration document{' '}
            </h2>
            <MdFileUpload
              className='ml-auto text-violet lg:text-xl'
              onClick={uploadFiles3}
            />
          </div>
          <input type='file' id='myFile3' name='filename' className='hidden' />
        </div>
      </div>
      <button
        onClick={(e) => handleSave(e)}
        className='my-2 transition-all hover:-translate-y-1 border-2 bg-[#9766CD] shadow-md hover:shadow-lg rounded-full px-10 py-3 text-white font-medium'
      >
        Save & Submit
      </button>
    </div>
  )
}
