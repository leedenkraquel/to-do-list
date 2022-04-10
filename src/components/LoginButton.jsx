import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getSession, signOut } from "../managers/userManager";

/*
* Name: LoginButton
* Author(s): Leeden Raquel
* Inputs:
*   none
* Description: represents a button that navigates the user to the log in page if they
   are not logged in or logs the out if they are logged in
* Returns:
*   component - the output component that represents the login button
*/
export default function LoginButton () {
    const navigate = useNavigate(); // hook used to change the route of the app    
    const [loggedIn, setLoggedIn] = useState(false); // represents if the user is logged in
    useEffect(() => { // check the login status of the user
        getSession().then(() => {
            setLoggedIn(true);
        }).catch(() => {
            setLoggedIn(false);
        })
    });

    /*
    * Name: handleOnClick
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: when the login button is clicked the route should be changed to the
    *   log in page or if the user is logged in it just logs them out
    * Returns:
    *   none
    * */
    const handleOnClick = () => {
        if (loggedIn) {
            signOut(); // sign out the user
            setLoggedIn(false); // update the state of the component
        } else {
            setLoggedIn(true); // update teh state of the component
            navigate("/SignIn"); // route to the log in page
        }
    };

    return (
        <div className="center">
            <button className="button" onClick={handleOnClick}>{loggedIn ? "Sign Out" : "Sign In"}</button>
        </div>
    );
}