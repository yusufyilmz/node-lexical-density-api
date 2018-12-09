
const { calculateSentenceDensity, calculateSentenceArrayDensity } = require('../business/lexicalDensityCalculator');
const { addNonLexicalWordToDb } = require('../business/lexicalWordManager');
const _ = require('lodash');


const getLexicalDensity = async (req, res) => {

    const queryParams = req.query;
    const bodyParams = _.pick(req.body, ['text']);

    const response = (queryParams && queryParams.mode === 'verbose') ? 
         await calculateSentenceArrayDensity(bodyParams.text) :
         await calculateSentenceDensity(bodyParams.text)

    if (response.status !== 'success') {
        return res.status(500).send({ message: response.message });
    }

    res.status(200).send({ data: response.data });

};


const addNonLexicalWord = async (req, res) => {

    const body = _.pick(req.body, ['text']);
    const response = await addNonLexicalWordToDb(body)

    if (response.status !== 'success') {
        return res.status(500).send({ message: response.message });
    }

    res.status(200).send({ data: response.data });

};


const getNonLexicalWord = async (req, res) => {

    res.status(200).send({ data: 1});

};




module.exports = {
    getLexicalDensity,
    addNonLexicalWord,
    getNonLexicalWord
};
