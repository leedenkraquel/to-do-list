import * as AWS from 'aws-sdk'

const dynamo = new AWS.DynamoDB({
    region: "us-west-1",
    secretAccessKey: "9v/Ef/WRqoaFaNAg7FxXkVIUQ9ZSEn2ewl/AY1cX",
    accessKeyId: "AKIAUXF3BYXVDNHZH573"
}); // represents the database 

/* 
* Name: fetchAllData
* Author(s): Leeden Raquel
* Inputs:
*  none
* Desciption: pull all the data from a table
* Returns:
*  none
*/
export const fetchAllData = async (tableName) => {    
    return new Promise((resolve, reject) => {    
        var params = {
            TableName: tableName
        }

        dynamo.scan(params, function (err, data) {
            if (!err) {
                console.log("Scanned Data:", data);
                resolve(data); // return the data fetched 
            } else {
                reject(); // error exception
            }
        });
    });
}

/* 
* Name: fetchData
* Author(s): Leeden Raquel
* Inputs:
*  username - the name of the user who needs data
* Desciption: pull an item from a table
* Returns:
*  none
*/
export const fetchData = (username) => {
    var params = {
        TableName: 'users',
        Key: {
            uid: {"S": username}
        }
    }

    return dynamo.getItem(params, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })
}

/*
* Name: putData
* Author(s): Leeden Raquel 
* Inputs:
*  uid - the user who wants to add data to their table
*  email - the email of the user
* Description: put data to the specified table
* Returns:
*  none
*/
export const putData = (uid, data) => {
    var params = {
        TableName: "users",
        Item: {
            uid: {"S": uid},
            username: {"S": uid}
        }
    }

    dynamo.putItem(params, function (err) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Successfully put data to database", data);
        }
    })
}

/*
* Name: putTaskData
* Author(s): Leeden Raquel 
* Inputs:
*  tableName - the user
*  taskName - the name of the task
*  taskDesc - the description of the task
*  taskDate - the date of the task
* Description: put task data into a user specific table
* Returns:
*  none
*/
export const putTaskData = (tableName, taskName, taskDesc, taskDate) => {
    var params = {
        TableName: tableName,
        Item: {
            taskID: {"N": new Date().getTime().toString()},
            task: {"S": taskName},
            description: {"S": taskDesc},
            date: {"S": taskDate}
        }
    }

    dynamo.putItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Successfully put task into database", data);
        }
    })
}

/*
* Name: createTable
* Author(s): Leeden Raquel
* Inputs:
*  name - the name of the table
* Description: create a DynamoDB table
* Returns:
*  none
*/

export const createTable = (name) => {
    var params = {
        TableName: name,
        AttributeDefinitions: [
            {
                AttributeName: "taskID",
                AttributeType: "N"
            }
        ],
        KeySchema: [
            {
                AttributeName: "taskID",
                KeyType: 'HASH'
            }
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1
        },
        StreamSpecification: {
          StreamEnabled: false
        }
    }

    dynamo.createTable(params, function(err, data) {
        if (err) {
        console.log("Error", err);
        } else {
        console.log("Table Created", data);
        }
    });
}

/*
* Name: deleteTask
* Author(s): Leeden Raquel
* Inputs:
* Description: delete a task from the task list
* Returns:
*  none
*/
export const deleteTask = (username, taskID) => {
    var params = {
        TableName: username,
        Key: {
            "taskID": {N: taskID}
        }
    }
    console.log(params);

    dynamo.deleteItem(params, function(err, data) {
        if (err) {
            console.log("Delete task error:", err);
        } else {
            console.log("Task Deleted", data);
        }
    });
}