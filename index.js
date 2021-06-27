const server = require('./server');
require('dotenv').config();
server.startServer(process.env.PORT || 3001);