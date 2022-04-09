import * as AWS from 'aws-sdk'

const dynamo = new AWS.DynamoDB(); // represents the database 
const docClient = new AWS.DynamoDB.DocumentClient(); // represents the database manager

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

