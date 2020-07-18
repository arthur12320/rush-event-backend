const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_KEY);


router.post('/', function (req, res, next) {
    try {
        const { email, subject, text, html } = req.body;
        sgMail.send({
            to: email,
            from: 'arthurraragao@hotmail.com',
            subject: subject,
            text: text,
            html: html
        });
        res.send(200);
    } catch (err) {
        res.send(500);
    }   
});

module.exports = router;