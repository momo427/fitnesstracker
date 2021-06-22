const mongoose = require('mongoose');
const { all } = require('../routes/routes_api');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: () => new Date()
	},
	exercises: [
		{
			type: {
				type: String
			},
			name: {
				type: String
			},
			duration: {
				type: Number
			},
			weight: {
				type: Number
			},
			reps: {
				type: Number
			},
			sets: {
				type: Number
			},
			distance: {
				type: Number
			}
		}
	]
});

const Excercises = mongoose.model('Excercises', workoutSchema);

module.exports = Excercises;