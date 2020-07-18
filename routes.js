const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_KEY);


router.post('/', function (req, res, next) {
    try {
        const { email, name, obs, area } = req.body;
        const subject = 'especialização - ' + area;
        const html = `
            <p>
            nome: ${name},
            email: ${email},
            observaçõe: ${obs},
            area: ${area}
            </p>
        `;

        const text = `
            nome: ${name},
            email: ${email},
            observaçõe: ${obs},
            area: ${area}
        `;

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