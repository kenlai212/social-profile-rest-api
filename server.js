require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const config = require('config');

const routes = require("./src/routes");

const PORT = process.env.PORT;
const API_NAME = config.get("api.name");
const API_PREFIX = config.get("api.prefix");

//catch all uncaught rejects and excpetions
process.on("unhandledRejection", (ex) => {
	console.error("WE GOT AN UNHANDLED REJECTION!!!!!!!");
    console.error(ex);
});

process.on("uncaughtException", (ex) => {
	console.error("WE GOT AN UNCAUGHT EXCEPTION!!!!!!!");
	console.error(ex);
});

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
app.use(`/${API_PREFIX}`, routes);

app.listen(PORT, function (err) {
	if (err) {
		console.error(`Error while starting ${API_NAME} : ${err}`);
		throw err;
	}

	console.info(`${API_NAME} started up. Listening to port : ${PORT}`);
});