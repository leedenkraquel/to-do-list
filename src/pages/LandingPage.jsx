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
        let taskList = JSON.parse(localStorage.getItem("taskList")) || []; // find a task list in the storage
        let updateTasks = this.updateTasks;
        let tasks = taskList.map((task, index) => { // creates a task for each task in the task list
            return (
            <Task 
                key={task.taskName}
                index={index}
                name={task.taskName} 
                description={task.description} 
                date={task.date}
                handler={updateTasks.bind(this)} />);
        });
        this.state = { tasks: tasks };
    }

    /*
    * Name: updateTasks
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: updates the state to reflect the task list correctly
    * Returns:
    *   none
    */ 
    updateTasks (taskList) {
        let tasks = taskList.map((task, index) => { // creates a task for each task in the task list
            return (
            <Task 
                key={task.taskName}
                index={index}
                name={task.taskName} 
                description={task.description} 
                date={task.date}
                handler={this.updateTasks.bind(this)} />);
        });
        this.setState({ tasks: tasks });
    }

    render () {
        return <div className="landing">
                <AddTaskButton />
                <h3>To Do</h3>
                {this.state.tasks}
            </div>;
    }
}