const Message = require('../models/message');
const createMessage = async (senderName,content) => {
    const created = new Date().getTime();
    sender = getUserByName(senderName);
    const message = new Message({ created , sender, content });
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