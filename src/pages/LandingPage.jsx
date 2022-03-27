import React from 'react';
import './LandingPage.css'
import AddTaskButton from '../components/AddTaskButton';
import Task from '../components/Task';

/*
* Name: LandingPage
* Author(s): Leeden Raquel
* Inputs:
*   props - standard information passed to all children
* Description: this class represents the landing page for the web application
* Returns:
*   component - the output component form that represents the landing page
*/
export default class LandingPage extends React.Component {
    constructor (props) {
        super(props);
        this.taskList = JSON.parse(localStorage.getItem("taskList")) || []; // find a task list in the storage
        this.tasks = this.taskList.map((task) => { // creates a task for each task in the task list
            return (
            <Task 
                key={task.taskName} 
                name={task.taskName} 
                description={task.description} 
                date={task.date} />);
        });
    }

    render () {
        return <div className="landing">
                <AddTaskButton />
                <br />
                <br />
                <br />
                {this.tasks}
            </div>;
    }
}