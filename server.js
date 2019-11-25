const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cryptoDB', {useNewUrlParser: true}) //can be put here or in the Mongoose.JS file.

app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./server/config/routes.js')(app);

app.listen(8000, ()=> console.log("Listening on Port 8000"))