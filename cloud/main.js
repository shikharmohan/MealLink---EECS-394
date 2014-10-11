
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
  console.log("Cloud call to hello works");
});

Parse.Cloud.define('sendSMS', function(request, response) {
	// Require and initialize the Twilio module with your credentials
	var client = require('twilio')('AC39f8ffaa4ca76ad093dfa14d5fbb4c8e', '8b1dec8cb63a50d19eb5f7758680fdb5');
	 
	// Send an SMS message
	client.sendSms({
	    to: request.params.number, 
	    from: '+19093452668', 
	    body: request.params.smsmessage
	  }, function(err, responseData) { 
	    if (err) {
	      response.error("msg error");
	      console.log(err);
	    } else { 
	      response.success("msg sent");
	      console.log(responseData.from); 
	      console.log(responseData.body);
	    }
	  }
	);
});


