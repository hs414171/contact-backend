const Joi = require('@hapi/joi')
const contactValidation = data => {
    const schema = Joi.object({
    name:Joi.string().min(6).required(),
    phone:Joi.number().required(),
    email:Joi.string().min(7).email().required(),
    message:Joi.string().min(10).required(),
    subject:Joi.string().min(10).required()
    
}
    )
return schema.validate(data)
}
module.exports.contactValidation = contactValidation