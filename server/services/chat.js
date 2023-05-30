const Chat = require('../models/chats');

const getChatById = async (id) => { return await Chat.findById(id); };
const getChats = async () => { return await Chat.find({}); };
const deleteChat = async (id) => {
    const chat = await getchatById(id);
    if (!chat) return null;
    await chat.remove();
    return chat;
};
module.exports = { getChatById, getChats, deleteChat }