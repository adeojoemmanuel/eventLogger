'use strict'
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  // endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "event_t",
    KeySchema: [
        { AttributeName: "event_id", KeyType: "HASH"}  //Partition key
       
    ],
    AttributeDefinitions: [
        { AttributeName: "event_id", AttributeType: "N" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
