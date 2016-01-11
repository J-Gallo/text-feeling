/**
 * Created by Juan Gallo (Reicko) on 9/01/16.
 */

module.exports = function(app) {

    var Text = require('../models/text.js'),
        _ = require('lodash'),
        querystring = require('querystring'),
        http = require('http'),
        feeling = {
            good: ['lindo', 'hermoso', 'bueno', 'gusta', 'copado'],
            bad: ['feo', 'horrible', 'malo']
        },
        keyword = [];

    getText = function (req, res) {
        var split = req.body.text.split(" ");
        _.forEach(split, function (n) {
            _.forEach(feeling.good, function(good) {
                if (n == good) {
                    if (keyword.indexOf(n) == -1) {
                        keyword.push(n);
                    }

                    //TODO: Buscar en la DB el value
                    return;
                }
            });

            _.forEach(feeling.bad, function(bad) {
                if (n == bad) {

                    if (keyword.indexOf(n) == -1) {
                        keyword.push(n);
                    }

                    //TODO: Buscar en la DB el value
                    return;
                }
            })
        });

        var obj = {
            text: req.body.text,
            keywords: keyword,
            feel: "none",
            finalValue: 0
        };

        res.send(obj);
    };

    app.post('/send-text', getText);

}