// }

export const CustomInputField = ({
  inputState = [],
  name,
  description,
  className = '',
  disableState,
}) => {
  const [, setInputValue] = inputState
  const [isDisable] = disableState

  return (
    <div className=' lg:py-2'>
      <div className=''>
        <div
          className={` ${className} shrink w-full px-6 py-2  shadow-md rounded-xl text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid border-light-gray first-letter:transition ease-in-out m-0`}
        >
          <h2 className=' mb-1' style={{ fontSize: '15px' }}>
            {name}
          </h2>

          <input
            type='text'
            placeholder={description}
            autoFocus
            className='text-xl bg-white  focus:outline-none w-full'
            defaultValue={description}
            disabled={isDisable ? true : false}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}
