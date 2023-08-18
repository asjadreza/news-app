import React from "react";
import styles from './Input.module.css'

function Input(props) {
    return(
        <div>
            {props.label && <label>{props.label}</label>}
            <input type="text"{...props} />

        </div>
    )
}

export default Input;