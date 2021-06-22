
// Dependencies
const express = require('express');
const mongojs = require("mongojs");
const mongoose = require('mongoose');

// PORT
var app = express();
const PORT = process.env.PORT || 3006;

//Middleware -------
const databaseUrl = "fitnesstracker";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./Develop/public'));
// ROUTES

app.use(require('./02-Homework/Develop/public/routes/htmlRoutes.js'));
// START SERVER
app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}!`);
});

