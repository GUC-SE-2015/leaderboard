var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var winston = require('winston');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/skorr');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// logging
var logger = new (winston.Logger)({
    transports: [
    new (winston.transports.File)({
        name: 'info-file',
        filename: 'log/infolog',
        level: 'info',
        timestamp: true
    }), 
    new (winston.transports.File)({
        name: 'error-file',
        filename: 'log/errorlog',
        level: 'error',
        timestamp: true
    }),
    new(winston.transports.Console)()
    ]

});


var port = process.env.PORT || 8080;

var apiRouter = express.Router();


require('./api.js')(apiRouter);


// use router
app.use('/api', apiRouter);
//start server
app.listen(port);
logger.info('Application listening on port ' + port);