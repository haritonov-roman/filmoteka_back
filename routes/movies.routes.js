const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies.controller');

router.use(express.json());

router.post('/movies', moviesController.createMovie);

router.get('/movies', moviesController.getMovie);

router.get('/movies/:id', moviesController.getOneMovie);

router.put('/movies', moviesController.updateMovie);

router.delete('/movies/:id', moviesController.deleteMovie);

module.exports = router;