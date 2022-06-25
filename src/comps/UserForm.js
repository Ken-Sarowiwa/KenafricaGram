import React, { useState } from "react"
const UserForm =()=>{

    const[file, setFile] = useState(null);
    const [error, SetError] = useState(null);
    const allowed_Types = ['img/png', 'img/jpg']

    function changeHandler(e){
        var selected = e.target.files[0];
        console.log(selected);

        if (selected && allowed_Types.includes(selected.allowed_Types)){
            setFile(selected)
            SetError("")
            
        } else{
            setFile(null);
            
            SetError("Kindly upload an image file with extensios png or jpg. Thank you")
        }
    
    }

    
    return(
        <div className="UserForm">
            <input type="file" onChange={changeHandler} />
                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div className="filename">{file.name}</div>}
                </div>
        </div>
    )
    
}

export default UserForm;
