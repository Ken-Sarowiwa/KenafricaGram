import React from 'react'
import useFirestore from '../hooks/useFirestore'

export default function ImageGrid({setselectedImage}) {
  const {docs} = useFirestore('images');
  console.log(docs)
  return (
    <div className='img-grid'>
        {docs && docs.map(doc => (
          <div className='img-wrap' key={doc.id}
            onClick={()=>setselectedImage(doc.url)}
          >
            <img src={doc.url} alt={doc.name} />
          </div>
        ))}
        </div>
  )
}