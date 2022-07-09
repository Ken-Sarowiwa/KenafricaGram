import { useState, useEffect } from "react";
import { projectstorage, projectfirestore, timestamp } from "../firebase/config";


const useStorage = (file)=>{

    const [progress, setProgress ] = useState(null)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)



    useEffect(()=>{
        const getFile = projectstorage.ref(file.name);
        const collectionRef = projectfirestore.collection('images');
        getFile.put(file).on("status_changed", (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err)=>{
            setError(err);
        }, async()=>{
            const url = await getFile.getDownloadURL();
            setUrl(url);
            const createdAt = timestamp();
            collectionRef.add({url, createdAt})

        })


    }, [file]);

    return {progress, url, error}


}

export default useStorage;


