const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.Schema({
    email:{
        type : String,
        required : true
    },
    phone:{
        type: Number,
        required : true
    },
    name:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true

    },
    subject:{
        type: String,
        required: true
    }
    
})
module.exports = mongoose.model('user',User)