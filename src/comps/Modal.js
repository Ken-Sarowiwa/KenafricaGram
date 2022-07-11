import React from 'react'

export const Modal = ({selectedImage, setSelectedImage }) => {

  const onSelected = (e) => {
    if(e.target.className === 'Modal'){
      setSelectedImage(null);
    }

   
   
  }
  return (
    <div className='Modal' onClick={onSelected}>
      
        <img src={selectedImage} alt='enlarged pic'/>
    </div>
  )
}
