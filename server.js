/* eslint-disable indent */
/* eslint-disable no-unused-vars */
'use strict';
require('dotenv').config();
// require express to run server 
const express = require('express');
const app = express();



const PORT = process.env.PORT || 3001;

// require the error files to use for handling errors:

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');



app.get('/', (req, res) => {
	res.send('Hello from server 3000');
});

app.get('/bad', (req, res) => {
	throw new Error('Error B');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

let startServer = () => {
	app.listen(PORT, () => {
		console.log(`server is listening to port ${PORT}`);
	});
};


module.exports = {
	app: app,
	startServer: startServer,
};

