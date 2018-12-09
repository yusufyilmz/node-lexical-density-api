const express = require('express');
const router = express.Router();
const lexicalController  = require('../controllers/lexicalController');
const {validateText, validateNonLexicalWord}  = require('../middlewares/validate');

router.post('/complexity', validateText, lexicalController.getLexicalDensity);

router.post('/nonlexical', validateNonLexicalWord, lexicalController.addNonLexicalWord);

module.exports = router;