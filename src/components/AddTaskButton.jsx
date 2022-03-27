import React from 'react';
import './AddTaskButton.css'
import { useNavigate } from 'react-router-dom';

/*
* Name: AddTaskButton
* Author(s): Leeden Raquel
* Inputs:
*   none
* Description: represents a button that navigates the user to the add task page
* Returns:
*   component - the output component that represents the add task button
*/
export default function AddTaskButton () {
    const navigate = useNavigate(); // hook used to change the route of the app

    /*
    * Name: handleOnClick
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: when the add task button is clicked the route should be changed to the
    *   add task page
    * Returns:
    *   none
    * */
    const handleOnClick = () => {
        navigate("/AddTask");
    };

    return <div className="center">
        <button className="button" onClick={handleOnClick}>Add Task</button>
    </div>;
}