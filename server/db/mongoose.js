var mongoose = require('mongoose');
var NonLexicalWord = require('../models/nonLexicalWord');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", async function () {

    let words = await NonLexicalWord.find();
    if (!words || words.length == 0) {
        const nonLexicalWords = process.env.NONLEXICALWORDS.split(',');
        nonLexicalWords.map(word => {
            var nonLexicalWord = NonLexicalWord({ text: word });
             nonLexicalWord.save()
        })
    }

    console.log("Connection succeeded.");

});



module.exports = { exports };