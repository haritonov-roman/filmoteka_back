const express = require('express');
const router = express.Router();

const episodesController = require('../controllers/episodes.controller');

router.use(express.json());

router.post('/episodes', episodesController.createEpisode);

router.get('/episodes', episodesController.getEpisode);

router.get('/episodes/:id', episodesController.getOneEpisode);

router.put('/episodes', episodesController.updateEpisode);

router.delete('/episodes/:id', episodesController.deleteEpisode);

module.exports = router;