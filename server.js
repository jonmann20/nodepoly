'use strict';

const express = require('express');
const server = express();

server.use(express.static(__dirname + '/'));


server.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

server.get('/dashboard', (req, res) => {
	res.sendFile(__dirname + '/views/dashboard.html');
});

server.get('/note', (req, res) => {
	res.sendFile(__dirname + '/views/note.html');
});

server.get('/notes', (req, res) => {
	res.sendFile(__dirname + '/views/notes.html');
});

server.get('/pages', (req, res) => {
	res.sendFile(__dirname + '/views/pages.html');
});


server.get('/notes.json', (reg, res) => {
	res.json([{
		id: 'n0',
		title: 'Have you visited your primary care physician?'
	},
	{
		id: 'n1',
		title: 'Have you taken your medication this morning?'
	},
	{
		id: 'n2',
		title: 'How many drinks have you had in the last week?',
		answerPositive: '0-3',
		answerNegative: '3+'
	}]);
});

server.get('/car', (reg, res) => {
	res.json({
		hp: 305,
		isSportModel: true
	});
});



const port = process.env.PORT || 3000;
console.log(`using port ${port}`);
server.listen(port);