import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AddTaskPage from './pages/AddTaskPage';

function Views () {
    return <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <LandingPage /> } />
          <Route path="/AddTask" element={ <AddTaskPage /> } />
          <Route path="*" element={ <LandingPage /> } />
        </Routes>
    </BrowserRouter>;
}

export default Views;