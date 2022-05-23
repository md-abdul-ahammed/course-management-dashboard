import { Container } from '@mui/material';
import React from 'react';
import {  AiFillStar } from "react-icons/ai";
import { IoIosArrowDown} from "react-icons/io";
import { AiOutlineShareAlt} from "react-icons/ai";
import { FiEdit} from "react-icons/fi";
import { RiDeleteBin5Line} from "react-icons/ri";

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NoData from './NoData';

const InstituteReviews = ({api}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const institute = api?.filter(a => a.type === "institute")
    return (
        <Container className='py-5 pb-8'>
        {
          institute.length > 0 ? <div className="w-full  grid lg:grid-cols-2 gap-4  lg:py-6    lg:m-0">
          {institute.map((a) => 
            <div className="bg-white w-12/12 rounded-2xl shadow-lg p-5   m-auto lg:m-0">
            <div className="flex justify-between">
            
              <div className='flex items-center'>
              <img src={a?.src} alt="" className="w-20 h-20 rounded-xl" />
              <div className='ml-3'>
                  <p className='text-2xl font-semibold'>{a.name}</p>
                  <p className='text-xl'>{a.location}</p>
              </div>
              </div>

              <div>

              <div>
             
              <IoIosArrowDown className='text-2xl' onClick={handleMenu} />
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}> <FiEdit className='mr-2'/> Edit</MenuItem>
                <MenuItem onClick={handleClose}><RiDeleteBin5Line className='mr-2'/> Delete</MenuItem>
              </Menu>
            </div>

              </div>
            </div>
      
            <div className="flex items-center  py-3">
              <div className="">
                <div className='flex items-center mt-3'>
                <div
                className="flex items-center rounded-lg  text-white  px-2 lg:mr-2"
                style={{ backgroundColor: "#FFD130" }}
              >
                <p className="lg:text-xl">{a?.ratings}</p>
                <AiFillStar />
              </div>
              <p className=' ml-2 text-xl'>{a?.date}</p>
                </div>

                <p className='mt-2 text-xl'>{a?.reviews}</p>
              </div>
              {/* <div
                className=" rounded-full  shadow-lg  ml-auto p-2 cursor-pointer "
                style={{ backgroundColor: "white" }}
              >
                <AiOutlineShareAlt onClick={() => handleOpen()} className='text-2xl' />
              </div> */}
            </div>
      
            <div className="pb-3  flex items-center justify-between">
                <div className=" flex"><AiOutlineShareAlt className='text-2xl mr-3 items-center'/>  Share</div>
                <p
                className=''
                >
                  {a?.upVoted} people upvoted 
                </p>
            </div>
          </div>
          )}
        </div> : 

        <NoData text={`You haven’t reviewed anything yet.`}></NoData>
        }
        </Container>
    );
};

export default InstituteReviews;