import React from "react";
import './button.css';

const Button = (props) =>{
    return(
        <button className={props.className} style={props.color ? {backgroundColor : `${props.color}`} : {backgroundColor : "#d8dfeb",color:"white",width:`${props.width}`} } onClick={props.onClick}>{props.name}</button>
    )
}

export default Button;
