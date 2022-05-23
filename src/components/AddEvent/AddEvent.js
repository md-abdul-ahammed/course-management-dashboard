import React, { useRef, useState } from "react";
import AddImageIcon from "../AddImageIcon/AddImageIcon";
import PageHeader from "../PageHeader/PageHeader";
import CrossIcon from "../CrossIcon/CrossIcon";
import { adminAddEvent } from "../../redux/slices/adminEventSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getVideoDuration } from "../../util/util";

const AddEvent = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSelectFile = (e) => {
    const selectedFiles = e.target.files[0];
    setVideoFile(selectedFiles);
    setSelectedVideo(URL.createObjectURL(selectedFiles));
  };

  const handleAddEvent = () => {
    if (!title || !selectedVideo) {
      setError("Please Fill The All Required Field");
      return;
    }
    setError("");
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("video", videoFile);
    dispatch(adminAddEvent(myForm));
    navigate("/adminDashboard/events/activeEvents");
  };

  return (
    <div>
      <PageHeader title={"Create Event"} />
      <div className="px-[30px] pt-4 pb-16 ">
        <div className="flex flex-col space-y-3">
          {error && <div className="text-red">{error}</div>}
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full px-6 py-2 outline-none bg-[#FAFAFA] border-2 border-[#A4A4A4] placeholder:text-[#A8A8A8]  text-[#414141] rounded-lg"
            placeholder="Enter event title**"
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
                    controls
                    className="w-full h-[252px] shadow-sm rounded-3xl object-cover"
                    src={selectedVideo}
                    alt=""
                  ></video>
                </div>
              )}
            </label>
            {selectedVideo && (
              <button
                className="absolute top-6 w-[30px] right-6 "
                onClick={() => setSelectedVideo("")}
              >
                <CrossIcon className="w-full" />
              </button>
            )}
          </div>

          <div className="flex justify-center mt-5 gap-x-5">
            <button
              onClick={handleAddEvent}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
