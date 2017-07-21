'use strict';

const express = require('express');
const graphqlExpress = require('apollo-server-express').graphqlExpress;
const graphiqlExpress = require('apollo-server-express').graphiqlExpress;
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const bodyParser = require('body-parser');
const server = express();

const users = [
	{
		name: 'Zackary Kelsolitonomo, Jr.',
		client: 'Demo',
		admitted_at: 'Jan 7, 2017 at 8:15am',
		surveyed_at: 'Jan 7, 2017 at 4:15am',
		mrn: '423489070',
		risk_score: 'High'
	},
	{
		name: 'Joe Kerry',
		client: 'Remedy Partners, LLC',
		admitted_at: 'Jan 7, 2017 at 9:15am',
		surveyed_at: 'Jan 7, 2017 at 1:15am',
		mrn: '13489370',
		risk_score: 'Medium'
	},
	{
		name: 'Billy Pharo',
		client: 'ProMedica',
		admitted_at: 'Jan 7, 2017 at 2:15am',
		surveyed_at: 'Jan 7, 2017 at 7:15am',
		mrn: '93488870',
		risk_score: 'Low'
	},
	{
		name: 'Aaron Pharo',
		client: 'Beaumont',
		admitted_at: 'Jan 7, 2017 at 1:15am',
		surveyed_at: 'Jan 7, 2017 at 2:15am',
		mrn: '83488870',
		risk_score: 'Medium'
	},
	{
		name: 'Carla Pharo',
		client: 'Mammoth',
		admitted_at: 'Jan 7, 2017 at 2:15am',
		surveyed_at: 'Jan 7, 2017 at 9:15am',
		mrn: '73488870',
		risk_score: 'Low'
	}
];

server.use(express.static(__dirname + '/'));

const myGraphQLSchema = makeExecutableSchema({
	typeDefs: `
		type User {
			name: String!
			client: String!
			admitted_at: String!
			surveyed_at: String!
			mrn: String!
			risk_score: String!
		}

		type Query {
			users: [User]
		}
	`,
	resolvers: {
		Query: {
			users: () => users
		}
	}
});

server.use('/graphql', bodyParser.json(), graphqlExpress({
	schema: myGraphQLSchema
}));

server.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

server.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT || 3000;
console.log(`using port ${port}`);
server.listen(port);