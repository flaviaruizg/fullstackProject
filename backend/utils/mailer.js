const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

mailGeneric = async(email, subject, template) => {
    try {
        const body = { to: email, subject: subject, html: template };
        const info = await transporter.sendMail(body);
        return info;

    } catch (error) {
        throw error;
    }
}

sendRegisterInfo = async(email, html) => {
    try {
        const subject = 'Gracias por registrarte.'
        const msgId = await mailGeneric(email, subject, html);
        return msgId;

    } catch (error) {
        throw error;

    }
}

module.exports = {
    mailGeneric,
    sendRegisterInfo
}