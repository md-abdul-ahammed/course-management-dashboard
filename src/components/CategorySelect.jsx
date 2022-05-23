import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'

const CategorySelect = ({
  className = '',
  categories,
  placeholderText,
  selectedState,
  errorState,
}) => {
  const [selected, setSelected] = selectedState
  const [error, setError] = errorState
  const [optionSelected, setOptionSelected] = useState('')
  console.log(optionSelected)

  const handleSelect = (e) => {
    e.preventDefault()
    const currentValue = e.target.value
    if (!selected.includes(currentValue)) {
      setError('')
      setSelected([...selected, currentValue])
    }
    setOptionSelected('')
  }

  const removeSelected = (name) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name))
    }
  }

  return (
    <div className={` my-4 flex-col ${className}`}>
      {error.length > 0 && (
        <p className=' text-xs w-full text-right text-red'>{error}</p>
      )}
      <select
        value={optionSelected}
        onChange={(e) => handleSelect(e)}
        className={`my-2 form-select sm:text-sm  marker:block w-full px-4 py-2 text-base font-normal text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid ${
          error.length === 0 ? 'border-light-gray' : 'border-red'
        } rounded-xl shadow-md first-letter:transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
      >
        <option
          className='w-full text-xs sm:text-sm'
          selected
          value=''
          disabled
        >
          {placeholderText}
        </option>
        {categories.map((category) => {
          return (
            <option className='w-full text-xs sm:text-sm text-black'>
              {category}
            </option>
          )
        })}
      </select>
      <div className='flex flex-wrap'>
        {selected.map((name) => (
          <CategoryTag categoryName={name} removeSelected={removeSelected} />
        ))}
      </div>
    </div>
  )
}

const CategoryTag = ({ categoryName, removeSelected }) => {
  return (
    <div className='mr-4 mb-2 w-fit px-4 py-2  font-dm-sans space-x-2 flex border border-light-gray rounded-xl shadow-md bg-violet/10'>
      <p className=''>{categoryName}</p>
      <button
        className='text-lg text-violet'
        onClick={() => removeSelected(categoryName)}
      >
        <GrFormClose color='#7D23E0' className='text-violet' />
      </button>
    </div>
  )
}

export default CategorySelect
