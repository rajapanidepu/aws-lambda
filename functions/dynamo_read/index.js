console.log('starting function')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)

  var params = {
    TableName: 'guestbook',
    Limit: 100
  };


  docClient.scan(params, function(error, data) {
    if( error) {
      cb(error, null);
    } else {
      cb(null, data);
    }
  })

  // GET
  // var params = {
  //   TableName: 'guestbook',
  //   Key: {
  //     "date": 1530996737453
  //   }
  // };


  // docClient.get(params, function(error, data) {
  //   if( error) {
  //     cb(error, null);
  //   } else {
  //     cb(null, data);
  //   }
  // })
}
