'use strict';

const express = require('express');
const server = express();

let users = [
	{
		name: 'Zackary Kelsolitonomo, Jr.',
		client: 'Demo',
		admitted: 'Jan 7, 2017 at 8:15am',
		surveyed: 'Jan 7, 2017 at 4:15am',
		mrn: '423489070',
		risk_score: 'High'
	},
	{
		name: 'Joe Kerry',
		client: 'Remedy Partners, LLC',
		admitted: 'Jan 7, 2017 at 9:15am',
		surveyed: 'Jan 7, 2017 at 1:15am',
		mrn: '13489370',
		risk_score: 'Medium'
	},
	{
		name: 'Billy Pharo',
		client: 'ProMedica',
		admitted: 'Jan 7, 2017 at 2:15am',
		surveyed: 'Jan 7, 2017 at 7:15am',
		mrn: '93488870',
		risk_score: 'Low'
	},
	{
		name: 'Aaron Pharo',
		client: 'Beaumont',
		admitted: 'Jan 7, 2017 at 1:15am',
		surveyed: 'Jan 7, 2017 at 2:15am',
		mrn: '83488870',
		risk_score: 'Medium'
	},
	{
		name: 'Carla Pharo',
		client: 'Mammoth',
		admitted: 'Jan 7, 2017 at 2:15am',
		surveyed: 'Jan 7, 2017 at 9:15am',
		mrn: '73488870',
		risk_score: 'Low'
	}
];

server.use(express.static(__dirname + '/'));

server.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

server.get('/users', (req, res) => {
	let col = req.query.col || 'risk_score';
	let dir = req.query.dir || 'desc';
	let sortedUsers = Array.from(users);

	switch(col) {
		case 'name':
		case 'mrn':
		case 'client':
		case 'surveyed':
		case 'admitted':
			sortedUsers.sort((a, b) => {
				if(dir === 'desc') {
					let c = a;
					a = b;
					b = c;
				}

				return a[col].localeCompare(b[col]);
			});
			break;
		case 'risk_score':
			sortedUsers.sort((a, b) => {
				if(dir === 'desc') {
					let c = a;
					a = b;
					b = c;
				}

				function getNum(str) {
					switch(str) {
						case 'Low': return 1;
						case 'Medium': return 2;
						case 'High': return 3;
					}
				}

				let aNum = getNum(a.risk_score);
				let bNum = getNum(b.risk_score);

				return aNum > bNum;
			});
			break;
	}

	res.json(sortedUsers);
});

const port = process.env.PORT || 3000;
console.log(`using port ${port}`);
server.listen(port);