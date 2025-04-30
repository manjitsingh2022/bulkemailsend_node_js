const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({

    host: 'smtp.gmail.com',
    port: 465,
    secure: true,

    // service: 'gmail',
    auth: {

        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    //   logger: true,
    //   debug: true,
});

transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Configuration Error:', error);
    } else {
        console.log('SMTP Server is ready to send emails');
    }
});

module.exports = transporter;
