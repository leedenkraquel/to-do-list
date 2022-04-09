import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./CreateAccountPage.css";

/*
* Name: CreateAccountPage
* Author(s): Leeden Raquel
* Inputs:
*   props - standard information passed to all children
* Description: this is the page where a user creates an account
* Returns:
*   Component - the output component for the create account page
*/
export default function CreateAccountPage (props) {
    const [username, setUsername] = useState(""); // represents the name of the user
    const [email, setEmail] = useState(""); // represents the users email address
    const [password, setPassword] = useState(""); // represents the users password
    const [passwordConfirm, setPasswordConfirm] = useState(""); // represents the confirmation for the password
    const navigate = useNavigate(); // hook used to change the route of the web app
    const encodePassword = (dirtyPassword) => {
        return dirtyPassword; // return the encoded password
    }

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
            const newUser = { // create a new user object
                "username": username,
                "email": email,
                "password": encodePassword(password)
            }
            let userList = localStorage.getItem("userList") || []; // get the list of users if one exists
            userList.push(newUser); // add the new user to the list of users
            localStorage.setItem("userList", JSON.stringify(userList)); // update the list of users
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

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Username
                    <br />
                <input 
                    type="text" 
                    value={username.value} 
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                </label>
                <br />
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
                <input type="button" className="button" value="Cancel" onClick={handleCancel}/>
                <input type="submit" className="button" value="Create Account"/>
            </form>
        </div>
    );
}