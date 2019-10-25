const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const objectID = require('mongodb').objectID;

const uri =
	'mongodb+srv://okAdmin:Ajssk6nh.C5HtDM@okushch-7kghn.mongodb.net/test?retryWrites=true&w=majority';

const app = express();

const mongoClient = new MongoClient(uri, { useNewUrlParser: true });

mongoClient.connect(function(err, client) {
	if (err) return console.log(err);
	dbClient = client;
	app.locals.collection = client.db('taskmanagerdb').collection('tasks');
	app.listen(3001, function() {
		console.log('Сервер ожидает подключения...');
	});
});

app.get('/api/tasks/', function(req, res) {
	const collection = req.app.locals.collection;
	collection.find({}).toArray(function(err, tasks) {
		if (err) return console.log(err);
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.send(tasks);
	});
});

process.on('SIGINT', () => {
	dbClient.close();
	process.exit();
});
