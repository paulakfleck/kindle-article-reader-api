const express = require('express'),
	path = require('path'),
	PORT = process.env.PORT || 5000;

var app = express(),
	car = { type: "Fiat", model: "500", color: "white" };

app
	.get('/', (req, res) => res.json(car))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));

// app.set('view engine', 'html');