import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js';

const poolData = { // represents the AWS user pool settings
    UserPoolId: 'us-west-1_DuGrZKS7O',
    ClientId: 'ma39asv6rrjtmt8avt6ea3niq'
}
const userPool = new CognitoUserPool(poolData); // represents the user pool from cognito

/*
* Name: createUser
* Author(s): Leeden Raquel
* Inputs:
*  email - the users email
*  password - the password to their account
* Description: take in the user information and create an account for them
* Returns:
*  err - if the api returns an error code return the error code
*/
export function createUser(email, password) {
    userPool.signUp(email, password, [], null, (err, data) => { // create a new user account
        if (err) {
            console.log("Error:", err.message); // error exception
        } else {
            console.log("Success:", data); // the account is created
        }
    });
}

/*
* Name: signIn
* Auhtor(s): Leeden Raquel
* Inputs:
*  email - the email of the account
*  password - the password of the account
* Description: sign the user into their account
* Returns:
*  none
*/
export function signIn(email, password) {
    const user = new CognitoUser({ // represents the user
        Username: email,
        Pool: userPool
    });
    const authDetails = new AuthenticationDetails({ // represents the account credentials
        Username: email,
        Password: password
    });

    user.authenticateUser(authDetails, { // attempt to authenticate the user account
        onSuccess: data => {
            console.log("Success:", data); // the user was logged in
        },
        onFailure: err => {
            console.log("Error:", err); // error exception
        },
        newPasswordRequired: data => {
            console.log("New Password Required:", data); // the user was compromised or otherwise needs to reset password
        }
    });
}

/*
* Name: getSession
* Author(s): Leeden Raquel
* Inputs:
*   none
* Description: defines if a user is currently logged in
* Returns:
*  none
*/
export async function getSession() {
    return new Promise((resolve, reject) => {
        const user = userPool.getCurrentUser(); // get the current user account
        if (user) { // if the user account exists
            user.getSession((err, session) => {
                if (err) {
                    reject(); // error exception
                } else {
                    resolve(session); // return the session of the user
                }
            });
        } else {
            reject(); // user did not exist
        }
    });
}

/*
* Name: signOut
* Author(s): Leeden Raquel
* Inputs:
*  none
* Description: signs the user out if theyre currently logged in
* Returns:
*  none
*/
export function signOut() {
    const user = userPool.getCurrentUser(); // check if the user is logged in
    if (user) {
        user.signOut(); // sign out
    }
}

