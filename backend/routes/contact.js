const express = require('express');
const router = express.Router();
const service = require('./../models/contact');
const mailer = require('./../utils/mailer');



const createContact = async(req, res, next) => {
    try {

        const { email, subject, message } = req.body;

        const userMessage = { email, subject, message };
        const result = await service.contactCreate(userMessage);

        const messageTemplate = `<html>

        <h2>Recibiste un contacto desde tu webpage</h2>
        <h3> ${userMessage.mail}</h3>
        <h3> ${userMessage.message}</h3>
        
         </html>`;

        const sendMail = await mailer.mailGeneric(process.env.MAIL, subject, messageTemplate);
        res.json({ message: result, idMail: sendMail });
    } catch (error) {
        res.sendStatus(500);
    }
}
router.post('/', createContact);
module.exports = router;