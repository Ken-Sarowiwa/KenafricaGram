import { useState, useEffect } from "react";
import { projectstorage } from "../firebase/config";


const useStorage = (file)=>{

    const [progress, setProgress ] = useState(null)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)



    useEffect(()=>{
        const getFile = projectstorage.ref(file.name);
        getFile.put(file).on("status_changed", (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err)=>{
            setError(err);
        }, async()=>{
            const url = await getFile.getDownloadURL();
            setUrl(url);

        })


    }, [file]);

    return {progress, url, error}


}

export default useStorage;


