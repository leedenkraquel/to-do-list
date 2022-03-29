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
    const index = props.index; // represents where the task is in the list
    const name = props.name; // represents the name of the task
    const date = props.date; // represents when the task is supposed to be completed by
    const description = props.description; // represents the description of the task
    const handler = props.handler; // represents a function that should be run in the parent when this element is activated

    const onDelete = () => {
        let taskList = JSON.parse(localStorage.getItem("taskList"));
        taskList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        handler(taskList);
    }

    return (
        <div>
            <label>
                <input type="checkbox" />
                {name} - {date} <input type="button" className="button" value="🗑️" onClick={onDelete}/>
                <br />
                {description}
            </label>
        </div>
    );
}