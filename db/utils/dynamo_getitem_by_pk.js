
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var db = new AWS.DynamoDB({endpoint: 'http://localhost:8000',
    apiVersion: '2012-08-10'});

//
// var params = {
//     ExpressionAttributeValues: {
//         ':s': {N: '2'},
//         ':e' : {N: '09'},
//         ':topic' : {S: 'PHRASE'}
//     },
//     KeyConditionExpression: 'Season = :s and Episode > :e',
//     ProjectionExpression: 'Episode, Title, Subtitle',
//     FilterExpression: 'contains (Subtitle, :topic)',
//     TableName: 'EPISODES_TABLE'
// };

var params = {
    ExpressionAttributeValues: {
        ':s': {S: 'user1@mail.com'}
    },
    KeyConditionExpression: 'email = :s',
    // ProjectionExpression: 'first_name, last_name',
    // FilterExpression: 'contains (Subtitle, :topic)',
    TableName: 'USER'
};

db.query(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(JSON.stringify(data ));           // successful response
});