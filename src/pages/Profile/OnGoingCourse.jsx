import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../../src/assets/merchantDashboard/Accountancy/Kazi Mohammad Fahad Kibria.png'
import NoData from '../../components/Profile/NoData';
import ShareModal from '../../components/Profile/ShareModal';
import { authSelector, getUser } from '../../redux/slices/authSlice';
import { CourseCard } from './RecentlyViewed';

const OnGoingCourse = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);



  const dispatch = useDispatch()
  const {  userData } = useSelector(authSelector)

  useEffect(() => {

    dispatch(getUser())

  }, [dispatch])


  function handleAddToWishlist(idx) {

      
    }

    return (
    <div className='h-full p-5 mb-16'>
        <div className="heading my-2 ">
           <p className='text-2xl font-bold '>On Going Course</p>
        </div>

        {userData?.ongoingcourses?.length > 0 ? (
        <div className="w-full  grid lg:grid-cols-4 gap-4  lg:py-6   lg:m-0">
          {userData?.ongoingcourses?.map((course, idx) => (
            <CourseCard handleOpen={handleOpen} course={course} handleAddToWishlist={handleAddToWishlist} idx={idx} />
          ))}
        </div>
      ) : (
        <NoData text={`don't have any ongoing course`}></NoData>
      )}

    <ShareModal open={open} setOpen={setOpen} ></ShareModal>
    </div>
    );
};

export default OnGoingCourse;