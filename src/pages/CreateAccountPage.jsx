import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createUser } from "../managers/userManager";
import "./CreateAccountPage.css";

/*
* Name: CreateAccountPage
* Author(s): Leeden Raquel
* Inputs:
*  none
* Description: this is the page where a user creates an account
* Returns:
*  Component - the output component for the create account page
*/
export default function CreateAccountPage() {
    const [email, setEmail] = useState(""); // represents the users email address
    const [password, setPassword] = useState(""); // represents the users password
    const [passwordConfirm, setPasswordConfirm] = useState(""); // represents the confirmation for the password
    const navigate = useNavigate(); // hook used to change the route of the web app

    /*
    * Name: handleSubmit
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: run this function when the create account form is submitted
    * Returns:
    *   none
    */
    const handleSubmit = (event) => {
        event.preventDefault(); // supress the default behavior of the submit button
        if (password === passwordConfirm) { // if the two passwords match
            createUser(email, password); // creates a new user
            navigate("/"); // route to the landing page
        } else {
            var popup = document.getElementById("myPopup"); // get the popup element
            popup.classList.toggle("show"); // show the popup
        }
    }

    /*
    * Name: handleCancel
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: if the user cancels the task navigate back to the landing page
    * Returns:
    *   none
    */
    const handleCancel = () => {
        navigate("/"); // route to the landing page
    }

    /*
    * Name: handleSignIn
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: if the user clicks the sign in button navigate to the sign in page
    * Returns:
    *   none
    */
    const handleSignIn = () => {
        navigate("/SignIn"); // route to the sign in page
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <button type="button" className="button" id="signIn" onClick={handleSignIn}>Sign In</button>
                <br />
                <div className="bordered">
                    <label>
                        Email
                        <br />
                        <input
                            type="text"
                            value={email.value}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </label>
                    <br />
                    <label>
                        Password
                        <br />
                        <input
                            type="password"
                            value={password.value}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </label>
                    <br />
                    <label>
                        <div className="popup">
                            Confirm Password
                            <span className="popupText" id="myPopup">Your passwords do not match</span>
                        </div>
                        <br />
                        <input
                            type="password"
                            value={passwordConfirm.value}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required />
                    </label>
                    <br />
                    <br />
                    <input type="button" className="button" value="Cancel" onClick={handleCancel} />
                    <input type="submit" className="button" value="Create Account" />
                </div>
            </form>
        </div>
    );
}