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


const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/", indexRouter);

app.use("/contact", contactRouter);

module.exports = app;
