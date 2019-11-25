const path = require('path')
const logic = require('../controllers/logic')

module.exports = function(app) {
	app.get('/quoteAPI', (req, res) => {
		logic.readAll(req, res);
	}),
	app.get('/quoteAPI/:NumID', (req, res) => {
		logic.readOne(req, res);
	}),
	app.post('/quoteAPI', (req, res) => {
		logic.create(req, res);
	}),
	app.put('/quoteAPI/:NumID', (req, res) => {
		logic.update(req, res);
	}),
	app.delete('/quoteAPI/:NumID', (req, res) => {
		logic.destroy(req, res);
	}),
	app.all("*", (req, res) => {
		res.sendFile(path.resolve("./public/dist/public/index.html"))
	})
}
