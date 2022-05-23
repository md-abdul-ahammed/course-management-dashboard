import axios from "axios";
import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import InputField from "../../components/InputField";
import { useDispatch } from "react-redux";
import { addInstituteInformation } from "../../redux/slices/merchantSlice";
import { isEmpty } from "../../components/utils";

const InstituteInformation = ({
  merchantDetailsState,
  pageState,
  progressState,
}) => {
  const [merchantDetails, setMerchantDetails] = merchantDetailsState;
  const [, setPage] = pageState;
  const [, setProgress] = progressState;
  const [instituteName, setInstituteName] = useState(
    merchantDetails.page0.instituteName
  );
  const [description, setDescription] = useState(
    merchantDetails.page0.description
  );
  const [instituteStart, setInstituteStart] = useState(
    merchantDetails.page0.instituteStart
  );
  const [addressLine1, setAddressLine1] = useState(
    merchantDetails.page0.addressLine1
  );
  const [addressLine2, setAddressLine2] = useState(
    merchantDetails.page0.addressLine2
  );
  const [pincode, setPincode] = useState(merchantDetails.page0.pincode);
  const [area, setArea] = useState(merchantDetails.page0.area);
  const [areaOptions, setAreaOptions] = useState([]);
  const [city, setCity] = useState(merchantDetails.page0.city);
  const [state, setState] = useState(merchantDetails.page0.state);
  const [country, setCountry] = useState(merchantDetails.page0.country);

  const [openingTime, setOpeningTime] = useState(
    merchantDetails.page0.openingTime
  );
  const [closingTime, setClosingTime] = useState(
    merchantDetails.page0.closingTime
  );
  const [isLoading, setIsLoading] = useState(false);

  // const [merchantCategoryError, setMerchantCategoryError] = useState("");
  const [instituteNameError, setInstituteNameError] = useState("");
  const [instituteStartError, setInstituteStartError] = useState("");
  const [addressLine1Error, setAddressLine1Error] = useState("");
  const [addressLine2Error, setAddressLine2Error] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [areaError, setAreaError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [closingTimeError, setClosingTimeError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [mode, setMode] = useState("online");

  const [openingTimeError, setOpeningTimeError] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMode(value);
  };

  const handleGenerateFromPincode = (e) => {
    e.preventDefault();
    if (pincode.length !== 6) {
      setPincodeError("Enter a valid pincode");
      setAreaOptions([]);
      setArea("");
      setCity("");
      setState("");
      setCountry("");
      return;
    }
    setIsLoading(true);

    axios
      .get(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => {
        setAreaOptions([]);
        res.data.map((item) =>
          item.PostOffice.forEach((po) => {
            setAreaOptions((prev) => {
              if (prev.indexOf(po.Name) === -1) {
                return [...prev, po.Name];
              }
              return prev;
            });
          })
        );
        setCity(res.data[0].PostOffice[0].District);
        setState(res.data[0].PostOffice[0].State);
        setCountry(res.data[0].PostOffice[0].Country);
        setIsLoading(false);
        setPincodeError("");
        setCityError("");
        setStateError("");
        setCountryError("");
      })
      .catch((err) => console.log(err));
  };

  const saveIsError = () =>
    instituteName === null ||
    instituteName?.length === 0 ||
    instituteStart === null ||
    instituteStart?.length === 0 ||
    description === null ||
    description?.length === 0 ||
    addressLine1 === null ||
    addressLine1?.length === 0 ||
    pincode === null ||
    pincode?.length !== 6 ||
    area === null ||
    area?.length === 0 ||
    city === null ||
    city?.length === 0 ||
    state === null ||
    state?.length === 0 ||
    country === null ||
    country?.length === 0;

  const handleSave = (e) => {
    e.preventDefault();
    console.log(isEmpty(description));
    if (isEmpty(instituteName))
      setInstituteNameError("Institute name is required");

    if (isEmpty(description)) setDescriptionError("Description is required");
    if (isEmpty(instituteStart))
      setInstituteStartError("Institute starting date is required");
    if (isEmpty(addressLine1))
      setAddressLine1Error("Address line 1 is required");
    if (isEmpty(addressLine2))
      setAddressLine2Error("Address line 2 is required");
    if (isEmpty(pincode)) setPincodeError("Pincode is required");
    else if (pincode?.length !== 6)
      setPincodeError("Please enter a valid pincode");
    if (isEmpty(area)) setAreaError("Area is required");
    if (isEmpty(city)) setCityError("City is required");
    if (isEmpty(state)) setStateError("State is required");
    if (isEmpty(country)) setCountryError("Country is required");
    if (saveIsError()) {
      alert("Please fill all the fields");
      return;
    }

    dispatch(
      addInstituteInformation({
        instituteName,
        description,
        instituteStart,
        addressLine1,
        addressLine2,
        pincode,
        area,
        city,
        state,
        country,
        classmode: mode,
        workingtime:
          openingTime && closingTime
            ? `${openingTime} to ${closingTime}`
            : null,
      })
    );

    setProgress((progress) => progress + 1);
    setPage((page) => page + 1);
    window.localStorage.setItem("PAGE", 1);
  };

  return (
    <form className="text-left w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2 mb-4">
        <h1 className="text-xl font-medium text-slate">
          Tell us more about your business
        </h1>
        <div className="h-1 w-36 bg-violet"></div>
      </div>
      <InputField
        className=""
        inputState={[instituteName, setInstituteName]}
        placeholderText="Institute Name*"
        errorState={[instituteNameError, setInstituteNameError]}
      />

      <InputField
        className=""
        type="textarea"
        inputState={[description, setDescription]}
        placeholderText="Describe your institute *"
        errorState={[descriptionError, setDescriptionError]}
      />

      {/* <div
        className={` border-light-gray px-4 py-2 w-full shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid  first-letter:transition ease-in-out m-0`}
      >
        <textarea
          id='w3review'
          name='w3review'
          rows='4'
          cols='50'
          required
          className='text-slate placeholder-slate w-full focus:outline-none'
          onChange={(e) => {
            e.preventDefault()
            setDescription(e.target.value)
          }}
          placeholder='Describe your institute *'
        />{' '}
      </div> */}

      <InputField
        className=""
        type="number"
        inputState={[instituteStart, setInstituteStart]}
        placeholderText="When was this institute started"
        errorState={[instituteStartError, setInstituteStartError]}
      />

      <h2 className="text-lg font-medium text-slate my-4">Type of Institute</h2>
      <div
        className={` border-light-gray px-4 py-2 w-full shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid  first-letter:transition ease-in-out m-0`}
      >
        <div className="flex justify-center items-center">
           {" "}
          <label for="online" className="">
            Online mode only
          </label>
          <input
            type="radio"
            id="online"
            name="institute"
            value="online"
            className=" block ml-auto justify-start items-start "
            onChange={handleChange}
          />
        </div>
        <hr className="my-4" style={{ color: "#D2D2D2" }} />

        <div className="flex justify-center items-center">
            <label for="offline">Offline mode only</label> {" "}
          <input
            type="radio"
            id="css"
            name="institute"
            value="offline"
            className="block ml-auto justify-start items-start"
            onChange={handleChange}
          />
        </div>
        <hr className="my-4" style={{ color: "#D2D2D2" }} />
        <div className="flex justify-center items-center">
            <label for="hybrid">Both (Hybrid mode)</label> {" "}
          <input
            type="radio"
            id="hybrid"
            name="institute"
            value="hybrid"
            className="block ml-auto justify-start items-start"
            onChange={handleChange}
          />
        </div>
      </div>
      {mode === "online" ? (
        ""
      ) : (
        <div>
          <h2 className="text-lg font-medium text-slate my-4">
            Institute Operational Details
          </h2>
          <div className="flex items-center flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            <div className=" flex w-full flex-col space-y-2">
              <p className="w-fit">Opening Time</p>
              {openingTimeError.length > 0 && (
                <p className="w-full text-right text-xs text-red">
                  {openingTimeError}
                </p>
              )}
              <input
                type="time"
                value={openingTime}
                onChange={(e) => {
                  e.preventDefault();
                  setOpeningTime(e.target.value);
                  setOpeningTimeError("");
                }}
                className={`select-none form-select   marker:block w-full px-4 py-2 text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid ${
                  openingTimeError.length === 0
                    ? "border-light-gray"
                    : "border-red"
                } rounded-xl shadow-md first-letter:transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              />
            </div>
            <div className=" flex w-full flex-col space-y-2">
              <p className="w-fit">Closing Time</p>
              {closingTimeError.length > 0 && (
                <p className="w-full text-right text-xs text-red">
                  {closingTimeError}
                </p>
              )}
              <input
                type="time"
                value={closingTime}
                onChange={(e) => {
                  e.preventDefault();
                  setClosingTime(e.target.value);
                  setClosingTimeError("");
                }}
                className={`select-none form-select   marker:block w-full px-4 py-2 text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid ${
                  closingTimeError.length === 0
                    ? "border-light-gray"
                    : "border-red"
                } rounded-xl shadow-md first-letter:transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              />
            </div>
          </div>{" "}
        </div>
      )}

      {/* <CategorySelect
        categories={["Online", "Offline", "Skillbased"]}
        selectedState={[merchantCategory, setMerchantCategory]}
        placeholderText="Choose your category"
        errorState={[merchantCategoryError, setMerchantCategoryError]}
      /> */}

      <h2 className="text-lg font-medium text-slate my-4">Address</h2>
      <InputField
        className=""
        inputState={[addressLine1, setAddressLine1]}
        placeholderText="Address Line 1"
        errorState={[addressLine1Error, setAddressLine1Error]}
      />
      <InputField
        className=""
        inputState={[addressLine2, setAddressLine2]}
        placeholderText="Address Line 2"
        errorState={[addressLine2Error, setAddressLine2Error]}
      />
      <div className="flex  items-end justify-center lg:-my-4 m-0 p-0">
        <InputField
          className="  lg:w-96"
          inputState={[pincode, setPincode]}
          placeholderText="Pincode"
          errorState={[pincodeError, setPincodeError]}
          onChange={(e) => handleGenerateFromPincode(e)}
        />
        <button
          onClick={(e) => handleGenerateFromPincode(e)}
          className="shadow-md mb-4 ml-2 w-36 text-base h-full px-4 py-2 rounded-xl border-2 border-light-gray hover:bg-light-gray"
        >
          {isLoading ? "Loading..." : "Generate"}
        </button>
      </div>
      <div className="flex items-end justify-center -my-4 p-0 space-x-2">
        <InputField
          className=""
          inputState={[country, setCountry]}
          placeholderText="Country"
          errorState={[countryError, setCountryError]}
        />
        <InputField
          className=""
          inputState={[state, setState]}
          placeholderText="State"
          errorState={[stateError, setStateError]}
        />
      </div>
      <div className="flex items-end justify-center -my-4 m-0 p-0 space-x-2">
        <InputField
          className=""
          inputState={[city, setCity]}
          placeholderText="City"
          errorState={[cityError, setCityError]}
        />
        <Dropdown
          placeholderText={"Choose Area"}
          selectValueState={[area, setArea]}
          options={areaOptions}
          errorState={[areaError, setAreaError]}
        />
      </div>
      <div className="w-full flex items-center justify-center my-6">
        <button
          onClick={(e) => handleSave(e)}
          className="my-2 transition-all hover:-translate-y-1 border-2 bg-[#9766CD] shadow-md hover:shadow-lg rounded-full px-10 py-3 text-white font-medium"
        >
          Save &amp; Continue
        </button>
      </div>
    </form>
  );
};

export default InstituteInformation;
