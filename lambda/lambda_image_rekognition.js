var aws = require('aws-sdk');
module.exports.handler = function(event, context,callback) {
    // TODO implement

    var rekognition = new aws.Rekognition({apiVersion: '2016-06-27'});

     if (event.label==="getLabels"){
        var params = {
            Image: {
                S3Object: {
                    Bucket: event.Bucket, 
                    Name: event.file
                }
            }, 
            MaxLabels: 123, 
            MinConfidence: 70
        };
        rekognition.detectLabels(params, function (err, data) {
          if (err) console.log(err, err.stack); // an error occurred
              const response = {
                statusCode: 200,
                body: JSON.stringify(data),
              };
              callback(null, response);
        });
    }else if(event.label==="getText"){
     var params = {
          Image: {
               S3Object: {
                Bucket: event.Bucket, 
                Name: event.file
               }
          }
     };        
        rekognition.detectText(params, function (err, data) {
          if (err) console.log(err, err.stack); // an error occurred
              const response = {
                statusCode: 200,
                body: JSON.stringify(data),
              };
              callback(null, response);
        });        
    }else if(event.label==="recognizeCelebrities"){
     var params = {
          Image: {
               S3Object: {
                Bucket: event.Bucket, 
                Name: event.file
               }
          }
     };        
        rekognition.recognizeCelebrities(params, function (err, data) {
          if (err) console.log(err, err.stack); // an error occurred
              const response = {
                statusCode: 200,
                body: JSON.stringify(data),
              };
              callback(null, response);
        });        
    }
    
}