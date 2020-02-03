require("dotenv").config();
const express = require('express');

const init = require('./routes/authentication');
const app = express();

// Middleware
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* includes routes for authentication:
    /signup
    /login
    /resetPassword
*/
app.use("/auth", require("./routes/authentication.js"));


app.listen(process.env.PORT, () =>
    console.log(`Started Express server on port ${process.env.PORT}.`)
);

