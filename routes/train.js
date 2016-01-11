/**
 * Created by Juan Gallo (Reicko) on 9/01/16.
 */

module.exports = function(app) {

    var Train = require('../models/train.js'),
        querystring = require('querystring'),
        http = require('http');

    apiTrain = function (req, res) {
        console.log(req.body);
        res.send("Aprendido!" + req.body);


        var train = new Train({
            text: req.body.text,
            feel: req.body.feel,
            value: req.body.value
        });

        train.save(function(err) {
            if(!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(train);

    };

    app.post('/train', apiTrain);

}