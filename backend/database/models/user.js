const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    username :{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    }
}) 

const User = mongoose.model('user',userSchema);

module.exports = User;