const Joi = require('joi');


const { complexity, nonLexicalWord} = require('../models/validation')

const validateText = async (req, res, next) => {

    try {
        var response = await Joi.validate(req.body, complexity);
        var sentenceArray = req.body.text.split(/[\\.!\?]/);

        if(sentenceArray.length > 100) {
            return res.status(400).json({
                message: 'word count in text must be lower than 100'
            });
        }

        req.data = response
        next();
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
}

const validateNonLexicalWord = async (req, res, next) => {

    try {
        var response = await Joi.validate(req.body, nonLexicalWord);
        req.data = response
        next();
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
}

module.exports = {
    validateText,
    validateNonLexicalWord
}