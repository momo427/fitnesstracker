
// Dependencies
const express = require('express');
const mongojs = require("mongojs");
const mongoose = require('mongoose');

// PORT
var app = express();
const PORT = process.env.PORT || 3006;

//Middleware -------
const databaseUrl = "fitnesstracker";
const collections = ["excercises"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// ROUTES
app.use(require('./routes/apiRoutes.js'))
// app.use(require('./routes/htmlRoutes.js'));
// START SERVER
app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}!`);
});

