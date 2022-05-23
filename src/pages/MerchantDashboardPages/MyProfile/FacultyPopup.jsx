import { useState } from 'react'
import Swal from 'sweetalert2'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { GrFormClose } from 'react-icons/gr'
import axios from 'axios'
import { host } from '../../../util/constant/constant'
import { isEmpty } from '../../../components/utils'

const FacultyPopup = ({
  showPopUpState1,
  valuesState,
  title,
  className = '',
  fileSrcState,
  name1 = 'Faculty Name',
  name2 = 'Qualification',
  name3 = 'facultyOverview',
}) => {
  const [, setShowPopUp1] = showPopUpState1
  const [, setFacultyValues] = valuesState
  const [, setFilePathValue] = fileSrcState
  const [filePath, setFilePath] = useState('')
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [images, setImages] = useState([])
  const [videos, setVideos] = useState([])

  const uploadFiles = () => {
    const myFile = document.getElementById('myFile')
    const customText = document.getElementById('custom-text')
    myFile.click()
    myFile.addEventListener('change', function () {
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

  const imageHandleChange = (e) => {
    setImages([])
    setVideos([])
    if (e.target.files) {
      console.log(e.target.files)
      const fileDetails = e.target.files[0]
      let filesArray = e.target.files
      console.log('it', e.target.files)
      Object.values(filesArray).forEach((item) => {
        if (item.type.toLowerCase().includes('video')) {
          console.log('Its a video')
          setVideos((prev) => [...prev, item])
        }
        if (item.type.toLowerCase().includes('image')) {
          console.log('its an image')
          setImages((prev) => [...prev, item])
        }
      })
      if (fileDetails.size > 1e6) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          toast: true,
          title: `Please upload a file smaller than 5 MB`,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        })
        return
      } else {
        const fileArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        )
        setFilePath((prevImages) => prevImages.concat(fileArray))
        Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
      }
    }
  }

  const handleSave = () => {
    if (
      !isEmpty(images) &&
      !isEmpty(input1) &&
      !isEmpty(input2) &&
      !isEmpty(input3)
    ) {
      setShowPopUp1(false)
      setFacultyValues((prev) => {
        return [
          ...prev,
          {
            src: filePath,
            name: input1,
            qualification: input2,
            overview: input3,
          },
        ]
      })

      setFilePathValue((prev) => {
        return [...prev, filePath]
      })

      const values = {
        src: filePath,
        name: input1,
        qualification: input2,
        overview: input3,
      }

      axios
        .patch(
          `${host}/institute/faculty`,
          {
            id: window.localStorage.getItem('INSTITUTE_ID'),
            updates: {
              faculty: values,
            },
          },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${window.localStorage.getItem(
                'ACCESS_TOKEN'
              )}`,
            },
          }
        )
        .catch((e) => console.error(e))
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        toast: true,
        title: `Please Fill Every Thing`,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      })
    }
  }

  return (
    <form
      action=''
      className=' absolute w-screen h-screen'
      style={{ background: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className='w-10/12 lg:w-96 px-6  shadow-md rounded-xl text-base font-normal text-slate bg-white  border-2 border-solid border-light-gray '
        style={{
          position: 'absolute',
          transform: 'translate(-50%,-50%)',
          marginRight: '-50%',
          top: '50%',
          left: '50%',
        }}
      >
        <div className='flex items-center justify-center'>
          <h1 className='text-violet font-bold text-xl py-3 md:py-5  '>
            {title}
          </h1>
          <GrFormClose
            className=' w-7 h-7 shadow-lavender p-1 text-lg rounded-full ml-auto '
            style={{
              boxShadow: '0px 4px 34px rgba(136, 136, 136, 0.4)',
              backgroundColor: 'white',
            }}
            onClick={(e) => {
              setShowPopUp1(false)
            }}
          />{' '}
        </div>
        <div className='space-y-3 lg:space-y-4'>
          <p className='text-red/70'>Please upload a image smaller than 5 MB</p>
          <div className='border h-28 w-full lg:my-3 relative rounded-lg'>
            <MdAddPhotoAlternate
              className='text-3xl   mb-auto'
              style={{
                position: 'absolute',
                transform: 'translate(-50%,-50%)',
                top: '50%',
                left: '50%',
              }}
              onClick={uploadFiles}
            />
            <input
              type='file'
              accept='image/*'
              multiple
              id='myFile'
              name='filename'
              className='hidden'
              onChange={imageHandleChange}
              required
            />
            <h2
              className='w-full text-center'
              id='custom-text'
              style={{
                color: 'rgba(0, 0, 0, 0.68)',
                position: 'absolute',
                transform: 'translate(-50%,-50%)',
                top: '80%',
                left: '50%',
              }}
            />
          </div>

          <div
            className={`${className} border w-12/12 rounded-lg py-2 mr-auto`}
          >
            <input
              type='text'
              className={` w-full focus:outline-none px-5 text-lg`}
              name='name1'
              placeholder={name1}
              required
              onChange={(e) => {
                setInput1(e.target.value)
              }}
            />
          </div>
          <div
            className={`${className} border w-12/12 rounded-lg py-2 mr-auto`}
          >
            <input
              type='text'
              className='w-full focus:outline-none px-5 text-lg'
              name='name2'
              placeholder={name2}
              required
              onChange={(e) => {
                setInput2(e.target.value)
              }}
            />
          </div>
          <div className={` border w-12/12 rounded-lg py-2 mr-auto`}>
            <textarea
              className='w-full focus:outline-none px-5 h-36 text-lg'
              rows='3'
              cols='50'
              name='name3'
              required
              placeholder={name3}
              onChange={(e) => {
                setInput3(e.target.value)
              }}
            />
          </div>
        </div>

        <button
          className='bg-violet text-white  w-full py-3 rounded-lg my-6 mr-auto'
          onClick={(e) => {
            e.preventDefault()

            handleSave()
          }}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default FacultyPopup
