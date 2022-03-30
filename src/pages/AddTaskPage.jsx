import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './AddTaskPage.css';
import { useNavigate } from 'react-router-dom';

/*
* Name: AddTaskPage
* Author(s): Leeden Raquel
* Inputs:
*   props - standard information passed to all children
* Description: represents the page where a user would add a task
* Returns:
*   component - the output component form that represents the add task page
*/
export default function AddTaskPage (props) {
    const [taskName, setTaskName] = useState(""); // represents the tasks name
    const [description, setDescription] = useState(""); // represents the tasks description
    const [date, setDate] = useState(new Date()); // represents when the task should be completed by
    const navigate = useNavigate(); // hook used to change the route of the web app

    /*
    * Name: handleSubmit
    * Author(s): Leeden Raquel
    * Inputs:
    *   event - the returned object of the form
    * Description: once the form is submit, the app should create a corresponding task
    *   then route back to the landing page
    * Returns:
    *   none
    */
    const handleSubmit = (event) => { 
        event.preventDefault(); // supress the default behavior of the submit button
        let newTask ={ // define the new task that is to be added
            "taskName": taskName,
            "date": date.toLocaleTimeString().slice(0, -6) + date.toLocaleTimeString().slice(-2) + " " + date.toLocaleDateString(),
            "description": description
        };
        let taskList = JSON.parse(localStorage.getItem("taskList")) || []; // if there already exists a task list in the storage use that instead
        taskList.push(newTask); // add the new task to the task list
        localStorage.setItem("taskList", JSON.stringify(taskList)); // save the new task list to the storage
        navigate("/"); // route to the landing page
    }

    /*
    * Name: handleCancel
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: if the user cancels the task navigate back to the landing page
    * Returns:
    *   none
    */
    const handleCancel = () => {
        navigate("/"); // route to the landing page
    }

    return (
    <div className="container">
        <form className="taskForm" onSubmit={handleSubmit}>
            <label>
                Name
                <br />
                <input 
                    type="text" 
                    value={taskName.value} 
                    placeholder="I need to..." 
                    onChange={(e) => setTaskName(e.target.value)}
                    required />
            </label>
            <br />
            <label>
                Time
                <br />
                <DateTimePicker 
                    className="picker" 
                    value={date} 
                    clearIcon={null} 
                    calendarIcon={null} 
                    minDate={new Date()} 
                    onChange={setDate} 
                    disableClock={true} />
            </label>
            <label>
                Description
                <br />
                <textarea 
                    className="description" 
                    value={description.value} 
                    onChange={(e) => setDescription(e.target.value)} 
                    rows={10} />
            </label>
            <br />
            <input type="button" className="button" value="Cancel" onClick={handleCancel}/>
            <input type="submit" className="button" value="Add Task"/>
        </form>
    </div>);
}