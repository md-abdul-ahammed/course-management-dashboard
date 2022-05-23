import React from "react";

import logo from "../../util/assets/images/logo.png";

const Header = ({ pageTitle }) => {
  return (
    <>
      <div className="md:block hidden">
        <div className="flex justify-between py-6 px-[30px] items-center">
          <h3 className="text-2xl w-full font-bold">{pageTitle}</h3>
          <div className="flex md:justify-end justify-between w-full items-center">
            <div className="flex items-center">
              <p className="pr-3 font-semibold">Super Admin</p>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
