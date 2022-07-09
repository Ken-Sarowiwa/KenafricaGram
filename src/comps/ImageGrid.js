import React from 'react'
import useFirestore from '../hooks/useFirestore'

export default function ImageGrid() {
  const {docs} = useFirestore('images');
  console.log(docs)
  return (
    <div className='container'>
        <hr></hr>
        <div className='grid'>
        {docs && docs.map(doc => (
          <div className='image-wrap' key={doc.id}>
            <img src={doc.url} alt={doc.name} />
          </div>
        ))}
        </div>
    </div>
  )
}
