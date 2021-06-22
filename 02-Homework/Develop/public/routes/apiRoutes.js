const router = require('express').Router();
const Exercises = require('../models/exercises');

// GET/READ WORKOUT
router.get('/api/excersies', (req, res) => {
	Exercises.find({})
		// add index to sort by ascending days
		.sort({ day: 1 })
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		// if there is an error, display error
		.catch((err) => {
			res.status(400).json(err);
			console.log(err);
		});
});

// CREATE WORKOUT
router.post('/api/excercises', ({ body }, res) => {
	Exercises.create(body)
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		// if there is an error, display error
		.catch((err) => {
			res.status(400).json(err);
			console.log(err);
		});
});

// UPDATE WORKOUT BY ID
router.put('/api/excersies/:id', ({ body, params }, res) => {
	Exercises.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true })
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		// if there is an error, display error
		.catch((err) => {
			res.status(400).json(err);
			console.log(err);
		});
});

// GET/READ STATS
router.get('/api/excersies/range', (req, res) => {
	Exercises.find()
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		// if there is an error, display error
		.catch((err) => {
			res.status(400).json(err);
			console.log(err);
		});
});

// POST STATS
router.post('/api/exercises/range', (req, res) => {
	Exercises.create({})
		.then((data) => {
			res.json(data);
			console.log(data);
		})
		// if there is an error, display error
		.catch((err) => {
			res.status(400).json(err);
			console.log(err);
		});
});


module.exports = router;