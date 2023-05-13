import React from "react";  
import "./InputField.css"

const InputField = (props) =>{
    return (
        <>
            <input type={props.type} value={props.value} placeholder={props.name} className="input-field" onChange={props.handleChange}/>
        </>
    )
}

export default InputField;