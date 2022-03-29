import React from "react";
import Modal from "./Modal";

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
 

    const deleteTask = () => { // deletes the task 
        let taskList = JSON.parse(localStorage.getItem("taskList"));
        taskList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        handler(taskList);
    };
    
    const confirmDelete = <Modal  // represents a modal that confirms the users decision to delete a task
    buttonValue="🗑️"
    modalValue="Are you sure you wish to delete this task?" 
    onConfirm={deleteTask} /> 

    return (
        <div>
            <label>
                <input type="checkbox" />
                {name} - {date} {confirmDelete}
                <br />
                {description}
            </label>
        </div>
    );
}