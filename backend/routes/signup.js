const express = require('express');
const router = express.Router();
const service = require('./../models/signup');
const uuid = require('node-uuid');
const mailer = require('./../utils/mailer');
const sha1 = require('sha1');

const userCreator = async(req, res, next) => {
    try {

        const { name, email, password } = req.body;
        let user = { name, email, password: sha1(password) };
        Object.assign(user, { verify_code: uuid() });
        const result = service.createUser(user);

        if (result) {
            let linkActivation = `
            <html>
                <body>
                    <h4>
                        VERIFY CODE : ${user.verify_code}
                    </h4>
                    <h4>
                        link de activacion => <a href="${process.env.URL_SERVER}/verify/${user.verify_code}"> Here </a>
                    </h4>
                </body>
            </html>`;

            const mail = await mailer.sendRegisterInfo(email, linkActivation);
            if (mail) {
                res.json({ message: `Cuenta creada satisfactoriamente`, id: mail });
            }
        }
    } catch (error) {
        console.log(error);

    }
}

router.post('/', userCreator);
module.exports = router;