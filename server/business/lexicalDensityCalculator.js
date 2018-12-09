var NonLexicalWord = require('../models/nonLexicalWord');


function isEmpty(str) {
    return (!str || 0 === str.length);
}

const calculateLexicalDensity = (sentence, nonlexicalWords) => {
    let words = sentence.trim().split(/\s+/);
    let wordsWhichAreNotOnlySpecialCharacters =  words.filter(word => word.match(/^[^a-zA-Z0-9]+$/) === null)
    var lexicalWords = wordsWhichAreNotOnlySpecialCharacters.filter(word => nonlexicalWords.find(x => x.text === word) === undefined);
    return lexicalWords.length / wordsWhichAreNotOnlySpecialCharacters.length;
}

const calculateSentenceDensity = async (text) => {

    try {
        var nonlexicalWords = await NonLexicalWord.find();
        let density = calculateLexicalDensity(text, nonlexicalWords);

        return {
            status: 'success',
            data: {
                overall_ld: parseFloat(density.toFixed(2))
            }
        };

    }
    catch (e) {
        return {
            status: 'error',
            message: e.message
        };
    }
}



const calculateSentenceArrayDensity = async (text) => {

    try {

        var sentenceArray = text.split(/[\\.!\?]/);
        var nonlexicalWords = await NonLexicalWord.find();
        var densityArray = sentenceArray.map(sentence => {
            if (!isEmpty(sentence)) {
                var density = calculateLexicalDensity(sentence, nonlexicalWords);
                return parseFloat(density.toFixed(2))
            }
        }).filter(e => e != null)

        var densityTotal = calculateLexicalDensity(text, nonlexicalWords)

        return {
            status: 'success',
            data: {
                sentence_ld: densityArray,
                overall_ld: parseFloat(densityTotal.toFixed(2))
            }
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
    calculateSentenceDensity,
    calculateSentenceArrayDensity
}