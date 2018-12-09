const config =  require('./config/config');
const mongoose = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { logMiddleware } = require('./middlewares/log');

var app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(logMiddleware);
app.use(routes);

app.listen(port, () => {
    console.log('Started on port', port);
});

module.exports = {
    app
};
