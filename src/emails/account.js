const sgMail = require('@sendgrid/mail')

// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://api.sendgrid.com/v3/mail/send',
//   headers: 
//    { 'content-type': 'application/json',
//      authorization: 'Bearer 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' },
//   body: 
//    { personalizations: 
//       [ { to: [ { email: 'promessed97@gmail.com', name: 'John Doe' } ],
//         //   dynamic_template_data: { verb: '', adjective: '', noun: '', currentDayofWeek: '' },
//           subject: 'Hello, World!' } ],
//      from: { email: 'promessed97@gmail.com', name: 'John Doe' },
//     //  reply_to: { email: 'noreply@johndoe.com', name: 'John Doe' },
//      template_id: 'd51480ba-ca3f-465c-bc3e-ceb71d73c38d' },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
const sendGridAPIKey = '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'
sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeEmail = (email, name)=>{
  sgMail.send({
      to: email,
      from: 'promessed97@gmail.com',
      subject: 'Thanks for joining in!',
      text: `Welcome to the app ${name}. Let me know how you get along with the app!`
  })
}

const sendCancellationEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'promessed97@gmail.com',
        subject: 'Sorry to see you go!',
        text:`Good Bye ${name}, we hope to see you sometime soon!`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}