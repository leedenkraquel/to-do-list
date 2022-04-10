import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AddTaskPage from './pages/AddTaskPage';
import CreateAccountPage from './pages/CreateAccountPage';
import LogInPage from './pages/LogInPage';

/*
* Name: Views
* Author(s): Leeden Raquel
* Inputs:
*   None
* Description: holds the views that the body of the application goes through demending on route
* Returns:
*   router - the router that is used in the app to navigate through pages
*/
function Views () {
    return <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <LandingPage /> } />
          <Route path="/AddTask" element={ <AddTaskPage /> } />
          <Route path="/CreateAccount" element={ <CreateAccountPage /> } />
          <Route path="/SignIn" element={ <LogInPage /> } />
          <Route path="*" element={ <LandingPage /> } />
        </Routes>
    </BrowserRouter>;
}

export default Views;