import React from 'react';
import './AddTaskButton.css'
import { useNavigate } from 'react-router-dom';

export default function AddTaskButton () {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/AddTask");
    };

    return <div className="center">
        <button className="button" onClick={handleOnClick}>Add Task</button>
    </div>;
}