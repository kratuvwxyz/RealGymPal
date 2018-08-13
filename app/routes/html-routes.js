var path = require('path');

module.exports = function(app) {
    app.get('/info', function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/infoMatch.html"));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}