const nodemailer = require("nodemailer");
require("dotenv").config();

const SendEmail = async (mailData) =>
{
  
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,

    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  await transporter.sendMail(mailData);

};
module.exports = SendEmail;