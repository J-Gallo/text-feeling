/**
 * Created by Juan Gallo (Reicko) on 9/01/16.
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var trainSchema = new Schema({
	text: { type: String },
    feel: {type: String},
    value: {type: Number},
	timeCreated: { type: Number },
	timeUpdated: { type: Number }
});

module.exports = mongoose.model('Train', trainSchema);