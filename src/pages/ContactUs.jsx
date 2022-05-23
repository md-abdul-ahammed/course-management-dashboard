import React, { Fragment, useState, useEffect } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import BackgroundGradient from "../assets/background/landing_gradient.png";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { LinkedinIn } from "react-icons/fa";
import ContactVector from "../assets/vectors/contactVector.png";

const ContactUs = () => {
  const [viewPort, setViewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);

  const [message, setMessage] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const submitHandler = () => {
    nameValue.length < 1 ? setName(true) : setName(false);
    emailValue.length < 1 ? setEmail(true) : setEmail(false);
    messageValue.length < 1 ? setMessage(true) : setMessage(false);

    toast.success("Message has been sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  useEffect(() => {
    const handleResize = (e) => {
      setViewPort({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      });
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <Fragment>
      <div
        className="font-dm-sans w-screen min-h-screen"
        style={
          viewPort.width > 768
            ? {
                backgroundImage: `url(${BackgroundGradient})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vw 90vh",
                backgroundPosition: "0% -25%"
              }
            : {}
        }
      >
        <NavHeader />

        <div className="lg:flex flex-row justify-around bg-white w-50 m-auto md:w-9/12 block md:pl-0 lg:w-10/12 pt-10 xl:top-32 z-10  lg:pl-12 xl:pl-20 lg:pr-20 lg:mt-20 xl:mt-8 xl:pt-10 rounded-3xl pb-20 px-16">
          <div className="lg:w-50">
            <ToastContainer />
            <div className="">
              <h1 className="block lg:inline-block font-semibold text-4xl xl:text-7xl text-violet mb-6xl:pl-0 mt-4">
                Contact Us!
              </h1>

              <p className="lg:ml-4 mt-1 mb-10 xl:mb-0">
                Start a conversation…
                <span className="text-purple-main">
                  <br />
                  Send us a message{" "}
                </span>
                and we will respond as quickly as possible.
              </p>
            </div>

            <form action="" className="flex flex-col w-64 lg:ml-4 lg:mt-10">
              <label htmlFor="name" className="">
                Your Name
              </label>

              <input
                type="text"
                onChange={(e) => {
                  setNameValue(e.target.value);
                }}
                className="bg-violet bg-opacity-10 lg:w-80 h-8 rounded-lg  px-2  mt-2 mb-2"
              />

              {name && (
                <p className="text-red-900 font-semibold">
                  Please Enter valid Name
                </p>
              )}

              <label htmlFor="email">Your Email</label>

              <input
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
                type="email"
                className="bg-violet bg-opacity-10 lg:w-80 h-8 rounded-lg px-2 mt-2 mb-2"
              />

              {email && (
                <p className="text-red-900 font-semibold">
                  Please Enter valid Email
                </p>
              )}

              <label htmlFor="message">Your Message</label>

              <textarea
                name="message"
                onChange={(e) => {
                  setMessageValue(e.target.value);
                }}
                placeholder="Type something if you want..."
                className="bg-violet bg-opacity-10 lg:w-80 h-32 rounded-lg p-2 mt-2"
              ></textarea>

              {message && (
                <p className="text-red-900 font-semibold">
                  Please Enter valid Message
                </p>
              )}
            </form>

            <button
              onClick={submitHandler}
              className="bg-violet text-white w-32 rounded-lg mt-6 lg:ml-4 xl:mb-0 h-8"
            >
              Submit
            </button>
          </div>

          <div className="hidden lg:flex flex-col items-start w-30">
            <img src={ContactVector} alt="" className="w-96" />

            <div className="flex mt-10 ">
              <HiLocationMarker className="text-violet text-2xl mr-6" />
              <p>
                Block-A - 1/57 Jangpura Extention <br /> New Delhi - 110014
              </p>
            </div>

            <div className="flex mt-6">
              <HiPhone className="text-violet text-2xl mr-6" />
              <p>9508756810</p>
            </div>

            <div className="flex mt-6">
              <HiOutlineMail className="text-violet text-2xl mr-6" />
              <p>Support@ostello.co.in</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};
export default ContactUs;

// import ContactVector from "../assets/vectors/contactVector.png";

// import { HiLocationMarker } from "react-icons/hi";
// import { HiPhone } from "react-icons/hi";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaLimport { HiLocationMarker } from "react-icons/hi";
// import { HiPhone } from "react-icons/hi";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// importnkedinIn } from "react-icons/fa";
// import Footer from "../components/Footer";

// const ContactUs = () => {
//   const [name, setName] = useState(false);
//   const [email, setEmail] = useState(false);

//   const [message, setMessage] = useState(false);
//   const [nameValue, setNameValue] = useState("");
//   const [emailValue, setEmailValue] = useState("");
//   const [messageValue, setMessageValue] = useState("");

//   const submitHandler = () => {
//     nameValue.length < 1 ? setName(true) : setName(false);
//     emailValue.length < 1 ? setEmail(true) : setEmail(false);
//     messageValue.length < 1 ? setMessage(true) : setMessage(false);
//   };

//   const [viewPort, setViewPort] = useState({
//     width: document.documentElement.clientWidth,
//     height: document.documentElement.clientHeight
//   });

//   useEffect(() => {
//     const handleResize = (e) => {
//       setViewPort({
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight
//       });
//     };
//     window.addEventListener("resize", handleResize);
//   });

//   return (
//     <>
//       {/* <div className="  xl:p-0   bg-gradient-to-b  from-cyan to-white h-3/4 w-screen absolute ">
//         <div className="float-left pl-10 lg:pl-20 mt-7 pr-10">
//             <img src={Logo} alt="Logo" width="130" height="200" />
//           </div>

//         <div
//             className={
//               "invisible lg:visible lg:flex  lg:gap-20 lg:pl-4 lg:mt-10 relative    mr-4 xl:mr-0   z-30  xl:top-0 xl:bg-opacity-0 rounded-lg   "
//             }
//           >
//             <div className="mb-2 xl:mb-0">Buy a Course</div>
//             <div className="mb-2 xl:mb-0">Community</div>
//             <div className="mb-2 xl:mb-0 ">Scholarship</div>
//           </div>
//           <div className="lg:float-right invisible lg:visible xl:-mt-5 xl:pr-32 lg:-mt-8   xl:gap-20 xl:ml-52  lg:flex lg:flex-wrap ">
//             <div className=" mb-2 xl:mb- ">List your Institute</div>

//             <button className="bg-violet text-white pl-3 pr-3 pb-1  rounded-xl ml-10 mr-10 xl:mr-0  xl:ml-0 mb-2 xl:mb-0 ">
//               Login
//             </button>
//           </div>

//         <div className="bg-white w-80   md:w-9/12     relative  block m-auto md:pl-32  lg:w-10/12   pt-10 xl:top-32 z-10  lg:pl-12 xl:pl-20 lg:pr-20 lg:mt-20 xl:mt-0 xl:pt-10 rounded-3xl mb-52 ">
//           <div className="">
//             <p className="font-semibold pl-8 xl:pl-0 ">say hi to the team:)</p>
//             <h1 className="font-semibold text-4xl xl:text-7xl text-violet mb-6 pl-8 xl:pl-0 mt-4">
//               Get In Touch
//             </h1>
//             <p className="xl:ml-28 ml-10 mb-10 xl:mb-0 font-semibold">
//               feel free to contact us and we will <br /> get back to you as soon
//               as we can
//             </p>
//           </div>
//           <form
//             action=""
//             className="lg:flex lg:flex-col pl-2 w-64 lg:-ml-0 lg:mt-10 "
//           >
//             <label htmlFor="name" className="">
//               Your Name
//             </label>
//             <input
//               type="text"
//               onChange={(e) => {
//                 setNameValue(e.target.value);
//               }}
//               className="bg-violet bg-opacity-10 w-80 h-8 rounded-xl  mt-2 mb-2"
//             />
//             {name && (
//               <p className="text-red-900 font-semibold">
//                 Please Enter valid Name
//               </p>
//             )}
//             <label htmlFor="email">Your Email</label>
//             <input
//               onChange={(e) => {
//                 setEmailValue(e.target.value);
//               }}
//               type="email"
//               className="bg-violet bg-opacity-10 w-80 h-8 rounded-xl   mt-2 mb-2"
//             />
//             {email && (
//               <p className="text-red-900 font-semibold">
//                 Please Enter valid Email
//               </p>
//             )}
//             <label htmlFor="message">Your Message</label>
//             <textarea
//               name="message"
//               onChange={(e) => {
//                 setMessageValue(e.target.value);
//               }}
//               placeholder="Type something if you want..."
//               className="bg-violet bg-opacity-10 w-80 h-32 rounded-xl p-4 mt-2"
//             ></textarea>
//             {message && (
//               <p className="text-red-900 font-semibold">
//                 Please Enter valid Message
//               </p>
//             )}
//           </form>
//           <button
//             onClick={submitHandler}
//             className="bg-violet text-white w-32 rounded-lg mt-6 xl:mb-0 h-8"
//           >
//             Submit
//           </button>
//           <div className=" block m-auto relative lg:float-right lg:absolute lg:left-2/4 lg:pl-10 xl:pl-0  xl:relative xl:bottom-96 xl:-mt-28 xl:-left-20 top-12 xl:top-full  ">
//             <div className="   ">
//               <img src={ContactVector} alt="" className="w-96" />
//             </div>
//             <div className="flex mt-10 ">
//               <HiLocationMarker className="text-violet text-2xl mr-6" />
//               <p>
//                 Block-A - 1/57 Jangpura Extention <br /> New Delhi - 110014
//               </p>
//             </div>
//             <div className="flex mt-6">
//               <HiPhone className="text-violet text-2xl mr-6" />
//               <p>8271469630</p>
//             </div>
//             <div className="flex mt-6">
//               <HiOutlineMail className="text-violet text-2xl mr-6" />
//               <p>Support@ostello.co.in</p>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>*/}
//     </>
//   );
// };
// export default ContactUs;
