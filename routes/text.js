/**
 * Created by Juan Gallo (Reicko) on 9/01/16.
 */

module.exports = function(app) {

    var Text = require('../models/text.js'),
        querystring = require('querystring'),
        http = require('http');

    getText = function (req, res) {
        console.log(req.body);
        res.send(req.body);
    };

    app.post('/send-text', getText);

}