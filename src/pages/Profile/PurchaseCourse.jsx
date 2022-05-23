import React, { useEffect, useState } from "react";
import image from "../../../src/assets/merchantDashboard/Accountancy/Kazi Mohammad Fahad Kibria.png";
import NoData from "../../components/Profile/NoData";
import { BsArrowRightCircle } from "react-icons/bs";
import PurchaseDetailsModal from "../../components/Profile/PurchaseDetailsModal";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, getUser } from "../../redux/slices/authSlice";


const PurchaseCourse = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(authSelector);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [singleCourseDetails, setSinglCourseDetails] = useState({});


    //   const  purchasedcourses = [
    //     {
    //       "id": "6a8b9ce0-9c63-4783-bff0-7b7cf80623ac",
    //       "name": "Waters Group",
    //       "classtype": 2,
    //       "description": "Qui voluptatem dolores rem et cupiditate.",
    //       "publishedon": "2022-05-18T10:24:16.206Z",
    //       "duration": "20 days",
    //       "category": "{\"category\":[{\"name\":\"academics\",\"board\":[\"ICSE\",\"CBSE\"],\"classes\":[7,6,5,4],\"subjects\":[\"mathematics\",\"english\",\"hindi\"]}]}",
    //       "promode": false,
    //       "grossprice": 20000,
    //       "discountprice": 5000,
    //       "minimumprice": 15000,
    //       "effectiveprice": 18000, //material cost
    //       "rating": 3,
    //       "ratingcount": 0,
    //       "emi": null,
    //       "faqs": "[{\"question\":\"some random questions\",\"answer\":\"some answers\"}]",
    //       "studentsenrolled": 0,
    //       "objectives": "[\"obj 1\",\"obj 2\",\"obj 3\"]",
    //       "highlights": "[\"high 1\",\"high 2\",\"high 3\"]",
    //       "syllabus": "[{\"title\":\"tit 1\",\"description\":\"desc 1\",\"lectures\":5,\"hours\":10},{\"title\":\"titl 2\",\"description\":\"desc 2\",\"lectures\":1,\"hours\":5}]",
    //       "approval": 4,
    //       "requestApproval": 1,
    //       "updatedRequest": {},
    //       "images": [
    //           {
    //               "key": "1652889248595.jpeg",
    //               "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889248595.jpeg"
    //           },
    //           {
    //               "key": "1652889249134.jpeg",
    //               "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889249134.jpeg"
    //           },
    //           {
    //               "key": "1652889249697.jpeg",
    //               "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889249697.jpeg"
    //           }
    //       ],
    //       "videos": [
    //           {
    //               "thumbnail": {
    //                   "key": "1652889255504.jpeg",
    //                   "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889255504.jpeg"
    //               },
    //               "video": {
    //                   "key": "1652889254608.mp4",
    //                   "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889254608.mp4"
    //               }
    //           }
    //       ],
    //       "institute": {
    //           "id": "29a8ada7-908c-4b39-8ae3-87a0c7fef0d6",
    //           "name": "Albi Insititute",
    //           "email": "albi.ummid@gmail.com",
    //           "registeredon": "2022-05-18T10:12:43.229Z",
    //           "description": "Demo",
    //           "shortdescription": null,
    //           "establishedyear": 2022,
    //           "phonenumber": "9019380085",
    //           "landline": null,
    //           "locations": [
    //               {
    //                   "line1": "Savar",
    //                   "line2": "Dhaka,Bangladesh",
    //                   "pincode": 560036,
    //                   "area": "Krishnarajapuram",
    //                   "city": "Bangalore",
    //                   "state": "Karnataka",
    //                   "country": "India"
    //               }
    //           ],
    //           "rating": 3,
    //           "workinghours": null,
    //           "gst": null,
    //           "bank": null,
    //           "services": [
    //               {
    //                   "domainName": "Senior Secondary School (Class 11-12th)",
    //                   "boards": [
    //                       "ICSE"
    //                   ],
    //                   "streams": [
    //                       "Science"
    //                   ],
    //                   "subjectsForStreams": {
    //                       "Science": [
    //                           "English ",
    //                           "Chemistry",
    //                           "Physics",
    //                           "Maths",
    //                           "Botany",
    //                           "Zoology",
    //                           "IP",
    //                           "Computer Science ",
    //                           "Java ",
    //                           "Other"
    //                       ],
    //                       "Commerce": [
    //                           "Commerce ",
    //                           "English ",
    //                           "Accountancy",
    //                           "Economics",
    //                           "Business Studies",
    //                           "Mathematics",
    //                           "Statistics",
    //                           "IP",
    //                           "Computer Science",
    //                           "Java ",
    //                           "Other"
    //                       ],
    //                       "Arts/Humanities": [
    //                           "Economics",
    //                           "Psychology",
    //                           "History",
    //                           "Geography ",
    //                           "Philosophy",
    //                           "Sociology",
    //                           "Anthropology ",
    //                           "Political Science",
    //                           "Journalism ",
    //                           "English ",
    //                           "Law",
    //                           "Other "
    //                       ],
    //                       "Vocational": [
    //                           "Banking ",
    //                           "Accountancy & Auditing",
    //                           "Fabrication Technology",
    //                           "Marketing & Salesmanship",
    //                           "Horticulture ",
    //                           "Food Service & Management ",
    //                           "Life Insurance ",
    //                           "Financial Market Management",
    //                           "Library Management",
    //                           "Other "
    //                       ]
    //                   },
    //                   "subjects": [
    //                       "English"
    //                   ]
    //               }
    //           ],
    //           "classmode": 2,
    //           "coursecategories": [],
    //           "requestApproval": 1,
    //           "updatedRequest": {},
    //           "documents": {
    //               "adhaar": null,
    //               "address": null,
    //               "registration": null
    //           },
    //           "approval": 1,
    //           "images": [],
    //           "videos": []
    //       },
    //       "faculty": {
    //           "id": "d5dc4691-b725-4213-b37a-f03eff5fef42",
    //           "name": "Jane Doe",
    //           "description": "I am missing",
    //           "avatar": {
    //               "key": "1652889188994.png",
    //               "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889188994.png"
    //           },
    //           "qualification": "M.Tech"
    //       }
    //   },
    //     {
    //       "id": "a8b9ce0-9c63-4783-bff0-7b7cf80623ac",
    //       "name": "Hello",
    //       "classtype": 3,
    //       "description": "Qui voluptatem dolores rem et cupiditate.",
    //       "publishedon": "2022-05-18T10:24:16.206Z",
    //       "duration": "30 days",
    //       "category": "{\"category\":[{\"name\":\"academics\",\"board\":[\"ICSE\",\"CBSE\"],\"classes\":[7,6,5,4],\"subjects\":[\"mathematics\",\"english\",\"hindi\"]}]}",
    //       "promode": false,
    //       "grossprice": 25000,
    //       "discountprice": 5000,
    //       "minimumprice": 15000,
    //       "effectiveprice": 15000, //material cost
    //       "rating": 3,
    //       "ratingcount": 0,
    //       "emi": null,
    //       "faqs": "[{\"question\":\"some random questions\",\"answer\":\"some answers\"}]",
    //       "studentsenrolled": 0,
    //       "objectives": "[\"obj 1\",\"obj 2\",\"obj 3\"]",
    //       "highlights": "[\"high 1\",\"high 2\",\"high 3\"]",
    //       "syllabus": "[{\"title\":\"tit 1\",\"description\":\"desc 1\",\"lectures\":5,\"hours\":10},{\"title\":\"titl 2\",\"description\":\"desc 2\",\"lectures\":1,\"hours\":5}]",
    //       "approval": 4,
    //       "requestApproval": 1,
    //       "updatedRequest": {},
    //       "images": [
    //           {
    //               "key": "1652889248595.jpeg",
    //               "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889248595.jpeg"
    //           },
    //           {
    //               "key": "1652889249134.jpeg",
    //               "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889249134.jpeg"
    //           },
    //           {
    //               "key": "1652889249697.jpeg",
    //               "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889249697.jpeg"
    //           }
    //       ],
    //       "videos": [
    //           {
    //               "thumbnail": {
    //                   "key": "1652889255504.jpeg",
    //                   "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889255504.jpeg"
    //               },
    //               "video": {
    //                   "key": "1652889254608.mp4",
    //                   "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889254608.mp4"
    //               }
    //           }
    //       ],
    //       "institute": {
    //           "id": "29a8ada7-908c-4b39-8ae3-87a0c7fef0d6",
    //           "name": "Albi Insititute",
    //           "email": "albi.ummid@gmail.com",
    //           "registeredon": "2022-05-18T10:12:43.229Z",
    //           "description": "Demo",
    //           "shortdescription": null,
    //           "establishedyear": 2022,
    //           "phonenumber": "9019380085",
    //           "landline": null,
    //           "locations": [
    //               {
    //                   "line1": "Savar",
    //                   "line2": "Dhaka,Bangladesh",
    //                   "pincode": 560036,
    //                   "area": "Krishnarajapuram",
    //                   "city": "Bangalore",
    //                   "state": "Karnataka",
    //                   "country": "India"
    //               }
    //           ],
    //           "rating": 3,
    //           "workinghours": null,
    //           "gst": null,
    //           "bank": null,
    //           "services": [
    //               {
    //                   "domainName": "Senior Secondary School (Class 11-12th)",
    //                   "boards": [
    //                       "ICSE"
    //                   ],
    //                   "streams": [
    //                       "Science"
    //                   ],
    //                   "subjectsForStreams": {
    //                       "Science": [
    //                           "English ",
    //                           "Chemistry",
    //                           "Physics",
    //                           "Maths",
    //                           "Botany",
    //                           "Zoology",
    //                           "IP",
    //                           "Computer Science ",
    //                           "Java ",
    //                           "Other"
    //                       ],
    //                       "Commerce": [
    //                           "Commerce ",
    //                           "English ",
    //                           "Accountancy",
    //                           "Economics",
    //                           "Business Studies",
    //                           "Mathematics",
    //                           "Statistics",
    //                           "IP",
    //                           "Computer Science",
    //                           "Java ",
    //                           "Other"
    //                       ],
    //                       "Arts/Humanities": [
    //                           "Economics",
    //                           "Psychology",
    //                           "History",
    //                           "Geography ",
    //                           "Philosophy",
    //                           "Sociology",
    //                           "Anthropology ",
    //                           "Political Science",
    //                           "Journalism ",
    //                           "English ",
    //                           "Law",
    //                           "Other "
    //                       ],
    //                       "Vocational": [
    //                           "Banking ",
    //                           "Accountancy & Auditing",
    //                           "Fabrication Technology",
    //                           "Marketing & Salesmanship",
    //                           "Horticulture ",
    //                           "Food Service & Management ",
    //                           "Life Insurance ",
    //                           "Financial Market Management",
    //                           "Library Management",
    //                           "Other "
    //                       ]
    //                   },
    //                   "subjects": [
    //                       "English"
    //                   ]
    //               }
    //           ],
    //           "classmode": 2,
    //           "coursecategories": [],
    //           "requestApproval": 1,
    //           "updatedRequest": {},
    //           "documents": {
    //               "adhaar": null,
    //               "address": null,
    //               "registration": null
    //           },
    //           "approval": 1,
    //           "images": [],
    //           "videos": []
    //       },
    //       "faculty": {
    //           "id": "d5dc4691-b725-4213-b37a-f03eff5fef42",
    //           "name": "Jane Doe",
    //           "description": "I am missing",
    //           "avatar": {
    //               "key": "1652889188994.png",
    //               "url": "https://ostellomedias3.s3.ap-south-1.amazonaws.com/1652889188994.png"
    //           },
    //           "qualification": "M.Tech"
    //       }
    //   },
    // ]

  
  

  const singleProjectHandle = (id) => {
    
    const singleCourse = userData?.purchasedcourses?.find((p) => p?.id === id);
    setImage(singleCourse?.images[0]?.url)
    setDate(singleCourse?.publishedon.split('T')[0])
    setSinglCourseDetails(singleCourse);
console.log(singleCourse, id);

    handleOpen();
  };

  const [image, setImage] = useState('')
  const [date, setDate] = useState('')

  return (
    <div className="h-full p-5 mb-16">
      <div className="heading my-2 ">
        <p className="text-2xl font-bold ">Purchased Courses</p>
      </div>

      {userData?.purchasedcourses?.length > 0 ? (
        <div className="w-full  grid lg:grid-cols-3 gap-4  lg:py-6   lg:m-0">
          {userData?.purchasedcourses?.map((course) => (
            <div className="bg-white w-12/12 rounded-2xl shadow-lg p-4   m-auto lg:m-0 ">
              <div className="flex items-center">
                <img
                  src={course?.images[0]?.url}
                  alt=""
                  className="w-20 h-20 rounded-xl"
                />
                <div className="ml-3">
                  <p className="text-lg text-ghost/90 ">{course?.institute?.name}</p>
                  <p className="text-lg">{course?.name}</p>
                </div>
              </div>
              <div>
                <div className="mt-3">
                  <p className="uppercase">Total Price</p>
                  <p className="font-semibold">₹{(course?.grossprice + course?.effectiveprice + (course?.grossprice*18)/100) - course?.discountprice  }</p>
                </div> 
                <div className="mt-3">
                  <p className="uppercase">Purchase Date</p>
                  <p className="font-semibold">{course?.publishedon.split('T')[0]}</p>
                </div>

                <div
                  className="flex items-center mt-3 text-violet justify-end cursor-pointer"
                  onClick={() => {
                    singleProjectHandle(course?.id)
                  }}
                >
                  <p className="mr-2 text-lg">View Details </p>{" "}
                  <BsArrowRightCircle className="text-xl" />
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      ) : (
        <NoData text={`You haven’t purchased anything yet.`}></NoData>
      )}
      <PurchaseDetailsModal
        open={open}
        setOpen={setOpen}
        details={singleCourseDetails}
        image = {image}
        date = {date}
      ></PurchaseDetailsModal>
    </div>
  );
};

export default PurchaseCourse;
