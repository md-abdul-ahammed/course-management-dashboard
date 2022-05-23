import React from 'react'
import styled from 'styled-components'

export default function Modal({ open, children, onClose, modalRef }) {
  if (!open) return null

  return (
    <>
      <div
        className='h-screen w-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]  z-[999] '
        ref={modalRef}
        onClick={() => {
          onClose()
        }}
      >
        <ModalContainer
          className=' rounded-lg '
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </ModalContainer>
      </div>
    </>
  )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
`
