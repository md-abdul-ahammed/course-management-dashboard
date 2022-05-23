import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GiCancel } from "react-icons/gi";
import { AiOutlineDownload } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 355,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export default function PurchaseDetailsModal({
  open,
  setOpen,
  handleOpen,
  details,
  image,
  date
}) {
  const handleClose = () => setOpen(false);


 const [mode, setMode] = React.useState('')

 React.useEffect(() => {
  if(details?.classtype === 1){
    setMode('Offline And Online')
  }
  else if(details?.classtype === 2){
    setMode('Online')
  }
  else if(details?.classtype === 3){
    setMode('Offline')
  }

 },[details])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between mb-3">
            <p className="text-2xl">Purchase Details</p>
            <GiCancel
              onClick={() => {
                handleClose();
              }}
              className="text-right text-2xl text-violet cursor-pointer"
            ></GiCancel>
          </div>

          <div>
            <div className="flex items-center">
              <img src={image} alt="" className="w-20 h-20 rounded-xl" />
              <div className="ml-3">
                <p className="text-lg text-ghost/90 ">{details?.institute?.name}</p>
                <p className="text-lg">{details?.name}</p>
                <div className="flex items-center">
                  
                {
                  mode === 'Offline' ? <div className="h-2 w-2 rounded-full bg-ghost/90 "></div> : <div className="h-2 w-2 rounded-full bg-green/90 "></div>
                }
                <p className="ml-2">{mode}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center my-3 text-violet cursor-pointer">
              <p>Download Receipt</p>{" "}
              <AiOutlineDownload className="text-xl ml-1" />
            </div>

            <hr className="my-3 text-ghost/80" />

            <div className="text-ghost/90">
              <div className="flex justify-between">
                <p>Amount</p>
                <p>₹{details?.grossprice}</p>
              </div>
              <div className="flex justify-between mt-1">
                <p>Material Cost</p>
                <p>₹{details?.effectiveprice}</p>
              </div>
              <div className="flex justify-between mt-1">
                <p>GST</p>
                <p>₹{(details?.grossprice*18)/100}</p>
              </div>
              <div className="flex justify-between mt-1 text-violet">
                <p>Coupon</p>
                <p>₹{details.coupon}</p>
              </div>
              <div className="flex justify-between mt-1 text-red/90">
                <p>Discount</p>
                <p>₹{details?.discountprice}</p>
              </div>
            </div>

            <hr className="my-3 text-ghost/80" />
            <div className="flex justify-between my-1 text-2xl">
              <p>Total</p>
              <p>₹{(details?.grossprice + details?.effectiveprice + (details?.grossprice*18)/100) - details?.discountprice  }</p>
            </div>
            <hr className="my-3 text-ghost/80" />

            <div className="my-2 flex justify-between">
              <p className="text-ghost/100 ">Course Duration</p>
              <p className="">{details?.duration}</p>
            </div>
            <div className="my-2 flex justify-between">
              <p className="text-ghost/100">Payment Method</p>
              <p className="">{details.paymentMethod}</p>
            </div>
            <div className="my-2 flex justify-between">
              <p className="text-ghost/100">Purchase Date</p>
              <p className="">{date}</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
