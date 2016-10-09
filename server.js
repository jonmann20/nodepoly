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

server.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

server.get('/notes', (req, res) => {
	res.sendFile(__dirname + '/views/notes.html');
});


server.get('/test', (req, res) => {
	res.sendFile(__dirname + '/views/test.html');
});

// res.set('Content-Type', 'text/html');
// const htmlHead = '<html><head><title>Streaming test</title></head><body>';
// res.write(htmlHead);
// res.flush();

// const htmlBody = '<h1>Streaming test</h1>';
// res.write(htmlBody);
// res.flush();

// const htmlFoot = '</body></html>';
// res.write(htmlFoot);
// res.flush();
// res.end();


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
