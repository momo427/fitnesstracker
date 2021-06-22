const router = require('express').Router();
const Exercises = require('../models/exercise');

// GET/READ WORKOUT
router.get('/api/workouts', (req, res) => {
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
router.post('/api/workouts', ({ body }, res) => {
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
router.put('/api/workouts/:id', ({ body, params }, res) => {
	Exercises.findByIdAndUpdate(params.id, { $push: { exercises: body } })
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
router.get('/api/workouts/range', (req, res) => {
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
router.post('/api/workouts/range', (req, res) => {
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