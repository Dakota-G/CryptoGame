const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
	NumID: {
			type: Number,
			required: true
		},
	author: {
			type: String,
			required: true
		},
	quote: {
			type: String,
			required: true
		},
	book: {
			type: String,
			required: true
	},
	fact: {
			type: String,
	}

});

module.exports = mongoose.model('Quote', QuoteSchema)