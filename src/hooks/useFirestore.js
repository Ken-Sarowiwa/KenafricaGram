/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { projectstorage, projectfirestore, timestamp } from "../firebase/config";
import { useStorage } from "../hooks/useStorage";

// eslint-disable-next-line no-unused-vars
const useFirestore = (collection) => {
    const[docs, setDocs] = useState([]);
    useEffect(()=>{
        const collectionRef = projectfirestore.collection(collection);
        collectionRef.orderBy('createdAt', 'desc').onSnapshot(snapshot=>{
           let documents =[];
              snapshot.docs.forEach(doc=>{
                  documents.push({...doc.data(), id: doc.id});
              });
              setDocs(documents);
        });
       
        return ()=> collectionRef();

    }, [collection]);
    return {docs};
    
}

export default useFirestore;