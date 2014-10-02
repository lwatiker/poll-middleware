var express = require('express'),
bodyParser = require('body-parser'),
poll = require('./poll'); 
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
    app.use(allowCrossDomain);
});
 
app.post('/poll/:pollName', poll.addVote);

app.get('/poll/:pollName', poll.findAll);


app.listen(3000);
console.log('Listening on port 3000...');
