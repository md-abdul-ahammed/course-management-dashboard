import React, { useEffect, useRef, useState } from 'react'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { CloseOutlined } from '@ant-design/icons'
import toast from 'react-hot-toast'
import axios from 'axios'
import { host } from '../../../util/constant/constant'
import { useDispatch, useSelector } from 'react-redux'
import {
  authSelector,
  getInstituteDetails,
} from '../../../redux/slices/authSlice'

export default function MediaManager({ afterSuccess }) {
  const [pendingImages, setPendingImages] = useState([])
  const [pendingVideos, setPendigVideos] = useState([])
  const [existingImages, setExistingImages] = useState([])
  const [existingVideos, setExistingVideos] = useState([])

  const [videos, setVideos] = useState([])
  const [videoFiles, setVideoFiles] = useState([])
  const [images, setImages] = useState([])
  const [imageFiles, setImageFile] = useState([])
  const [thumbnailFiles, setThumbnailFiles] = useState([])
  const [thumbnails, setThumbnails] = useState([])

  const imageInputRef = useRef({})
  const videoInputRef = useRef({})
  const thumbnailInputRef = useRef([])

  const dispatch = useDispatch()
  const { instituteDetails } = useSelector(authSelector)
  console.log(instituteDetails, 'aa')

  useEffect(() => {
    // dispatch(getInstituteDetails())
  }, [])

  const handleUploadVideos = () => {
    if (videoFiles.length !== thumbnailFiles.length) {
      toast.error('Upload Videos and Thumbnails properly')

      return
    }
    console.log('now we can upload')
    const formBody = new FormData()
    formBody.append(
      'id',

      window.localStorage.getItem('INSTITUTE_ID')
    )
    formBody.append('updates', JSON.stringify({}))
    console.log(videoFiles, thumbnailFiles)
    videoFiles.forEach((item) => {
      formBody.append('videos', item)
    })
    thumbnailFiles.forEach((item) => {
      formBody.append('thumbnails', item)
    })
    axios
      .patch(`${host}/institute/update`, formBody, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${window.localStorage.getItem(
            'ACCESS_TOKEN'
          )}`,
        },
      })
      .then((res) => {
        console.log(res)
        afterSuccess()
      })
      .catch((err) => console.log(err))
  }

  const handleUploadImages = () => {
    const formBody = new FormData()
    formBody.append(
      'id',

      window.localStorage.getItem('INSTITUTE_ID')
    )
    formBody.append('updates', JSON.stringify({}))
    imageFiles.forEach((item) => {
      formBody.append('images', item)
    })

    axios
      .patch(`${host}/institute/update`, formBody, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${window.localStorage.getItem(
            'ACCESS_TOKEN'
          )}`,
        },
      })
      .then((res) => {
        console.log(res)
        afterSuccess()
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <section>
        {/* Video Section */}
        <div className='sm:w-5/12 w-full  px-6 py-2  mb-6      shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out m-0'>
          <p className='my-5 font-bold'>Cover Video</p>
          <div>
            <div className='border h-28 w-full lg:my-3 relative rounded-lg flex items-center justify-center'>
              <div>
                <MdAddPhotoAlternate
                  size={30}
                  onClick={() => videoInputRef.current.click()}
                />
                <input
                  multiple
                  accept='video/*'
                  ref={videoInputRef}
                  // onSelect={(e) => console.log(e.target.files)}
                  onChange={(e) => {
                    const filesObj = e.target.files
                    Object.values(filesObj).forEach((item) => {
                      if (item.type.includes('video')) {
                        setVideoFiles((prv) => prv.concat([item]))
                        setVideos((prv) =>
                          prv.concat([URL.createObjectURL(item)])
                        )
                      }
                    })
                  }}
                  type='file'
                  name='video'
                  hidden
                />
              </div>
            </div>
            <p className='text-center my-2'>
              This would be considered as <br /> Institute's demo video
            </p>
          </div>
        </div>

        {videos.length > 0 && (
          <div className=' px-6 py-2 w-full  mb-6 lg:mb-0  shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray '>
            <>
              {videos?.map((item, key) => {
                if (key < 5)
                  return (
                    <div className='flex w-full items-center justify-between space-x-2 border border-dashed my-2 p-5 relative'>
                      <CloseOutlined
                        onClick={() => {
                          console.log(key)
                          setVideoFiles(
                            videoFiles.filter((item, index) => index !== key)
                          )
                          setVideos(
                            videos.filter((item, index) => index !== key)
                          )
                          setThumbnails(
                            thumbnails.filter((item, index) => index !== key)
                          )
                          setThumbnailFiles(
                            thumbnailFiles.filter(
                              (item, index) => index !== key
                            )
                          )
                        }}
                        className='text-red absolute right-2 top-2'
                      />

                      <div>
                        <p>Video no : {key + 1}</p>
                        <video
                          controls
                          src={
                            typeof item === 'string'
                              ? item
                              : URL.createObjectURL(item)
                          }
                          key={key}
                          type='video/mp4'
                          className='w-[300px] h-[200px]'
                        />
                      </div>

                      {thumbnails?.[key]?.length > 0 ? (
                        <div className='h-full'>
                          <p>Thumbnail:</p>
                          <img
                            className='w-[300px] h-[200px]'
                            src={thumbnails[key]}
                            alt=''
                          />
                        </div>
                      ) : (
                        <div className='w-[300px] h-[200px]'>
                          {/* Thumbnail Section */}
                          <div className='  px-6 py-2       shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out'>
                            <p className='my-5 font-bold'>Video Thumbnail</p>
                            <div>
                              <div className='border h-20 w-full lg:my-3 relative rounded-lg flex items-center justify-center'>
                                <div>
                                  <MdAddPhotoAlternate
                                    onClick={() => {
                                      thumbnailInputRef.current[key].click()
                                      console.log('a')
                                      if (
                                        key !== 0 &&
                                        key !== thumbnails?.length
                                      ) {
                                        console.log('b')
                                        alert(
                                          `Please choose ${
                                            thumbnails.length + 1
                                          } no. video thumbnail first !`
                                        )
                                      }
                                    }}
                                    size={30}
                                  />
                                  <input
                                    disabled={
                                      key !== 0 && key !== thumbnails?.length
                                    }
                                    ref={(element) => {
                                      thumbnailInputRef.current[key] = element
                                    }}
                                    onChange={(e) => {
                                      const filesObj = e.target.files
                                      Object.values(filesObj).forEach(
                                        (item) => {
                                          if (item.type.includes('image')) {
                                            setThumbnailFiles((prv) =>
                                              prv.concat([item])
                                            )
                                            setThumbnails((prv) =>
                                              prv.concat([
                                                URL.createObjectURL(item),
                                              ])
                                            )
                                          }
                                        }
                                      )
                                    }}
                                    type='file'
                                    name='thumbnail'
                                    hidden
                                    accept='image/*'
                                  />
                                </div>
                              </div>
                              <p className='text-center my-2'>
                                This image will be used as video thumbnail
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
              })}
            </>
            <div className=' w-full flex justify-center '>
              <div
                onClick={() => {
                  handleUploadVideos()
                }}
                className=' px-5 py-2 my-5 text-white active:bg-medium-violet bg-violet rounded-lg cursor-pointer select-none'
              >
                Upload Videos
              </div>
            </div>
          </div>
        )}
      </section>

      <section>
        {/* Image Section */}
        <div className='sm:w-5/12 w-full  px-6 py-2  mb-6 lg:mb-0     shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out m-0'>
          <p className='my-5 font-bold'>Cover Image</p>
          <div>
            <div className='border h-28 w-full lg:my-3 relative rounded-lg flex items-center justify-center'>
              <div>
                <MdAddPhotoAlternate
                  size={30}
                  onClick={() => imageInputRef.current.click()}
                />
                <input
                  multiple
                  ref={imageInputRef}
                  name='image'
                  onChange={(e) => {
                    const filesObj = e.target.files
                    Object.values(filesObj).forEach((item) => {
                      if (item.type.includes('image')) {
                        setImageFile((prv) => prv.concat([item]))
                        setImages((prv) =>
                          prv.concat([URL.createObjectURL(item)])
                        )
                      }
                    })
                  }}
                  type='file'
                  hidden
                />
              </div>
            </div>
            <p className='text-center my-2'>
              This would be considered as <br /> Institute's cover images
            </p>
          </div>
        </div>
        {images.length > 0 && (
          <div className=' px-6 py-2 w-full  mb-6 lg:mb-0  shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray'>
            <div className='flex items-center flex-wrap'>
              {images?.map((item, index) => (
                <div className='border border-dashed w-fit m-2 relative'>
                  <CloseOutlined
                    onClick={() => {
                      setImages(images.filter((item, idx) => idx !== index))
                      setImageFile(images.filter((item, idx) => idx !== index))
                    }}
                    className='text-red absolute right-2 top-2 hover:scale-125'
                  />
                  <img
                    src={item}
                    key={index}
                    className='w-60 h-40  border-dashed '
                    alt=''
                  />
                </div>
              ))}
            </div>
            <div className=' w-full flex justify-center '>
              <div
                onClick={() => handleUploadImages()}
                className=' px-5 py-2 my-5 text-white active:bg-medium-violet bg-violet rounded-lg cursor-pointer select-none'
              >
                Upload Images
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
