module.exports = require('./lib');
var twilio = require('twilio');

var accountSid = 'AC114130e22d3f4ce7525ccbdf68c4271f'; // Your Account SID from www.twilio.com/console
var authToken = 'b3b235f645a11041a110df812a590c38';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({
    body: 'hi tyler',
    to: '+16102564321',  // Text this number
    from: '+14846794948' // From a valid Twilio number
}, function(err, message) {
    console.log(message.sid);
});