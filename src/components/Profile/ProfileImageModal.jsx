import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GiCancel } from "react-icons/gi";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:'5px'
};

export default function ProfileImageModal({open, setOpen,handleOpen ,  image, selectImage, setSelectedImage , name}) {

  const handleClose = () => setOpen(false);

  const uploadFiles1 = () => {
    const myFile = document.getElementById('myFile1')
    myFile.click()
  }

  const [uploadingImage, setUploadingImage] = React.useState('')

  const imageHandleChange = (e) => {
    // setImages([])
    console.log(e.target.files);
    if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(false)
        setUploadingImage(e.target.files[0]);
    }
    // if (e.target.files) {
      // FilterImagesAndVideos({
      //   filesArray: e.target.files,
      //   setImages,
      //   setVideos,
      // })
    //   let filesArray = e.target.files
    //   Object.values(filesArray).forEach((item) => {

    //     if (item.type.toLowerCase().includes('image')) {
    //       console.log('its an image')
    //       setImages((prev) => (!isEmptyField(prev) ? [...prev, item] : [item]))
    //     }
    //   })
    //   const fileArray = Array.from(e.target.files).map((file) =>
    //     URL.createObjectURL(file)
    //   )
    //   setSelectedImages((prevImages) => prevImages.concat(fileArray))
    //   setImageCounter((prev) => prev + fileArray.length)
    //   Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    // }
  }


  const uploadImage = () => {
    handleClose()
  }

  return (
      
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        { selectImage ? 
            <Box sx={style}>
            <div className="float-right ">
                          <GiCancel
                            onClick={() => {
                                handleClose()
                            }}
                            className="text-right text-2xl text-violet cursor-pointer"
                          ></GiCancel>
                        </div>
                {
                  image ?  <img src={image}  className='mx-auto ' style={{height:'120px', width:'120px', borderRadius:'50%'}} alt="" /> : <div style={{height:'120px', width:'120px', borderRadius:'50%'}} className='bg-violet mx-auto flex items-center justify-center p-1 text-white text-5xl '>
                  {name?.slice(0, 1).toUpperCase()}
                </div>
                }
    
                <div className='mt-3'>
                    <p className='bg-ghost/20 rounded p-2 text-xl text-center cursor-pointer' onClick={() => uploadFiles1()}>Choose from Gallery</p>
                    <input
                            type='file'
                            multiple
                            id='myFile1'
                            name='filename'
                            className='hidden'
                            onChange={imageHandleChange}
                          />
                          <p className='bg-ghost/20 rounded p-2 text-xl text-center cursor-pointer my-2'>Open Camera</p>
                          <p className='bg-ghost/20 rounded p-2 text-xl text-center text-red/90 cursor-pointer'>Remove Photo</p>
                </div>
            </Box> :  <Box sx={style}>
        <div className="float-right ">
                      <GiCancel
                        onClick={() => {
                            handleClose()
                        }}
                        className="text-right text-2xl text-violet cursor-pointer"
                      ></GiCancel>
                    </div>

            {
                uploadingImage && <img src={URL.createObjectURL(uploadingImage)} className='mx-auto ' style={{height:'120px', width:'120px', borderRadius:'50%'}} alt="" />
            }

            <div className='mt-3'>
                <p className='bg-ghost/20 rounded p-2 text-xl text-center cursor-pointer' onClick={() => uploadImage()}>Confirm</p>
                {/* <input
                        type='file'
                        multiple
                        id='myFile1'
                        name='filename'
                        className='hidden'
                        onChange={imageHandleChange}
                      /> */}
                      <p onClick={() => handleClose()} className='bg-ghost/20 rounded p-2 text-xl mt-2 text-center text-red/90 cursor-pointer'>Cancel</p>
            </div>
        </Box>
        }
       
      </Modal>
    </div>
  );
}