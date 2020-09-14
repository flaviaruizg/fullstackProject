const express = require('express');
const router = express.Router();
const service = require('./../models/auth');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const mailer = require('./../utils/mailer');
const sha1 = require('sha1');

const recoveryOldPass = async(req, res, next) => {

    try {
        const { mail } = req.params;
        const user = await service.resiveMailId(mail);

        if (user) {
            const privateKey = fs.readFileSync('./utils/keys/private.pem');

            const payload = { user };
            const signOptions = { expiresIn: '2h', algorithm: 'RS256' };
            const token = jwt.sign(payload, privateKey, signOptions);
            const templateRecovery = `
            <html>

            <h2>Recuperacion de contraseña</h2>
            <a href="${process.env.URL_FRONT}/change/${token}">Link de recuperacion</a>
            </html>`;

            const email = await mailer.sendRegisterInfo(mail, templateRecovery);

            res.json({ id: email });


        } else {
            res.json({ message: 'el email no esta registrado' });
        }

    } catch (error) {
        console.log(error);


        res.sendStatus(500);
    }

}


router.get('/:mail', recoveryOldPass);
module.exports = router;