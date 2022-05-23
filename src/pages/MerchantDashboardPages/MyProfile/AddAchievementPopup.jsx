import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { isEmpty } from '../../../components/utils'
import { host } from '../../../util/constant/constant'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { GrFormClose } from 'react-icons/gr'

const AddAchievementPopup = ({
  showPopUpState1,
  valuesState,
  title,
  fileSrcState,
  showDropDown,
  name3 = 'facultyOverview',
}) => {
  const [, setShowPopUp1] = showPopUpState1
  const [achievementValues, setAchievementValues] = valuesState
  const [isDropDown6, setIsDropDown6] = showDropDown
  const [filePath, setFilePath] = useState('')
  const [description, setDescription] = useState('')
  const [aTitle, setATitle] = useState('')
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
        customText.innerText = ''
      }
    })
  }

  const handleSubmit = () => {
    // const trying = () => {
    //   const myForm = new FormData()
    //   myForm.append('instituteid', window.localStorage.getItem('INSTITUTE_ID'))
    //   myForm.append('title', 'albi')
    //   myForm.append('image', images[0])
    //   myForm.append('description', 'dAlbi')
    //   console.log(aTitle, description, images[0])

    //   axios
    //     .post(
    //       `${'https://1a6f-49-207-201-55.in.ngrok.io'}/achievements/`,
    //       myForm,
    //       {
    //         headers: {
    //           'Access-Control-Allow-Origin': '*',
    //           Authorization: `Bearer ${window.localStorage.getItem(
    //             'ACCESS_TOKEN'
    //           )}`,
    //         },
    //       }
    //     )
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.error(err))
    // }
    if (isEmpty(aTitle) || isEmpty(description) || isEmpty(images)) {
      return alert('Fill the form.')
    }
    // trying()
    // const temp = [JSON.stringify(values)]
    // achievementValues?.forEach((item) => temp.push(JSON.stringify(item)))
    const myForm = new FormData()
    myForm.append('instituteid', window.localStorage.getItem('INSTITUTE_ID'))
    myForm.append('title', title)
    myForm.append('image', images[0])
    myForm.append('description', description)

    axios
      .patch(`${host}/achievements/`, myForm, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${window.localStorage.getItem(
            'ACCESS_TOKEN'
          )}`,
        },
      })
      .then((res) => {
        toast.info('Achievement sent successfully, wait for admin approval.')
        setShowPopUp1(false)
      })
      .catch((err) => console.error(err))
  }
  console.log(window.localStorage.getItem('INSTITUTE_ID'))
  const imageHandleChange = (e) => {
    setImages([])
    setVideos([])
    if (e.target.files) {
      setFilePath('')
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
      const fileDetails = e.target.files[0]
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

  return (
    <form
      action=''
      className='z-10 absolute w-screen h-screen'
      style={{ background: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className='w-10/12 lg:w-[600px]  px-6  shadow-md rounded-xl z-10 text-base font-normal text-slate bg-white  border-2 border-solid border-light-gray '
        style={{
          position: 'absolute',
          transform: 'translate(-50%,-50%)',
          marginRight: '-50%',
          top: '50%',
          left: '50%',
        }}
      >
        <div className='flex items-center justify-center'>
          <h1 className='text-violet font-bold text-xl py-3 lg:py-5 '>
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
          <div className='border min-h-28 w-full lg:my-3 relative rounded-lg flex'>
            {isEmpty(images) && isEmpty(videos) ? (
              <div className='h-28'>
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
              </div>
            ) : (
              <div className='flex items-center  justify-between min w-full'>
                {!isEmpty(images) && (
                  <div className='p-2'>
                    <div className='flex  relative'>
                      <img
                        className='w-36 '
                        src={URL.createObjectURL(images[0])}
                        alt=''
                      />
                      <p
                        onClick={() => {
                          setImages((prev) =>
                            [...prev].filter(
                              (prevItem) => prevItem !== images[0]
                            )
                          )
                        }}
                        className='absolute right-2 top-2 bg-[rgba(0,0,0,0.4)]
                          cursor-pointer text-red active:opacity-80 ring-1 ring-red rounded-full h-4 w-4 flex items-center justify-center font-bold'
                      >
                        x
                      </p>
                    </div>
                    {/* <p>Images:</p>
                    <div className='flex items-center flex-wrap space-x-2 '>
                      {images.slice(0, 1)?.map((item, index) => (
                        <div className='flex relative'>
                          <img
                            className='w-36 '
                            src={URL.createObjectURL(item)}
                            alt=''
                          />
                          <p
                            onClick={() => {
                              setImages((prev) =>
                                [...prev].filter(
                                  (prevItem) => prevItem !== item
                                )
                              )
                            }}
                            className='absolute right-2 top-2 bg-[rgba(0,0,0,0.4)]
                          cursor-pointer text-red active:opacity-80 ring-1 ring-red rounded-full h-4 w-4 flex items-center justify-center font-bold'
                          >
                            x
                          </p>
                        </div>
                      ))}
                    </div> */}
                  </div>
                )}
                {/* {!isEmpty(videos) && (
                  <div className='p-2'>
                    <p>Videos:</p>
                    <div className='flex items-center '>
                      {videos?.map((item) => (
                        <video
                          className='w-36 '
                          src={URL.createObjectURL(item)}
                          alt=''
                        />
                      ))}
                    </div>
                    {console.log(URL.createObjectURL(images?.[0]))}
                  </div>
                )} */}
                {/* <div>
                  <MdAddPhotoAlternate
                    className='text-3xl ml-5'
                    onClick={uploadFiles}
                  />
                </div> */}
              </div>
            )}
            <input
              type='file'
              accept='image/*'
              multiple
              id='myFile'
              name='filename'
              className='hidden'
              onChange={imageHandleChange}
            />

            {/* <h2
              className='w-full text-center'
              id='custom-text'
              style={{
                color: 'rgba(0, 0, 0, 0.68)',
                position: 'absolute',
                transform: 'translate(-50%,-50%)',
                top: '80%',
                left: '50%',
              }}
            /> */}
          </div>

          <div className={` border w-12/12 rounded-lg py-2 mr-auto`}>
            <input
              className='w-full focus:outline-none px-5  text-lg'
              name='title'
              placeholder={'Title'}
              onChange={(e) => {
                setATitle(e.target.value)
              }}
            />
          </div>
          <div className={` border w-12/12 rounded-lg py-2 mr-auto`}>
            <textarea
              className='w-full focus:outline-none px-5 h-44 text-lg'
              rows='4'
              cols='50'
              name='name3'
              placeholder={name3}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
          </div>
        </div>

        <button
          className='bg-violet text-white  w-full py-3 rounded-lg my-6 mr-auto'
          onClick={(e) => {
            e.preventDefault()
            handleSubmit()

            // if (filePath && description) {
            //   setShowPopUp1(false)
            //   setIsDropDown6(!isDropDown6)

            //   const d = new Date()
            //   const timestamp = `${d.getDate()} ${d.getMonth()} ${d.getFullYear()}`

            //   setAchievementValues((prev) => {
            //     return [
            //       ...prev,
            //       {
            //         src: filePath,
            //         views: 0,
            //         boosts: 0,
            //         timestamp,
            //         comments: [],
            //         description,
            //       },
            //     ]
            //   })

            //   const values = {
            //     src: filePath,
            //     views: 0,
            //     boosts: 0,
            //     comments: [],
            //     description,
            //     timestamp,
            //   }

            //   axios
            //     .patch(
            //       `${host}/institute`,
            //       {
            //         id: window.localStorage.getItem('INSTITUTE_ID'),
            //         updates: {
            //           achievements: values,
            //         },
            //       },
            //       {
            //         headers: {
            //           'Access-Control-Allow-Origin': '*',
            //           Authorization: `Bearer ${window.localStorage.getItem(
            //             'ACCESS_TOKEN'
            //           )}`,
            //         },
            //       }
            //     )
            //     .catch((e) => console.error(e))
            // } else {
            //   Swal.fire({
            //     position: 'top-end',
            //     icon: 'error',
            //     toast: true,
            //     title: `Please Fill Every Thing`,
            //     showConfirmButton: false,
            //     timer: 1500,
            //     timerProgressBar: true,
            //   })
            // }
          }}
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default AddAchievementPopup
