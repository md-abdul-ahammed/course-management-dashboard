import React from "react";
import LogoWithTitle from "../../assets/logo_title.svg";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate } from "react-router-dom";

const MerchantLogin = () => {
  return window.localStorage.getItem("OWNER_ID") !== null ? (
    <Navigate to={"/logged-in"} />
  ) : (
    <main className="w-screen h-screen m-0 p-0 overflow-x-hidden overflow-y-hidden flex  font-dm-sans">
      <section className="bg-gradient-to-r from-lavender via-turquoise to-cyan h-full w-1/2 hidden lg:flex justify-center items-center">
        <img src={LogoWithTitle} alt="Ostello Logo" className="w-auto h-20" />
      </section>
      <section className="h-screen overflow-y-auto w-full lg:w-1/2 lg:min-w-[700px] flex flex-col justify-start items-center lg:py-6 lg:px-24">
        <nav className="lg:hidden flex items-center justify-between w-full px-6 py-4">
          <button className="text-gray py-4 space-x-2 flex items-center">
            <IoIosArrowBack />
            <p className="">Back</p>
          </button>
          <div className="flex-1"></div>
          <img src={LogoWithTitle} alt="Ostello Logo" className="w-auto h-8" />
        </nav>
        <div className="flex flex-col py-6 px-6 lg:px-16 items-center justify-center h-full w-full lg:shadow-2xl lg:shadow-lavender lg:rounded-2xl ">
          <h1 className="font-medium text-3xl text-center ">
            Welcome to Ostello
          </h1>
          <h2 className="font-medium text-xl text-center ">
            Register as a new Institute
          </h2>
        </div>
      </section>
    </main>
  );
};

export default MerchantLogin;
