const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

//Instantiate express
let app = express();
//Inject body-parser to parse http requests as json objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Load Environment Variables
try{
	if (process.env.NODE_ENV === 'TEST') {
		var configFile = path.join(__dirname, '../config/.env');
		dotenv.load({ path: configFile });
	}
} catch(error){
	console.log('Error loading environment variables', error.message);
}
//Connet to the database
const connection = new Sequelize(process.env.DATABASE_NAME, process.env.USER_NAME, process.env.USER_PASSWORD, {
    dialect: 'mysql'
});
//Test connection to the database
connection.authenticate()
    .then(()=>{
        console.log('Connection has been established successfully.');
    })
    .catch((err)=>{
        console.error('Unable to connect to the database:', err);
    });
//Load routes
require('./router')(app, connection);
//Setup server connection
let PORT = process.env.PORT || 3000;
let server = app.listen(PORT, ()=>{
    console.log('Server listening on port:', PORT);
});

module.exports = server;

