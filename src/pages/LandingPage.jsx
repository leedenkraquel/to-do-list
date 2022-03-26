import React from 'react';
import './LandingPage.css'
import AddTaskButton from '../components/AddTaskButton';

/*
* Name: LandingPage
* Author(s): Leeden Raquel
* Inputs:
*   None
* Description: this class represents the landing page for the web application
*/
export default function LandingPage () {
    return <div className="landing">
            <AddTaskButton />
        </div>;
}