var SendEmail = require('../controllers/SendEmail.jsx');
const express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) =>
{
  res.send("This is the contact route ");
});

router.post("/", async (req, res, next) =>
{
  try {
    const { name, email, message } = req.body;
    console.log(req.body);
    console.log(name, email, message);

    const mailData = {
      from: process.env.MY_EMAIL,
      to: "jaynielsingh@yahoo.com",
      subject: name,
      text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
    };

    await SendEmail(mailData);
    res.send('Email send successfully');
  } catch (error) {
    console.error('Error sending mail', error);
    res.status(500).send("Failed to send email");
  }

});

module.exports = router;
