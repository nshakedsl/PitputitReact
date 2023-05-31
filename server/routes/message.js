const messagesController = reqire('../controllers/message');

const express = require('express');
var router = express.Router();

router.route('/:id')
    .get(chatsController.getMessage)
    .post(chatsController.sendMessage);
    

module.exports = router;