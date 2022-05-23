import React from "react";

const InputField = ({
  inputState,
  placeholderText,
  className = "",
  errorState,
  type = "text",
}) => {
  const [error, setError] = errorState;
  const [inputValue, setInputValue] = inputState;
  return (
    <div className="flex-col flex w-full my-4 transition-all">
      {error.length > 0 && (
        <p className="w-full text-xs text-right text-red">{error}</p>
      )}
      <div
        className={`${className}  px-4 py-2 w-full shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid ${
          error.length !== 0 ? "border-red" : "border-light-gray"
        } first-letter:transition ease-in-out m-0`}
      >
        {type === "textarea" ? (
          <div>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              required
              className="text-slate placeholder-slate w-full focus:outline-none"
              onChange={(e) => {
                e.preventDefault();
                setInputValue(e.target.value);
                setError("");
              }}
              placeholder={placeholderText}
            />{" "}
          </div>
        ) : (
          <input
            type={`${type}`}
            className=" text-slate placeholder-slate w-full focus:outline-none"
            value={inputValue}
            onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value);
              setError("");
            }}
            placeholder={placeholderText}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
