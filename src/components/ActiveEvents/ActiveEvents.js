import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EventCard from "../AdminCard/EventCard";
import PageHeader from "../PageHeader/PageHeader";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  adminDeleteEvent,
  fetchAdminEvents,
} from "../../redux/slices/adminEventSlice";
import Loader from "../Loader/Loader";

const ActiveEvents = () => {
  const dispatch = useDispatch();

  const { adminEvents, loading, isDeleted, isAddedNewEvent } = useSelector(
    (state) => state.adminEvents
  );

  const handleDelete = (id) => {
    console.log(id);
    dispatch(adminDeleteEvent(id));
  };

  useEffect(() => {
    dispatch(fetchAdminEvents());
  }, [dispatch, isAddedNewEvent, isDeleted]);
  return (
    <div>
      <PageHeader
        title={"Active Events"}
        actionName={"Add Event"}
        route={"/adminDashboard/events/addEvent"}
      />
      {adminEvents.length === 0 ? (
        <div className="py-8 mx-10 w-4/6 font-medium bg-white flex justify-center">
          No active events are available now
        </div>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div className="px-[30px] pt-4 pb-16">
              <div className="grid gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                {adminEvents.map((data, index) => (
                  <div key={index} className="relative">
                    <EventCard data={data} />
                    <div
                      onClick={() => handleDelete(data.id)}
                      className="absolute top-8 right-8 bg-white p-2.5 shadow-lg cursor-pointer rounded-full"
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActiveEvents;
