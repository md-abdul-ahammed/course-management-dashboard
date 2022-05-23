import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { GiCancel } from "react-icons/gi";
import image1 from '../../assets/socailicons/Vector.png'
import image2 from '../../assets/socailicons/Vector (1).png'
import image3 from '../../assets/socailicons/Vector (2).png'
import image4 from '../../assets/socailicons/Vector (3).png'
import image5 from '../../assets/socailicons/Vector (4).png'


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

export default function ShareModal({open, setOpen,handleOpen}) {

  const handleClose = () => setOpen(false);


  return (
      
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='flex justify-between mb-3'>
            <p className='text-2xl'>Share Via</p>
            <GiCancel
                            onClick={() => {
                                handleClose()
                            }}
                            className="text-right text-2xl  cursor-pointer"
                          ></GiCancel>
                          
            </div>

            <div className='flex justify-between'>
                <div className='border p-2 rounded-xl'>
                    <img style={{height:'40px', width:'40px'}} src={image1} alt="" />
                </div>
                <div className='border p-2 rounded-xl'>
                    <img style={{height:'40px', width:'40px'}} src={image2} alt="" />
                </div>
                <div className='border p-2 rounded-xl'>
                    <img style={{height:'40px', width:'40px'}} src={image3} alt="" />
                </div>
                <div className='border p-2 rounded-xl'>
                    <img style={{height:'40px', width:'40px'}} src={image4} alt="" />
                </div>
                <div className='border p-2 rounded-xl'>
                    <img style={{height:'40px', width:'40px'}} src={image5} alt="" />
                </div>
            </div>
        </Box>
       
      </Modal>
    </div>
  );
}