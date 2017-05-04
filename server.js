'use strict';

const express = require('express');
const server = express();

server.use(express.static(__dirname + '/'));

server.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
console.log(`using port ${port}`);
server.listen(port);