import React, { useEffect, useState } from "react";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import PageHeader from "../PageHeader/PageHeader";
import CrossIcon from "../CrossIcon/CrossIcon";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  adminDeleteEvent,
  adminUpdateEvent,
  fetchAdminEvent,
} from "../../redux/slices/adminEventSlice";

const EditEvent = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { adminEvent } = useSelector((state) => state.adminEvents);
  const { id, title, videourl } = adminEvent;
  const [eventTitle, setEventTitle] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const navigate = useNavigate();
  console.log(eventId);

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files[0];
    setVideoFile(selectedFiles);
    setSelectedVideo(URL.createObjectURL(selectedFiles));
  };

  const handleDelete = () => {
    dispatch(adminDeleteEvent(id));
  };

  const updateEvent = () => {
    if (!eventTitle) {
      setError("Please Fill The All Required Field");
      return;
    }
    setError("");
    const updates = JSON.stringify({
      title: eventTitle,
    });

    const myForm = new FormData();
    myForm.append("id", eventId);
    myForm.append("updates", updates);
    myForm.append("video", videoFile);
    dispatch(adminUpdateEvent(myForm));
    navigate("/adminDashboard/events/activeEvents");
  };

  useEffect(() => {
    dispatch(fetchAdminEvent(eventId));
  }, [dispatch, eventId]);

  return (
    <div>
      <PageHeader title={"Edit Event"} />
      <div className="px-[30px] pt-4 pb-16 ">
        <div className="flex flex-col space-y-3">
          {error && <div className="text-red">{error}</div>}
          <input
            defaultValue={title}
            key={title}
            type="text"
            onChange={(e) => setEventTitle(e.target.value)}
            className="w-full px-6 bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Enter blog title*"
          />
          <div className="relative w-full md:w-[50%] lg:w-[35%] p-3 border-2 text-[#A8A8A8] h-[280px] overflow-hidden rounded-lg border-[#A4A4A4]">
            <label>
              {!selectedVideo ? (
                <div className="h-full">
                  <p className="h-[10%]">Add Video*</p>
                  <div className="h-[90%] flex justify-center items-center flex-col">
                    <AddImageIcon />
                    <p className="text-[20px]">Add Video</p>
                  </div>
                  <input
                    onChange={onSelectFile}
                    accept="video/*"
                    type="file"
                    className="hidden"
                  />
                </div>
              ) : (
                <div>
                  <video
                    className="w-full h-[252px] shadow-sm rounded-3xl object-cover"
                    src={selectedVideo}
                    alt=""
                  />
                </div>
              )}
            </label>
            {selectedVideo && (
              <button
                className="absolute top-6 w-[30px] right-6 "
                onClick={() => setSelectedVideo(null)}
              >
                <CrossIcon className="w-full" />
              </button>
            )}
          </div>
          <div className="flex md:flex-row flex-col justify-center mt-5 gap-y-5 md:gap-x-5">
            <button
              onClick={updateEvent}
              className="px-12 font-bold rounded-lg py-2 text-white bg-[#7D23E0]"
            >
              Confirm
            </button>
            <Link
              to="/adminDashboard/events/activeEvents"
              className="px-12 font-bold rounded-lg py-2 text-white bg-[#E46060]"
            >
              Cancel
            </Link>
            <button
              onClick={handleDelete}
              className="px-12 font-bold rounded-lg py-2 text-[#414141] bg-[#F0F0F0]"
            >
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
