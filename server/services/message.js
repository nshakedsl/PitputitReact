const Message = require('../models/message');
const userService = require('../services/user');

const createMessage = async (senderName, content) => {
    const created = new Date().getTime();
    sender = await userService.getUserByName(senderName);
    const message = await Message.create({ created, sender, content });
    return message;
};
const getMessageById = async (id) => { return await Message.findById(id); };
const deleteMessage = async (id) => {
    const message = await getMessageById(id);
    if (!message) return null;
    await message.remove();
    return message;
};
module.exports = { getMessageById, deleteMessage, createMessage }