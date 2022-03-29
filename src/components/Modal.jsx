import React, { useState } from "react";
import './Modal.css';

/*
* Name: Modal
* Author(s): Leeden Raquel
* Inputs:
*   props - standard information passed to all children
* Description: a pop up window
* Returns:
*   component - the output component form that represents a Modal
*/
export default function Modal (props) {
    const [visible, setVisible] = useState(false); // represents whether the modal is visible
    const buttonValue = props.buttonValue; // represents the child of the button
    const modalValue = props.modalValue; // represents the child of the modal
    const modalTitle = props.modalTitle || ""; // represents the a title of the modal
    const onClick = () => {setVisible(!visible);}; // toggle the visibility of the modal
    const onConfirm = props.onConfirm || onClick; // represents the function from the parent

    return visible ? (
        <div className="modal">
            <h2>{modalTitle}</h2>
            <p>{modalValue}</p>
            <span>
                <button className="button2" onClick={onClick}> Cancel </button>
                <button className="button2" onClick={onConfirm}> Confirm </button>
            </span>
        </div>
    ) : (
        <button className="button" onClick={onClick}> {buttonValue} </button>
    );
}