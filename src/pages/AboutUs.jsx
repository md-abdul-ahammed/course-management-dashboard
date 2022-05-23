import React, { Fragment, useState } from "react";
import Carousel from "react-elastic-carousel";

import Img1 from "../assets/aboutus/img1.png";
import Img2 from "../assets/aboutus/img2.png";
import Img3 from "../assets/aboutus/img3.png";
import Img4 from "../assets/aboutus/img4.png";
import Img5 from "../assets/aboutus/img5.png";
import Img6 from "../assets/aboutus/img6.png";
import Img7 from "../assets/aboutus/img7.png";
import Img8 from "../assets/aboutus/img8.png";

import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import SliderImage from "../components/UI/SliderImage";
import VisionVector from "../assets/aboutus/about1.png";
import MissionVector from "../assets/aboutus/about2.png";
import CareerVector from "../assets/aboutus/trackVector.png";
import SkillsVector from "../assets/aboutus/enrichVector.png";
import NetworkVector from "../assets/aboutus/networkVector.png";
import BackgroundGradient from "../assets/background/landing_gradient.png";
import DesktopBackgroundVector from "../assets/background/background_box.png";

const AboutUs = () => {
  const [viewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const [showMark, setShowMark] = useState(false);
  const [email, setEmail] = useState("second");

  const profiles = [
    {
      id: 1,
      src: Img1,
      name: "Rajbir Singh Rajpal",
      url: "https://www.linkedin.com/in/rajbir-singh-5ab18276/",
      role: "Founder"
    },
    {
      id: 2,
      src: Img2,
      name: "Rohit Pratap Singh",
      url: "https://www.linkedin.com/in/rohitpsingh",
      role: "Co-Founder"
    },
    {
      id: 3,
      src: Img3,
      name: "Sarabdeep Singh",
      url: "https://www.linkedin.com/in/sarabdeep-singh-66b86666",
      role: "Co-Founder"
    },

    {
      id: 5,
      src: Img4,
      name: "Roshan jose",
      url: "https://www.linkedin.com/in/sroshanjose/",
      role: "Full Stack Engineer"
    },
    {
      id: 6,
      src: Img5,
      name: "B.Preetham Kumar",
      url: "https://www.linkedin.com/in/banavath-preetham-kumar-608793188",
      role: "Front End Engineer"
    },
    {
      id: 7,
      src: Img6,
      name: "Deepika Agarwal",
      url: "https://www.linkedin.com/in/deepika-agarwal-918a9a212/",
      role: "Design"
    },
    {
      id: 8,
      src: Img7,
      name: "Karandeep Singh",
      url: "https://www.linkedin.com/in/karandeep-singh-1bb0611ab",
      role: "Operations"
    },
    {
      id: 4,
      src: Img8,
      name: "Gagan Singh Mokha",
      url: "https://www.linkedin.com/in/gagan-singh-mokha-2abb8023",
      role: "Mentor & Advisor"
    }
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },

    { width: 700, itemsToShow: 4 },
    { width: 1400, itemsToShow: 5 },
    { width: 1800, itemsToShow: 6 }
  ];

  return (
    <Fragment>
      <div
        className="font-dm-sans w-screen min-h-screen"
        style={
          viewPort.width > 768
            ? {
                backgroundImage: `url(${BackgroundGradient})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vw 140vh",
                backgroundPosition: "50% 0%"
              }
            : {}
        }
      >
        <NavHeader />

        <main className="lg:px-16">
          <section className=" lg:px-28 lg:mb-28 px-8 flex flex-col-reverse lg:flex-row items-center justify-center ">
            <div className="2xl:pl-10 first-letter:flex flex-col items-start space-y-3 lg:space-y-6 mb-10 lg:mb-0 ">
              <h1 className="text-slate font-bold text-3xl  xl:text-5xl ">
                Our
                <span className="text-violet"> Vision</span>
              </h1>

              <h3 className=" text-sm xl:text-lg  text-desc-gray font-medium  lg:w-max xl:pr-5 ">
                We aim to empower people to take control of{" "}
                <br className="hidden lg:flex" />
                their career decisions and achieve their{" "}
                <br className="hidden lg:flex" /> version of success.
              </h3>
            </div>
            <img
              src={VisionVector}
              alt=""
              className="w-64 lg:w-2/5 xl:w-2/4 m-auto mb-10 lg:mt-12 lg:mb-0  "
            />
          </section>

          <section className=" py-10 xl:py-0 lg:mb-20 px-6 lg:px-0 lg:py-40   flex flex-col lg:flex-row  justify-center items-center ">
            <img
              src={MissionVector}
              alt=""
              className=" w-64 lg:w-1/3 m-auto mb-10  flex-row-reverse "
            />

            <div className="first-letter:flex flex-col items-start lg:w-6/12 space-y-3 lg:space-y-6 lg:pr-20    ">
              <h1 className="text-slate font-bold text-3xl md:text-3xl xl:text-5xl">
                Our
                <span className="text-violet"> Mission</span>
              </h1>

              <h3 className="text-sm xl:text-lg text-desc-gray font-medium w-full lg:w-max   ">
                We strive to change the way people make career{" "}
                <br className="hidden lg:flex" /> decisions by providing them
                the access to the right <br className="hidden lg:flex" />{" "}
                knowledge, guidance and resources. Ostello will help{" "}
                <br className="hidden lg:flex" /> people to control and own
                their career decisions
              </h3>
            </div>
          </section>

          <div className="">
            <section className="text-desc-gray px-6 pt-10 lg:pt-0 lg:px-32">
              <h1 className="text-violet text-center font-bold text-3xl  md:text-4xl lg:text-5xl mb-6">
                Who are <span className="text-desc-gray"> We ?</span>
              </h1>

              <p className="text-center font-bold text-lg md:text-xl lg:text-2xl mb-10">
                A centralised platform for offering 360-degree educational and
                networking support.
              </p>

              <div className="flex m-auto items-start justify-around flex-col   xl:flex-row gap-10 lg:gap-20 ">
                <div className="flex-1 ">
                  <img
                    src={NetworkVector}
                    alt=""
                    className=" w-64 lg:w-80 m-auto  "
                  />
                  <h3 className="text-xl lg:text-2xl h-12 font-semibold lg:mb-4 pb-4 text-center">
                    Peer networking
                  </h3>
                  <p className="text-medium-desc-gray text-center w-full lg:text-base">
                    Networking is critical in today's world, and Ostello
                    provides countless possibilities for networking with peers,
                    leveraging knowledge from the journeys of emerging
                    professionals, as well as befriending and getting guidance
                    from your upperclassmen.
                  </p>
                </div>

                <div className="items-center content-center justify-center flex-1 pb-4">
                  <img
                    src={CareerVector}
                    alt=""
                    className="w-60 lg:w-80 m-auto "
                  />

                  <h3 className="text-xl lg:text-2xl font-semibold text-center mb-4 lg:mb-8">
                    Career journey
                  </h3>
                  <p className="text-medium-desc-gray lg:text-base text-center">
                    With Ostello's one-of-a-kind database, you can track your
                    professional advancement, accomplishments, academic peaks
                    and troughs, and chart your career path. Our platform will
                    track and help you strengthen your academic skill set, which
                    plays a crucial role in one's overall development
                  </p>
                </div>

                <div className="flex-1">
                  <img
                    src={SkillsVector}
                    alt=""
                    className="w-60 lg:w-80 m-auto "
                  />

                  <h3 className="text-xl lg:text-2xl w-full font-semibold text-center  mb-4 lg:mb-8">
                    Coaching marketplace
                  </h3>
                  <p className="text-medium-slate w-full text-center  lg:text-base">
                    We've created the world's first hyperlocal E-commerce
                    platform focused on socio-tech, supporting more than 200
                    million students in picking the best courses at the best
                    price from India's 50 million coaching institutions. From
                    helping you find the right course to enriching your academic
                    skill set with the right guidance, Ostello has got you
                    covered.
                  </p>
                </div>
              </div>
            </section>

            <section className="lg:items-center px-6 lg:px-36 pt-20 lg:pt-40 pb-20 md:pb-8">
              <h1 className="text-violet text-center font-bold text-3xl lg:text-5xl mb-20 md:mb-8">
                Meet the <span className="text-slate"> team</span>
              </h1>

              <div className="flex flex-row space-x ">
                <Carousel breakPoints={breakPoints}>
                  {profiles.map((item) => (
                    <SliderImage
                      key={item.id}
                      src={item.src}
                      name={item.name}
                      url={item.url}
                      role={item.role}
                    />
                  ))}
                </Carousel>
              </div>
            </section>

            <section
              style={{
                position: "relative"
              }}
              className="mb-16  lg:mb-0 lg:h-[620px] flex justify-center items-center"
            >
              <div
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url(${DesktopBackgroundVector})`,
                  zIndex: "-1",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center"
                }}
              />

              <div className="lg:h-auto flex flex-col items-center lg:flex-row py-10 lg:py-20 shadow-lg shadow-lavender w-3/4 xl:w-9/12 m-auto rounded-xl lg:rounded-3xl bg-violet">
                <div className="lg:w-3/5 text-center m-auto lg:m-0">
                  <h3 className="text-white text-xl lg:text-3xl font-semibold">
                    Subscribe for our newsletter
                  </h3>
                </div>

                <div className="flex flex-col m-auto lg:m-0 relative py-4 lg:py-0 ">
                  <input
                    type="email"
                    className="h-12 mt-2 p-4  rounded-lg md:w-72 xl:w-[480px] lg:mr-32"
                    placeholder="type your email here"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />

                  <button
                    onFocus={() => {
                      email.length > 1 && email.includes("@")
                        ? setShowMark(true)
                        : setShowMark(false);
                    }}
                    className={
                      (showMark && email.length > 1 && email.includes("@")
                        ? "bg-green lg:bg-green "
                        : "bg-blue lg:bg-violet  ") +
                      " text-white lg:absolute  lg:right-36  rounded-md mt-4 p-1 lg:w-28    "
                    }
                  >
                    {showMark && email.length > 1 && email.includes("@")
                      ? "✔"
                      : "Register"}
                  </button>
                  {showMark && email.length > 1 && email.includes("@") ? (
                    <p className="text-white">
                      Thanks For Subscribing Newsletter
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default AboutUs;
