import React, { useState } from "react"
import ProgressBar from "./ProgressBar";
function UserForm(){

    const[file, setFile] = useState(null);
    const [error, SetError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    function changeHandler(e){
        var selected = e.target.files[0];
        console.log(selected);

        if (selected && types.includes(selected.type)){
            SetError("");
            setFile(selected);
            
            
            
        }else{
            setFile(null);
            SetError("Please select an image file");
        }
    
    }

    
    return(
        <div className="container">
            <hr></hr>
            <form>
                <input type="file" onChange={changeHandler} />
                    <div className="output">
                        {error && <div className="error">{error}</div>}
                        {file && <div className="filename">{file.name}</div>}
                        {file &&  <ProgressBar file={file} setFile={setFile} />}
                    </div>
            </form>
        </div>
    )
    
}

export default UserForm;
