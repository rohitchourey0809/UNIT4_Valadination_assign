const express = require('express');
const {body,validationResult} = require('express-validator')
const User = require('../models/user.models')


const router = express.Router();

router.post("/",
body("first_name")
.trim()
.not()
.isEmpty()
.withMessage("First Name cannot be Empty"),

body("last_name")
.trim()
.not()
.isEmpty()
.withMessage("First Name cannot be Empty"),

body("pincode")
.trim()
.not()
.isEmpty()
.bail()
.withMessage("NotEmpty")
.isLength({ min: 4 }),

body("age")
.not()
.isEmpty()
.withMessage("Age cannot be empty")
.isNumeric()
.withMessage("Age must be a number between 1 and 120")
.custom((val) => {
  if (val < 1 || val > 100) {
    throw new Error("Incorrect age provided");
  }
  return true;
}),
)

