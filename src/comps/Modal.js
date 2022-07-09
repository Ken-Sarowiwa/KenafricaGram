import React from 'react'

export const Modal = ({selectedImage}) => {
  return (
    <div className='Modal'>
        <img src={selectedImage} alt='enlarged pic'/>
    </div>
  )
}
