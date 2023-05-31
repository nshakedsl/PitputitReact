const chatService = require('../services/chat');
const getChats = async (req, res) => {
    res.json(await chatService.getChats());
};
const getChat = async (req, res) => {
    const chat = await chatService.getChatById(req.params.id);
    if (!chat) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    res.json(chat);
};
const getChatMessages = async (req, res) => {
    const chatMessages = await chatService.getMessagesOfChat(req.params.id);
    if (!chatMessages) {
        return res.status(404).json({ errors: ['Chat Messages not found'] });
    }
    res.json(chatMessages);
};
const deleteChat = async (req, res) => {
    const chat = await chatService.deleteChatById(req.params.id);
    if (!chat) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    res.json(chat);
};
const createChat = async (req, res) => {
    const me = "";
    const chat = await chatService.createChat(req.params.sender,me);
    if (!chat) {
        return res.status(404).json({ errors: ['error when creating chat'] });
    }
    res.json(chat);
};
//...
module.exports = { getChatMessages,createChat,getChats,getChat,deleteChat };