


//component to track the progress of a file upload, and display the progress in a progress bar. The component should accept a file object as a prop.
import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';

export default function ProgressBar({file, setFile}) {
    const {url, progress} = useStorage(file);
    console.log(url, progress);


    useEffect(()=>{
      if(url){
        setFile(null);
      }

    },[url, setFile])

  return (
    <div className='progress-bar' style={ {width: progress+ '%' }}></div>
  )
}

