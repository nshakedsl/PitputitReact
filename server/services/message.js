const Message = require('../models/message');
const userService = require('../services/user');

const createMessage = async (sender, content) => {
    const created = new Date().getTime();
    const message = await Message.create({ created, sender, content });
    return message;
};
const getMessageById = async (id) => { return await Message.findById(id); };
const deleteMessage = async (_id) => {
    const message = await getMessageById(_id);
    if (!message) return null;
    await Chat.deleteOne({ _id }).exec();
    return message;
};
module.exports = { getMessageById, deleteMessage, createMessage }