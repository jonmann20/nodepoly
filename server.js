'use strict';

const express = require('express');
const server = express();

const transformBareModules = require('express-transform-bare-module-specifiers').default;
server.use('*', transformBareModules());

server.use(express.static(`${__dirname}/`));
server.get('/', (_, res) => res.sendFile(`${__dirname}/index.html`));

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