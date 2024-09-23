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


router.post('/send',(req) => {
    let {from, email, question} = req.body;
    console.log(from, email, question);
})