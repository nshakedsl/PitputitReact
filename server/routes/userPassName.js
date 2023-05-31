const userPassNameController = reqire('../controllers/userPassName');

const express = require('express');
var router = express.Router();


router.route('/')
    .post(userPassNameController.registerUser);


module.exports = router;