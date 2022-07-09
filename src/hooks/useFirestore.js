import { useEffect, useState } from "react";
import { projectstorage, projectfirestore, timestamp } from "../firebase/config";
import { useStorage } from "../hooks/useStorage";
import { useAuth } from "../hooks/useAuth";

const useFirestore = (collection) => {
    const[docs, setDocs] = useState([]);
    useEffect(()=>{
        const collectionRef = projectfirestore.collection(collection);
        collectionRef.orderBy('createdAt', 'desc').onSnapshot(snapshot=>{
           let documents =[];
              snapshot.docs.forEach(doc=>{
                  documents.push({...doc.data(), id: doc.id});
              }
        });
        setDocs(documents);
        
    }, [collection]);
    return {docs};
}