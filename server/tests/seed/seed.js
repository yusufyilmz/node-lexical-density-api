

const lexicalDensityTestData = {
     sentence : "kim loves going to the cinema",
     multipleSentence : "kim loves going to the cinema. kim loves going to the cinema",
     integerText : 1,
     muchCharacter : "k".repeat(1001),
     muchWord : "kim. ".repeat(101),
     density : {
        overall_ld : 0.67
     },
     verboseDensity : {
        sentence_ld: [
            0.67,
            0.67
        ],
        overall_ld : 0.67,
     },
     verboseDensityForOneSentence : {
        sentence_ld: [
            0.67,
        ],
        overall_ld : 0.67,
     },
     muchWordError:  'word count in text must be lower than 100',
     muchCharacterError: 'child "text" fails because ["text" length must be less than or equal to 1000 characters long]',
     stringError: 'child "text" fails because ["text" must be a string]',
}


const nonLexicalWordTestData = {
    nonLexicalWord: Math.random().toString(36).substring(5),
    nonLexicalDuplicateWord: 'to',
    nonLexicalWordDuplicateError : 'E11000 duplicate key error collection: LexicalDensityApp.nonlexicalwords',
    integerNonLexicalWord: 1,
    nonLexicalWordIntegerError: 'child \"text\" fails because [\"text\" must be a string]'
}




module.exports = {
    lexicalDensityTestData,
    nonLexicalWordTestData
}