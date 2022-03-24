const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
first_name:{type: String, required: true},
last_name:{type: String, required: false},
email:{type: String, required:true,unique:true},
pincode:{type: String, required:true}, 
age:{type: Number, required:true}, 
gender: {
      type: String,
      // enum: ["Male", "Female"],
      default: "Male",
    }, 
   
}, 
{
    versionKey: false,
    timestamps: true,
  })

  module.exports = mongoose.model("user",userSchema)