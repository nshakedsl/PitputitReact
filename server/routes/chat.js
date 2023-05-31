const chatsController = reqire('../controllers/chat');

const express = require('express');
var router = express.Router();

router.route('/')
    .get(chatsController.getAllChats)
    .post(chatsController.createChat);
    

router.route('/:id')
    .get(chatsController.getChatMessages)
    .get(chatsController.getChat)
    .delete(chatsController.deleteChat);

module.exports = router;