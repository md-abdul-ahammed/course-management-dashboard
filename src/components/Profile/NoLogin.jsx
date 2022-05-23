import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/NoLogin/undraw_wishlist_re_m7tv 1.png";
import image2 from "../../assets/NoLogin/undraw_referral_re_0aji 1.png";

const NoLogin = ({ type }) => {
  return (
    <div>
      {type === "wishlist" ? (
        <div className="mb-16">
          <img src={image1} className="mx-auto" alt="" />

          <div className="text-center mb-5">
            <p className="text-3xl font-semibold my-5">
              {" "}
              Log In to view your Wishlist{" "}
            </p>
            <Link
              className="px-4 py-2 bg-violet text-white text-xl rounded"
              to="/courses_institutes"
            >
              Login
            </Link>
          </div>
        </div>
      ) : (
        <div className="mb-16">
          <img src={image2} className="mx-auto" alt="" />

          <div className="text-center mb-5">
            <p className="text-3xl font-semibold my-5">
              {" "}
              Log In to view your referral rewards
            </p>
            <Link
              className="px-4 py-2 bg-violet text-white text-xl rounded"
              to="/courses_institutes"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoLogin;
