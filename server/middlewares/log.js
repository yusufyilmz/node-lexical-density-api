const fs = require('fs');

module.exports.logMiddleware = (req, res, next) => {
    var dateTime = new Date().toString();
    var log = `Lexical Density Server: ${dateTime}: ${req.method} ${req.url} `;

    fs.writeFile('lexicalDensity.log', log,  function (err, result) {
        if (err) console.log('error', err);
        console.log("success")
        next();
    });
};
