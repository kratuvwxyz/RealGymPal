var palArray = require("../data/pal.js");

module.exports = function(app) {
    app.get('/api/info', function(req, res) {
        res.json(palArray);
    });

    app.post('/api/info', function(req, res) {

        var bestMatch = {
            name: "",
            facebook: "",
            contact: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userScores = userData.scores;

        // console.log(userScores);

        var totalDifference = 0;

        for (var i = 0; i < palArray.length; i++) {
            // console.log(palArray[i]);

            totalDifference = 0;

            for (var j = 0; j < palArray[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(palArray[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = palArray[i].name;
                    bestMatch.facebook = palArray[i].facebook;
                    bestMatch.contact = palArray[i].contact;
                    bestMatch.friendDifference = totalDifference;
                }

            }

        }
        res.json(bestMatch);

        console.log(bestMatch);

        palArray.push(req.body);

        console.log(req.body);
    });

}