import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogPreviewModal from "../AdminModal/BlogPreviewModal/BlogPreviewModal";
import AddCouponModal from "../AdminModal/AddCouponModal/AddCouponModal";

const PageHeader = ({ title, actionName, route }) => {
  const [showModal, setShowModal] = useState(false);
  const [couponModal, setCouponModal] = useState(false);
  return (
    <div className="flex justify-between px-8 py-6 items-center">
      <div className="text-2xl font-bold text-[#010025]">{title}</div>
      {route && (
        <Link
          className="px-8 rounded-lg text-white bg-[#7D23E0] font-medium py-2"
          to={route}
        >
          {actionName}
        </Link>
      )}
      {actionName && !route && (
        <button
          onClick={
            actionName === "Add Coupon"
              ? () => setCouponModal(true)
              : () => setShowModal(true)
          }
          className="px-8 rounded-lg text-white bg-[#7D23E0] font-medium py-2"
        >
          {actionName}
        </button>
      )}
      {showModal && <BlogPreviewModal setShowModal={setShowModal} />}
      {couponModal && <AddCouponModal setCouponModal={setCouponModal} />}
    </div>
  );
};

export default PageHeader;
