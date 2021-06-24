
// Dependencies
const express = require('express');
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require('mongoose');

// PORT
var app = express();
const PORT = process.env.PORT || 3006;

//Middleware -------
const databaseUrl = "workout";
const collections = ["exercise"];

const db = mongojs(databaseUrl, collections);

app.use(logger("dev"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// ROUTES
app.use(require('./routes/apiRoutes.js'))
app.use(require('./routes/htmlRoutes.js'));
// START SERVER
app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}!`);
});

