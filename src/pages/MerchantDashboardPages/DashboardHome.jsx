import React, { useState } from 'react';

import img1 from '../../assets/merchantDashboard/Accountancy/Kazi Mohammad Fahad Kibria.png'

import './DashboardHome.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai'
import HeaderCard from '../../components/MerchantDashboard/DashboardHome/HeaderCard/HeaderCard';
import Charts from '../../components/MerchantDashboard/DashboardHome/Chart/Charts';
import PieChart from '../../components/MerchantDashboard/DashboardHome/Chart/PieChart';
import RecentOrder from '../../components/MerchantDashboard/DashboardHome/RecentOrder/RecentOrder';
import { Rating } from '@mui/material';


const DashboardHome = () => {
    
    const [slice, setSlice] = useState(2)
    const data = [
        // {image : 'img1', name : '', rating : '0', totalOrder : 0,  totalAmount :' 0'},
        // {image : 'img1', name : '', rating : '0', totalOrder : 0,  totalAmount :' 0'},
        // {image : 'img1', name : '', rating : '0', totalOrder : 0,  totalAmount :' 0'},
        // {image : 'img1', name : '', rating : '0', totalOrder : 0,  totalAmount :' 0'}
    ]
    return (
        <div  className="p-5 ">
            <div className="heading mb-5">
        <h1 className="text-2xl font-bold ">Dashboard</h1>
        </div>
        <HeaderCard></HeaderCard>

        <div className=" grid grid-cols-6 gap-6 ">
            <div className=" col-span-6 lg:col-span-4">
            <Charts></Charts>
            </div>
            <div className=" col-span-6 lg:col-span-2 bg-white rounded-2xl  ">
            <PieChart></PieChart>
            </div>
        </div>
        <div className=" grid grid-cols-6 gap-6 mt-4  ">
            <div className=" col-span-6 lg:col-span-4">
            <RecentOrder></RecentOrder>
            </div>
            <div style={{height:'360px'}}   className=" thin-scroll h-65  col-span-6 lg:col-span-2  bg-white p-4 rounded-2xl ">
                <div className="heading mb-1">
                <h1 style={{ fontWeight: "700", fontSize: "20px" }}>Top Selling Courses</h1>
                </div>
            <div className='sm:block hidden overflow-y-scroll h-60 ' >
            {
                data.map(d => <div className="">
                <div className=" flex justify-between items-center mt-5">
                    <div className="flex items-center">
                    <img src={'img1'} style={{height:'95px', width:'95px', borderRadius:'8px'}} className="share-image" alt="" />
                    <div className="texts ml-4">
                        <h2 className="text-base mb-1">{d.name}</h2>
                        <Rating className='text-2xl' name="read-only" value={d.rating} readOnly />
                        <h4 className="text-sm font-bold">₹{d.totalAmount}</h4>
                      </div>
                    
                    </div>
                  </div>
                </div>).slice(0,4)
            }

            </div>
            <div className='sm:hidden block mb-2'>
            {
                data.map(d => <div className="">
                <div className=" flex justify-between items-center mt-5">
                    <div className="flex items-center">
                    <img src={img1} style={{height:'95px', width:'95px', borderRadius:'8px'}} className="share-image" alt="" />
                    <div className="texts ml-4">
                        <h2 className="text-base mb-1">{d.name}</h2>
                        <Rating
                            className="text-orange/40"
                            emptySymbol="fa fa-star-o "
                            fullSymbol="fa fa-star "
                            initialRating={d?.rating}
                            readonly
                          />
                        <h4 className="text-sm font-bold">₹{d.totalAmount}</h4>
                      </div>
                    
                    </div>
                  </div>
                </div>).slice(0,slice)
            }

            </div>
                        
            <div className='sm:hidden block'>
            {
                        slice === 2 ? <div style={{cursor:'pointer', color:'#7D23E0', fontWeight:'500'}} onClick={() => setSlice(4)} className='flex items-center justify-center  font-medium '>
                        <p className='mr-2'>View More</p>
                        <AiOutlineArrowDown></AiOutlineArrowDown>
                        </div> :
                        <div style={{cursor:'pointer', color:'#7D23E0', fontWeight:'500'}} onClick={() => setSlice(2)} className='flex items-center justify-center  font-medium '>
                        <p className='mr-2'>View Less</p>
                        <AiOutlineArrowUp></AiOutlineArrowUp>
                        </div>
                    }
            </div>

            </div>
        </div>
        </div>
    );
};

export default DashboardHome;