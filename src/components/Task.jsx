import React from "react";

/*
* Name: Task
* Inputs:
*   props - standard information passed to all children
* Description: represents the task objects
* Returns:
*   component - the output component for the task
*/
export default function Task (props) {
    const name = props.name; // represents the name of the task
    const date = props.date; // represents when the task is supposed to be completed by
    const description = props.description; // represents the description of the task

    const onDelete = () => {
        alert("Trash Can");
    }

    return (
        <div>
            <label>
                <input type="checkbox" />
                {name} - {date} <input type="button" value="🗑️" onClick={onDelete}/>
                <br />
                {description}
            </label>
        </div>
    );
}