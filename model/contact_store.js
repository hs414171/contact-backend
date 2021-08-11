const { string, boolean } = require('@hapi/joi')
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
    },
    code:{
        type:String,
        required: true
    },
    status:{
        type: Boolean,
        default:false
    }
    
})
User.pre('save',async function(next){
    try{
        const key_ran = require('crypto').randomBytes(3).toString('hex')
        this.code = key_ran
        next()

    }
    catch(error){
        next(error)
    }
})
module.exports = mongoose.model('user',User)