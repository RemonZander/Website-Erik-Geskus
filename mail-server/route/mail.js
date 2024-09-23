const express = require('express');
const mailer = require("nodemailer");
const router = express.Router();

//setup mailer
const transporter = mailer.createTransport({
    service: 'gmail', //use gmail?
    auth: {
        // user: 'erikgeskus@gmail.com',
        // pass: 'erikgeskus'
    },
    tls: {
        rejectUnauthorized: false
    },
    subject: 'Contact formulier erikgeskus.nl',
    to: "erikgeskus@gmail.com",
});

transporter.verify((error) => {
    if (error) {
        throw error;
    }
});


router.post('/send',(req, res) => {
    let {from, email, question} = req.body;

    if (!from || !email || !question) {
        res.status(400).json({
            message: 'One or more required fields are missing'
        })
        return;
    }

    const mailOptions = {
        from: from,
        text: question,
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