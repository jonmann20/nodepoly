'use strict';

const express = require('express');
const server = express();

server.use(express.static(__dirname + '/'));

server.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

/*
 * fetch('/user')
 *   .then(res => res.json())
 *   .then(res => console.log(res));
 */
server.get('/user', (req, res) => {
   res.json({
       firstName: 'Bill',
       lastName: 'Jones'
   });
});

const port = process.env.PORT || 8080;
console.log(`using port ${port}`);
server.listen(port);