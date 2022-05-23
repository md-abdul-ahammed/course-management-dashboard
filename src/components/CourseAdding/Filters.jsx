import React, { useState, useEffect, Fragment } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseSelector,
  addSelectedImage,
  addSelectedVideo,
} from "../../redux/slices/AddCourseSlice";

const Filters = ({ proceedState2 }) => {
  const dispatch = useDispatch();
  const [, setProceed3] = proceedState2;
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [previewFile, setPreviewFile] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  const [viewAllPhoto, setViewAllPhoto] = useState(false);
  const addCourseReduxState = useSelector(addCourseSelector);

  const uploadFiles = () => {
    const myFile = document.getElementById("myFile");
    myFile.click();
  };

  const uploadFiles1 = () => {
    const myFile = document.getElementById("myFile1");
    myFile.click();
  };

  useEffect(() => {
    if (selectedImages.length > 0) dispatch(addSelectedImage(selectedImages));

    if (selectedVideos.length > 0) dispatch(addSelectedVideo(selectedVideos));
  }, [dispatch, selectedImages, selectedVideos]);

  const imageHandleChange = async (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);

      setSelectedImages((prev) => {
        const temp = [];

        prev.forEach((img) => temp.push(img));
        fileArray.forEach((file) => temp.push(file));

        return temp;
      });
    }
  };

  const videoChangeHandle = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);

      setSelectedVideos((prev) => {
        const temp = [];

        prev.forEach((vid) => temp.push(vid));
        fileArray.forEach((file) => temp.push(file));

        return temp;
      });
    }
  };

  return (
    <Fragment>
      {viewAllPhoto && (
        <div
          className=" absolute z-50 w-screen h-screen  "
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <img
            src={previewFile}
            alt="Rendering Media Images"
            className=" w-max"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <div className="flex flex-wrap justify-center relative w-screen  h-max gap-10  p-20 pb-20 pt-20 lg:pl-10">
            <IoIosClose
              className="text-white w-7 h-7 bg-black rounded-full absolute right-10 top-0 mr-20 mt-8 text-3xl"
              onClick={() => {
                setViewAllPhoto(!viewAllPhoto);
              }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col w-9/12 ">
        <h1 className=" hidden lg:flex text-2xl  space-x-2  items-center mt-4  font-dm-sans font-bold">
          Images & Videos
        </h1>

        <div className="flex flex-col w-full  lg:flex-row lg:space-x-10 lg:mt-10">
          <div
            className={`w-9/12   px-6 py-2  mb-6 lg:mb-0  rounded-xl text-base font-normal text-slate bg-white bg-clip-padding  border-2 border-solid ease-in-out m-0 `}
          >
            <h1 className="font-bold text-lg text-medium-white   py-4">
              Add images*
            </h1>
            <div className="border border-[#B9B9B9] z-0 h-28 w-full lg:my-3 relative rounded-lg">
              <MdAddPhotoAlternate
                className="text-3xl   mb-auto"
                style={{
                  position: "absolute",
                  transform: "translate(-50%,-50%)",
                  top: "50%",
                  left: "50%",
                }}
                onClick={uploadFiles1}
              />
              <input
                type="file"
                multiple
                id="myFile1"
                name="file"
                className="hidden"
                accept="image/*"
                onChange={imageHandleChange}
              />
            </div>
          </div>

          <div
            className={`w-full h-auto px-6 py-4 lg:py-0   relative -z-0 rounded-xl text-base font-normal text-slate bg-white border-2 border-solid m-0 `}
          >
            <div className="grid grid-cols-4 gap-3 py-4">
              {selectedImages.map((item, key) => {
                if (key < 8)
                  return (
                    <div
                      key={key}
                      className={`relative ${isDelete ? "hidden" : "block"}`}
                    >
                      <img
                        src={item}
                        key={key}
                        alt="Media Preview "
                        className="w-28 relative"
                        onClick={(e) => {
                          console.log(e);
                          // const file = e.target.__reactProps$v3szzt9tgxg.src
                          setPreviewFile(e.target.src);
                          setViewAllPhoto(!viewAllPhoto);
                        }}
                      />

                      <IoIosClose
                        className="text-white w-4 h-4 bg-black rounded-full absolute right-0 mt-1 mr-1 top-0  text-lg"
                        onClick={(e) => {
                          setPreviewFile(e.target.src);

                          console.log(e.target.src === previewFile);
                          if (e.target.src === previewFile) {
                            setIsDelete(true);
                          }
                          setViewAllPhoto(!viewAllPhoto);
                        }}
                      />
                    </div>
                  );
              })}
            </div>
          </div>
        </div>

        <Fragment>
          <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-5 lg:space-y-0 my-5 ">
            <div
              className={`w-9/12 h-auto px-6  py-2 lg:py-0  z-0 rounded-xl text-base font-normal text-slate bg-white border-2 border-solid m-0`}
            >
              <h1 className="font-bold text-lg text-medium-white  py-4">
                Add videos*
              </h1>
              <div className="border border-[#B9B9B9] h-28 w-full lg:my-3 relative rounded-lg">
                <MdAddPhotoAlternate
                  className="text-3xl   mb-auto"
                  style={{
                    position: "absolute",
                    transform: "translate(-50%,-50%)",
                    top: "50%",
                    left: "50%",
                  }}
                  onClick={uploadFiles}
                />
                <input
                  type="file"
                  multiple
                  id="myFile"
                  name="filename"
                  accept="video/*"
                  className="hidden"
                  onChange={videoChangeHandle}
                />
              </div>
            </div>

            <div
              className={`w-full ${
                selectedVideos.length > 0 ? "h-max" : "h-auto"
              }  py-8 px-6   relative -z-0 rounded-xl text-base font-normal text-slate bg-white border-2 border-solid 
               m-0`}
            >
              <div className=" flex gap-3 justify-center items-center">
                {selectedVideos.map((item, key) => {
                  if (key < 2)
                    return (
                      <div className="relative">
                        <video
                          controls
                          src={item}
                          key={key}
                          type="video/mp4"
                          className="relative mt-auto w-36 h-full"
                        />
                        <IoIosClose
                          className="text-white w-4 h-4 bg-black rounded-full absolute right-0 mt-1 mr-1 top-0  text-lg"
                          onClick={(e) => {
                            setPreviewFile(e.target.src);

                            console.log(e.target.src === previewFile);
                            if (e.target.src === previewFile) {
                              setIsDelete(true);
                            }
                          }}
                        />
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </Fragment>

        <div className=" hidden lg:flex justify-end">
          <button
            className="text-white bg-violet w-44 py-3 rounded-lg  "
            onClick={() => {
              setProceed3(true);
            }}
          >
            Save and Continue
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Filters;
