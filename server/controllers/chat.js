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
//...
module.exports = { getChats,getChat };