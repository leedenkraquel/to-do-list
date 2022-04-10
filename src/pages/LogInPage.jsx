import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signIn } from "../managers/userManager";
import "./LogInPage.css";

/*
* Name: LogInPage
* Author(s): Leeden Raquel
* Inputs:
*   props - standard information passed to all children
* Description: this is the page where a user logs into an account
* Returns:
*   Component - the output component for the create account page
*/
export default function LogInPage(props) {
    const [email, setEmail] = useState(""); // represents the users email address
    const [password, setPassword] = useState(""); // represents the users password
    const navigate = useNavigate(); // hook used to change the route of the web app

    /*
    * Name: handleSubmit
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: run this function when the log in form is submitted
    * Returns:
    *   none
    */
    const handleSubmit = (event) => {
        event.preventDefault(); // supress the default behavior of the submit button
        signIn(email, password); // sign in to the account
        navigate("/"); // route to the landing page
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
    * Name: handleSignUp
    * Author(s): Leeden Raquel
    * Inputs:
    *   none
    * Description: if the user clicks the sign in button navigate to the sign in page
    * Returns:
    *   none
    */
    const handleSignUp = () => {
        navigate("/CreateAccount"); // route to the sign in page
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <button className="button" id="signUp" onClick={handleSignUp}>Sign Up</button>
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
                    <br />
                    <input type="button" className="button" value="Cancel" onClick={handleCancel} />
                    <input type="submit" className="button" value="Sign In" />
                </div>
            </form>
        </div>
    );
}