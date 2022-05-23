import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'

export const CLoseBtn = ({ className }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`${className} text-violet text-xl float-right hidden md:block cursor-pointer`}
    >
      <div onClick={() => navigate(-1)}>
        <FaTimes />
      </div>
    </div>
  )
}

export const Check = ({ className }) => {
  return (
    <div
      className={`${className} rounded-full p-1 text-sm`}
      style={{ backgroundColor: '#0D9F1C40', color: '#0D9F1C' }}
    >
      <BsCheckLg />
    </div>
  )
}

export const Times = ({ className }) => {
  return (
    <div
      className={`${className} rounded-full p-1 text-sm`}
      style={{ backgroundColor: '#E46060', color: '#fff' }}
    >
      <FaTimes />
    </div>
  )
}
