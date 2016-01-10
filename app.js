/**
 * Created by Juan Gallo (Reicko) on 9/01/16.
 */

var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose');
    port     = 3005;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(allowCrossDomain);
});

app.get('/', function(req, res) {
  res.send("Text Feeling API !");
});

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  next();
});


var texts = require('./routes/text')(app);
var texts = require('./routes/train')(app);


mongoose.connect('mongodb://localhost/text-feeling', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('SUCCESS: DB connection');
	}
});

server.listen(port, function() {
  console.log("Node server running on http://localhost:" + port);
});