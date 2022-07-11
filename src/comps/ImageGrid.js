import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion';

export default function ImageGrid({setselectedImage}) {
  const {docs} = useFirestore('images');
  console.log(docs)
  return (
    <div className='img-grid'>
        {docs && docs.map(doc => (
          <motion.div className='img-wrap' key={doc.id}
            onClick={()=>setselectedImage(doc.url)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
          >
            <img src={doc.url} alt={doc.name} />
          </motion.div>
        ))}
        </div>
  )
}
