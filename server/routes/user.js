const userController = reqire('../controllers/user');

const express = require('express');
var router = express.Router();

router.route('/')
    .get(userController.getUsers);

router.route('/:username')
    .get(userController.getUser);


module.exports = router;