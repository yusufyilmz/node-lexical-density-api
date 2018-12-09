var NonLexicalWord= require('../models/nonLexicalWord');
const _ = require('lodash');


const addNonLexicalWordToDb = async (word) => {

    try {
        const nonLexicalWord = new NonLexicalWord(word);
        const response = await nonLexicalWord.save();
        return {
            status: 'success',
            data: _.pick(response, ['text', '_id'])
        };
    }
    catch (e) {
        return {
            status: 'error',
            message: e.message
        };
    }
}

module.exports = {
    addNonLexicalWordToDb
}

