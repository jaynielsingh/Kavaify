const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const testRouter = require("./routes/testAPI");
const contactRouter = require("./routes/contact");
const bodyParser = require("body-parser");


require("dotenv").config();

const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build")));


console.log(__dirname);


// app.get('/', (req,res) => {
//   res.sendFile(path.resolve(__dirname, "build/index.html"))
// })



// app.get("/contact", async (req, res, next) =>
// {
//   res.send("This is the contact route ");
// });

// app.post("/contact", async (req, res, next) =>
// {
//   try {
//     const { name, email, message } = req.body;
//     console.log(req.body);
//     console.log(name, email, message);
//     // console.log(
//     //   `the name is ${name} and email is ${email} and message is ${message}`
//     // );
//     const testAccount = await nodemailer.createTestAccount();
//     const transporter = nodemailer.createTransport({
//       host: "smtp-mail.outlook.com", // hostname
//       secureConnection: false, // TLS requires secureConnection to be false
//       port: 587, // port for secure SMTP
//       auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.MY_PASSWORD,

//       },
//       tls: {
//         ciphers: "SSLv3",
//       },
//     });


//     const info = await transporter.sendMail({
//       from: process.env.MY_EMAIL,
//       to: "jaynielsingh@yahoo.com",
//       subject: name,
//       text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
//     });
//     console.log("Message Sent: %s", info.messageId);


//     // res.json(message);
//   } catch (error) {
//     console.log(error);
//   }

// });

app.listen(PORT, () => { console.log(`Server has started on port ${PORT}`); });

// app.use("/", indexRouter);
// app.use('/users', usersRouter);
app.use("/contact", contactRouter);
// app.use("/test", testRouter)

module.exports = app;
