import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CouponCard from "../../../components/AdminCard/CouponCard";
import DeleteIcon from "../../../components/DeleteIcon/DeleteIcon";
import Header from "../../../components/Header/Header";
import DeleteConfirmationModal from "../../../components/AdminModal/DeleteConfirmationModal/DeleteConfirmationModal.js";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  adminDeleteCoupon,
  fetchAdminCoupons,
} from "../../../redux/slices/adminCouponSlice";
import Loader from "../../../components/Loader/Loader";

const Coupons = () => {
  const dispatch = useDispatch();
  const [deleteCoupon, setDeleteCoupon] = useState(false);
  const [id, setId] = useState("");

  const { adminCoupons, isAddedNewCoupon, isDeleted, loading, isUpdated } =
    useSelector((state) => state.adminCoupons);

  useEffect(() => {
    if (deleteCoupon) {
      dispatch(adminDeleteCoupon(id));
    }
  }, [id, deleteCoupon, dispatch]);

  useEffect(() => {
    dispatch(fetchAdminCoupons());
  }, [dispatch, isAddedNewCoupon, isDeleted, isUpdated]);

  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  return (
    <div>
      <Header pageTitle={"Coupons"} />
      <PageHeader title={"Active Coupon"} actionName={"Add Coupon"} />
      {adminCoupons.length === 0 ? (
        <div className="py-8 mx-10 w-4/6 font-medium bg-white flex justify-center">
          No active coupon available now
        </div>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div className="px-[30px] pt-4 pb-16">
              <div className="grid gap-10 md:grid-cols-2 grid-cols-1">
                {adminCoupons.map((data) => (
                  <div key={data.id} className="relative">
                    <CouponCard data={data} />
                    <button
                      onClick={() => {
                        setDeleteConfirmationModal(true);
                        setId(data.id);
                      }}
                      className="absolute top-5 right-6 bg-[#f7e3e4] p-2.5 shadow-sm cursor-pointer rounded-full"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      {deleteConfirmationModal && (
        <DeleteConfirmationModal
          setDeleteCoupon={setDeleteCoupon}
          setDeleteConfirmationModal={setDeleteConfirmationModal}
        />
      )}
    </div>
  );
};

export default Coupons;
