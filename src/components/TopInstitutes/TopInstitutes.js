import React, { useEffect } from "react";
import active from "../../util/assets/images/active.png";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminInstitutes } from "../../redux/slices/adminInstitutesSlice";
import Loader from "../Loader/Loader";
import { isEmpty } from "../utils";

const TopInstitutes = () => {
  const dispatch = useDispatch();
  const { loading, adminInstitutes, isUpdated } = useSelector(
    (state) => state.adminInstitutes
  );

  useEffect(() => {
    dispatch(fetchAdminInstitutes());
  }, [dispatch, isUpdated]);

  return (
    <div className="bg-white p-5 rounded-lg">
      <div>
        <h4 className="capitalize font-bold text-[21px]">Top Institutes</h4>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="space-y-2 pt-3">
          {!isEmpty(adminInstitutes) ? (
            <>
              <div className="text-[#CBCBCB] flex font-medium pr-3 justify-end">
                Reviews
              </div>
              <div className="max-h-[288px] pr-2 overflow-y-auto">
                {adminInstitutes.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-x-2 pb-2">
                      <div>
                        <img src={active} alt="" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="capitalize text-[16px] font-semibold">
                          {data.name}
                        </p>
                        <p className="text-[#6B7280] text-[14px]">
                          {data.locations[0].city},{data.locations[0].state}
                        </p>
                      </div>
                    </div>
                    <div className="flex bg-[#FFD130] px-2 justify-center text-white font-bold rounded-lg  items-center">
                      {data.rating}
                      <AiFillStar className="ml-1" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="py-8 font-medium flex justify-center">
              No pending requests are available now
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopInstitutes;
