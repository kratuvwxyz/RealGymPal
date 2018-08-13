var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extened: true }))
app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'text/html' }))

require('./app/routes/api-routes.js')(app);
require('./app/routes/html-routes.js')(app);

app.listen(PORT, function() {
    console.log('App listening on port ' + PORT);
});