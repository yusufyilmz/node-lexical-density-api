
const Joi = require('joi');

module.exports =  {
    complexity: Joi.object().keys({
        text: Joi.string().min(1).max(1000).required()
    }),
    nonLexicalWord: Joi.object().keys({
        text: Joi.string().min(1).max(50).required()
    })
} 