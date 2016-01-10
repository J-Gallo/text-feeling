/**
 * Created by Juan Gallo (Reicko) on 9/01/16.
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var textSchema = new Schema({
	text: { type: String },
    keywords: [],
    feel: {type: String},
    value: {type: Number},
	timeCreated: { type: Number },
	timeUpdated: { type: Number }
});

module.exports = mongoose.model('Text', textSchema);