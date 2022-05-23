import React from 'react';
import { MdContentCopy} from "react-icons/md";
import { BsWhatsapp} from "react-icons/bs";
import { AiOutlineShareAlt} from "react-icons/ai";
import ShareModal from '../../components/Profile/ShareModal';

import img1 from '../../assets/couponCard/Card_1.png'
import img2 from '../../assets/couponCard/Card_2.png'
import img3 from '../../assets/couponCard/Card_3.png'
import img4 from '../../assets/couponCard/Card_4.png'

const InviteAndEarns = () => {
    const code = 'ERFGH76UIF98'
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <div className='h-full p-5 mb-16'>
            <div>
            <div className="heading my-2 ">
           <p className='text-2xl font-bold '>Invite & Earns</p>
        </div>
        <div className='bg-violet/20 p-2 flex justify-between items-center border-dashed border-2 border-violet-50 rounded' >
            <p className='text-lg'>{code}</p>
            <button className='bg-violet/80 p-1 text-white rounded flex items-center text-lg'
            onClick={() =>  navigator.clipboard.writeText(code)}
            >
            <MdContentCopy className='mr-1'/>
            Copy
            </button>
          </div>

          <div className='my-3 flex'>
            <div className='flex items-center bg-green/30 p-2 text-green/70 text-lg cursor-pointer rounded mr-4'>
                <BsWhatsapp className='mr-1'/>
                <p>Share Via Whatsapp</p>
            </div>
            <div onClick={() => handleOpen()} className='flex items-center bg-ghost/30 p-2 px-16 text-ghost/100 cursor-pointer text-lg rounded'>
                <AiOutlineShareAlt className='mr-1'/>
                <p>More</p>
            </div>
          </div>

          <div>
          <p className='text-2xl font-bold my-5'>Coupons</p>

          <div className="w-full  grid lg:grid-cols-3 gap-4  lg:py-6   lg:m-0">
                <div className='mx-auto'>
                    <img src={img1} alt="" />
                </div>
                <div className='mx-auto'>
                    <img src={img2} alt="" />
                </div>
                <div className='mx-auto'>
                    <img src={img3} alt="" />
                </div>
                <div className='mx-auto'>
                    <img src={img4} alt="" />
                </div>
          </div>
          </div>

          <ShareModal open={open} setOpen={setOpen} ></ShareModal>
            </div>
        </div>
    );
};

export default InviteAndEarns;