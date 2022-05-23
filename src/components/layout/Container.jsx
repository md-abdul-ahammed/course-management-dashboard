import React from 'react'

export default function Container({
  children,
  onClick,
  style,
  className = '',
}) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`container mx-auto mb-5 xl:px-20 md:px-15 ${className}`}
    >
      {children}
    </div>
  )
}
