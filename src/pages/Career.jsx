import React, { useState } from "react";
import BackgroundGradient from "../assets/background/landing_gradient.png";
import Footer from "../components/Footer";
import NavHeader from "../components/NavHeader";
import JobCard from "../components/UI/JobCard";

const Career = () => {
  const [viewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const jobs = [
    {
      id: "1",
      category: "Business Development",
      jobtype: "Customer Growth Associate",
    },
    {
      id: "2",
      category: "Content Writing",
      jobtype: "Content Copywriting",
    },
    {
      id: "3",
      category: "Marketing",
      jobtype: "Digital Marketing",
    },
    {
      id: "4",
      category: "Management",
      jobtype: "Product Manager",
    },
    {
      id: "5",
      category: "Research and Development",
      jobtype: "Research and Data Entry",
    },
    {
      id: "6",
      category: "Technology",
      jobtype: "Software Development Engineer 2",
    },
  ];

  return (
    <>
      <div
        className="font-dm-sans w-screen min-h-screen"
        style={
          viewPort.width > 768
            ? {
                backgroundImage: `url(${BackgroundGradient})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vw 100vh",
                backgroundPosition: "50% 0%",
              }
            : {}
        }
      >
        <NavHeader />

        {/* Section 1 */}
        <section
          className="px-4 lg:px-36 h-fit flex   items-center justify-center py-20"
          //   style={{ height: `calc(100vh - 120px)` }}
        >
          <div className="text-center space-y-3 sm:space-y-6 ">
            <h1 className="text-violet text-4xl lg:text-7xl font-bold  ">
              Explore Careers
            </h1>
            <p className="text-medium-slate w-screen  lg:text-2xl">
              Love us? Want to join us?
            </p>
            <p className="text-medium-slate w-screen  lg:text-2xl">
              You don’t need any advanced degrees or experiences to be a part of
              the Ostello team. You <br /> only need to bring your true and fun
              self and dedication. At Ostello, we want you to BE YOU!
            </p>
          </div>
        </section>

        {/* Section 2 */}

        <section>
          <div className="text-violet">
            <h1 className="px-6 md:px-12 lg:px-24 font-medium lg:text-2xl ">
              Apply and explore{" "}
              <span className="text-medium-slate">
                {" "}
                your creative horizons.{" "}
              </span>
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:ml-20 md:mb-32 m-10  md:gap-20">
            {jobs.map((item) => (
              <JobCard
                key={item.id}
                category={item.category}
                jobtype={item.jobtype}
              />
            ))}
          </div>
        </section>

        {/* Main Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Career;
