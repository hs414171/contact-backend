require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const contact_route = require('./routes/contact')
const option = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
app.use(cors(option))
mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error)=>{console.log(error)});
db.once('open', ()=>{console.log('Connected to Database')});

app.get('/',(req,res)=>{
    res.send("HELLO WORLD")
})
app.use(express.json())
app.use('/api/contact',contact_route)
app.listen(port,()=>{
    console.log("Server Start")
})
