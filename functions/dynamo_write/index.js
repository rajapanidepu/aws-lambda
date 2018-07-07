console.log('starting function')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)


  var params = {
    Item: {
      date: Date.now(),
      message: e.message 
    },
    TableName: 'guestbook'
  };


  docClient.put(params, function(error, data) {
    if( error) {
      cb(error, null);
    } else {
      cb(null, data);
    }
  })
}
