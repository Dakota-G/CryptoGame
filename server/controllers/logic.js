const mongoose = require('mongoose');
const Quote = require('../models/schemas.js')

module.exports = {
	readAll: function(req, res) {
		Quote.find()
			.then(data => res.json({message: "Success!", results: data}))
			.catch(err => res.json({message: "Failed!", error: err}))
	},

	readOne: function(req, res) {
		Quote.findOne({NumID: req.params.NumID})
			.then(data => res.json({message: "Success!", results: data}))
			.catch(err => res.json({message: "Failed!", error: err}))
	},
	update: function(req, res) {
		Quote.updateOne({ NumID: req.params.NumID }, req.body, {runValidators: true})
			.then(data => res.json({message: "Success!", results: data}))
			.catch(err => res.json({message: "Failed!", error: err}))
	},	
	create: function(req, res) {
		Quote.create(req.body)
			.then(data => res.json({message: "Success!", results: data}))
			.catch(err => res.json({message: "Failed!", error: err}))
	},
	destroy: function(req, res) {
		Quote.deleteOne({NumID: req.params.NumID})
			.then(data => res.json({message: "Success!", results: data}))
			.catch(err => res.json({message: "Failed!", error: err}))
	},
}