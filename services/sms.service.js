// var messagebird = require('messagebird')('y0LlG7mFcbpfRYcPlYDl6PRo3');
require('dotenv').config()
const accountSid = process.env.TWILIO_AUTH_SID //SID
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
exports.sendsms = async (req, res) => {
   const data = await client.messages
        .create({
            body: "Hii, this is test sms,",
            from: "+12136932693",    //TWILIO_PHONE_NUMBER,
            to: `+91${req.body.mobile}`
        })
console.log(data);
res.send(data)
}