const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

router.use(express.json());

router.post('/users', usersController.createUser);

router.get('/users', usersController.getUsers);

router.get('/users/:id', usersController.getOneUser);

router.put('/users', usersController.updateUser);

router.delete('/users/:id', usersController.deleteUser);

module.exports = router;