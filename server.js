'use strict';

let express = require('express');
//let expHbs = require('express-handlebars');
let server = express();

server.use(express.static(__dirname + '/'));

server.get('/car', (reg, res) => {
	res.json({
		hp: 305,
		isSportModel: true
	});
});

server.get('*', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

//server.set('view engine', '.hbs');
//server.set('views', __dirname + '/views');
//server.use(express.static(__dirname + '/'));

// server.engine('.hbs', expHbs({
// 	extname: '.hbs',
// 	//defaultLayout: 'master',
// 	//partialsDir: `${__dirname}/views/partials`,
// 	//layoutsDir: `${__dirname}/views/layouts`
// }));

//--- Router
// let HomeController = require('./controllers/homeController.js');

// server.get('*', (req, res) => {
// 	let home = new HomeController(req, res);
// 	home.render();
// });
//--- /Router

let port = process.env.PORT || 3000;
console.log(`using port ${port}`);
server.listen(port);
