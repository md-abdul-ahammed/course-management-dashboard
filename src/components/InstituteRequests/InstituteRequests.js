import React, { useEffect, useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAdminInstitutes } from "../../redux/slices/adminInstitutesSlice";
import HybridIcon from "../HybridIcon/HybridIcon";
import Loader from "../Loader/Loader";

const InstituteRequests = () => {
  const dispatch = useDispatch();
  const { loading, adminInstitutes, error, isUpdated } = useSelector(
    (state) => state.adminInstitutes
  );

  useEffect(() => {
    dispatch(fetchAdminInstitutes());
  }, [dispatch, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid pb-[40px] md:grid-cols-2 gap-8 lg:gap-x-8">
          {adminInstitutes.filter((data) => data.approval === 4).length ===
          0 ? (
            <div className="py-8 font-medium bg-white flex justify-center">
              No institute requests are available now
            </div>
          ) : (
            <>
              {adminInstitutes
                ?.filter((data) => data.approval === 4)
                .map((data, index) => (
                  <div key={index}>
                    <div className="bg-white px-[18px] border border-light-gray rounded-lg py-3.5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-[21px] text-[#414141] font-bold ">
                            {data.name}
                          </h3>
                          <div className="text-[#767676] flex">
                            <p className="mr-1">{data.locations[0].state},</p>
                            {data.locations[0].city}
                          </div>
                        </div>
                        <Link
                          to={`/editInstitute/${data.id}`}
                          className="font-medium text-[#ffffff] text-[20px] px-4 rounded-md py-1 bg-[#7D23E0]"
                        >
                          Review
                        </Link>
                      </div>
                      <div className="flex items-center">
                        {data.classmode === 1 ? (
                          <HybridIcon />
                        ) : (
                          <BsFillCircleFill
                            className={`text-[6px] ${
                              data.classmode === 2
                                ? "text-[#3AC817]"
                                : "text-red-600"
                            }`}
                          />
                        )}
                        <span className="ml-2 capitalize text-[#414141]">
                          {data.classmode === 1
                            ? "Hybrid"
                            : data.classmode === 2
                            ? "Online"
                            : "Offline"}
                        </span>
                      </div>
                      <div className="text-[18px] text-[#747474]">
                        {data.description.substring(0, 100)}
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default InstituteRequests;
