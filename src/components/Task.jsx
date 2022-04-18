import React from "react";
import { getSession } from "../managers/userManager";
import { deleteTask, fetchAllData } from "../managers/taskManager";
import Modal from "./Modal";
import "./Task.css";

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
    const taskID = props.id; // represents the id of the task
    const name = props.name; // represents the name of the task
    const date = props.date; // represents when the task is supposed to be completed by
    const handler = props.handler; // represents a function that should be run in the parent when this element is activated
 

    const deleteEntry = () => { // deletes the task 
        getSession().then((session) => {
            let username = session.idToken.payload.sub; // get the username of the user
            deleteTask(username, taskID);
            fetchAllData(username).then((data) => {
                let taskList = data.Items; // get the data from the database
                handler(taskList); // update the list of tasks
            })
        })
    };
    
    const confirmDelete = <Modal  // represents a modal that confirms the users decision to delete a task
    buttonValue="🗑️"
    modalValue="Are you sure you wish to delete this task?" 
    onConfirm={deleteEntry} /> 

    return (
        <div className="task">
            <label>
                <input type="checkbox" />
                {name} - {date} {confirmDelete}
            </label>
        </div>
    );
}