import React from "react";
import { useNavigate } from 'react-router-dom';

/*
* Name: LoginButton
* Author(s): Leeden Raquel
* Inputs:
*   none
* Description: represents a button that navigates the user to the log in page
* Returns:
*   component - the output component that represents the login button
*/
export default function LoginButton () {
    const navigate = useNavigate(); // hook used to change the route of the app    
    /*
    * Name: handleOnClick
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: when the login button is clicked the route should be changed to the
    *   log in page
    * Returns:
    *   none
    * */
    const handleOnClick = () => {
        navigate("/SignIn"); // route to the log in page
    };
    
    return (
        <div className="center">
            <button className="button" onClick={handleOnClick}>Sign In</button>
        </div>
    );
}