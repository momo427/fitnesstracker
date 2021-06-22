// DEPENDENCIES
const router = require('express').Router();
const path = require('path');

// Get Route
// route to main page
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});
// route to exercise page
router.get('/exercise', (req, res) => {
	res.sendFile(path.join(__dirname, '../exercise.html'));
});
// route to statistics page
router.get('/stats', (req, res) => {
	res.sendFile(path.join(__dirname, '../stats.html'));
});

// EXPORTS
module.exports = router;