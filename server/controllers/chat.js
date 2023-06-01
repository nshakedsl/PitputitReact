const chatService = require('../services/chat');
const messageService = require('../services/message');
const userService = require('../services/user');
const getChats = async (req, res) => {
    res.json(await chatService.getChats());
};
const addChatMessage = async (req, res) => {
    if (!req.params.id || !Number.isInteger(req.params.id)) {
        return res.status(400).json({ errors: ['Bad Request of Chat'] });
    }
    if (!req.body.msg || !req.body.msg === '') {
        return res.status(403).json({ errors: ['illegal msg'] });
    }
    const sender = "";
    const result = messageService.createMessage(req.params.id, sender, req.body.msg);
    if (!result) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    res.json(chat);
};

const getChat = async (req, res) => {
    if (!req.params.id || !Number.isInteger(req.params.id)) {
        return res.status(400).json({ errors: ['Bad Request of Chat'] });
    }
    const chat = await chatService.getChatById(req.params.id);
    if (!chat) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    res.json(chat);
};
const getChatMessages = async (req, res) => {
    if (!req.params.id || !Number.isInteger(req.params.id)) {
        return res.status(400).json({ errors: ['Bad Request of Chat'] });
    }
    const chatMessages = await chatService.getMessagesOfChat(req.params.id);
    if (!chatMessages) {
        return res.status(404).json({ errors: ['Chat Messages not found'] });
    }
    res.json(chatMessages);
};
const deleteChat = async (req, res) => {
    if (!req.params.id || !Number.isInteger(req.params.id)) {
        return res.status(400).json({ errors: ['Bad Request of Chat'] });
    }
    const chat = await chatService.deleteChatById(req.params.id);
    if (!chat) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    res.json(chat);
};
const createChat = async (req, res) => {
    const me = "fred";
    if (!req.body.username || !me) {
        return res.status(400).json({ errors: ['other user field is mandatory'] });
    }
    const retVal = await userService.getUserByName(req.body.username);
    if(!retVal){
        return res.status(401).json({ errors: ['the other user does not exist'] });
    }
    const chat = await chatService.createChat(req.body.username, me);
    if (!chat) {
        return res.status(404).json({ errors: ['error when creating chat'] });
    }
    return res.status(200).json(chat);
};
//...
module.exports = { addChatMessage, getChatMessages, createChat, getChats, getChat, deleteChat };