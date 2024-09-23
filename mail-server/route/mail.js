const express = require('express');
const mailer = require("nodemailer");
const router = express.Router();

//setup mailer
const transporter = mailer.createTransport({
    service: 'gmail', //use gmail?
    auth: {
        // user: 'erikgeskus@gmail.com',
        // pass: 'erikgeskus'
    }
});

transporter.verify((error) => {
    if (error) {
        console.log(error);
        return;
    }
});


router.post('/send',(req, res) => {
    let {from, email, question} = req.body;

    const mailOptions = {
        from: from,
        to: email,
        subject: 'Contact formulier erikgeskus.nl',
        text: question
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('Message sent: %s', info.messageId);
    });

   res.status(200).json({
       message: 'Message sent'
   })
})