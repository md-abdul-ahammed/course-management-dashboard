import React, { useState } from "react";
import BackgroundGradient from "../assets/background/landing_gradient.png";
import Event_Landing from "../assets/vectors/events_Landing.png";
import UpcomingEvent from "../components/Event/UpcomingEvent";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";

const Events = () => {
  const [viewPort] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  return (
    <div
      className="font-dm-sans w-screen min-h-screen"
      style={
        viewPort.width > 768
          ? {
              backgroundImage: `url(${BackgroundGradient})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100vw 140vh",
              backgroundPosition: "50% 0%",
            }
          : {}
      }
    >
      <NavHeader />
      {/* section-1  */}
      <section className="py-16 px-2  lg:px-6 relative">
        <div
          className="  w-11/12  bg-opacity-40 m-auto rounded-2xl py-10 lg:py-14 relative  "
          style={{
            backgroundImage: `url(${Event_Landing})`,
          }}
        >
          <div
            className="w-full top-0 rounded-3xl h-full absolute "
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backgroundSize: "100vw 200vh",
            }}
          />

          <h1 className="text-center text-white text-3xl  lg:text-6xl font-bold relative  ">
            Great Events for <br /> Great Experiences
          </h1>
          <p className=" px-2 lg:text-xl relative text-white text-center py-4 lg:pt-8  ">
            Ostello hosts exciting events all year round to keep you updated
            about the latest trends and <br /> help you scale your academic
            pathway. So, lock the date and don’t forget to be part of our <br />
            informative and interesting events.{" "}
          </p>
        </div>
      </section>

      {/* section-2  */}
      <section className="">
        <UpcomingEvent />
        <div className=""></div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
