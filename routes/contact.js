const router = require('express').Router()
const User = require("../model/contact_store")
const { valid } = require('@hapi/joi')
const { contactValidation } = require('../validation')
const transportIt = require('../nodmailer')

router.post('/getDetails', async (req, res) => {
    const {error} = contactValidation(req.body)
    
    if (error) return res.status(400).send(error.details[0].message)
    const user = new User({
        phone: req.body.phone,
        message: req.body.message,
        name: req.body.name,
        email: req.body.email
    })
    try {
        const newUser = await user.save()
        res.status(201).json({ message: 'new user created', user: newUser })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router