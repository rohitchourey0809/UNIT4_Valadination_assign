const express = require('express');

const  userscontroller = require('./controllers/user.controller');

const app = express();
app.use(express.json());


app.use("/userlink",userscontroller)
// http://localhost:5111/users will go to usersController



module.exports = app;