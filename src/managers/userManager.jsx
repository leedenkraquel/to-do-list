import * as AWS from 'aws-sdk'
import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js';

const dynamo = new AWS.DynamoDB(); // represents the database 
const docClient = new AWS.DynamoDB.DocumentClient(); // represents the database manager
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
            console.log("Error:", err.message);
        } else {
            console.log("Success:", data);
        }
    })
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

    user.authenticateUser(authDetails, {
        onSuccess: data => {
            console.log("Success:", data);
        },
        onFailure: err => {
            console.log("Error:", err);
        },
        newPasswordRequired: data => {
            console.log("New Password Required:", data);
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
        if (user) {
            user.getSession((err, session) => {
                if (err) {
                    reject();
                } else {
                    resolve(session);
                }
            });
        } else {
            reject();
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

/* 
* Name: fetchData
* Author(s): Leeden Raquel
* Inputs:
*  tableName - the name of the table you wanna pull data from
* Desciption: pull all the data from a table
* Returns:
*  none
*/
export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data);
        }
    })
}

/*
* Name: putData
* Author(s): Leeden Raquel 
* Inputs:
*  tableName - the name of the table to push data to
*  data - the data you wish to push on to the table
* Description: put data to the specified table
* Returns:
*  none
*/
export const putData = (tableName, data) => {
    var params = {
        TableName: tableName,
        Item: data
    }

    docClient.put(params, function (err) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Successfully put data to database", data);
        }
    })
}

