import React from 'react';
import './LandingPage.css'
import AddTaskButton from '../components/AddTaskButton';
import Task from '../components/Task';
import LoginButton from '../components/LoginButton';
import { fetchAllData } from '../managers/taskManager';
import { getSession } from '../managers/userManager';

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
    constructor(props) {
        super(props);
        let tasks = [];
        getSession().then((session) => {
            let username = session.idToken.payload.sub; // get the username of the user
            fetchAllData(username).then((data) => {
                let taskList = data.Items; // get the data from the database
                this.updateTasks(taskList); // update the list of tasks 
            }); // get the task list of the user
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
    updateTasks(taskList) {
        let tasks = taskList.map((task, index) => { // creates a task for each task in the task list
            return (
                <Task
                    key={task.taskID.N}
                    id = {task.taskID.N}
                    index={index}
                    name={task.task.S}
                    description={task.description.S}
                    date={task.date.S}
                    handler={this.updateTasks.bind(this)} />);
        });
        this.setState({ tasks: tasks });
    }

    render() {
        return <div className="landing">
            {this.state.tasks}
            <AddTaskButton />
            <br />
            <LoginButton />
        </div>;
    }
}