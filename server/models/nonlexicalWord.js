var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NonLexicalWordSchema = new Schema({
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true
    }
});

module.exports = mongoose.model('NonLexicalWord', NonLexicalWordSchema);          