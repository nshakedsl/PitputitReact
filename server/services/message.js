const Message = require('../models/message');

const createMessage = async (sender, content) => {
    const created = new Date().getTime();
    try {
        const message = await Message.create({ created, sender, content });
        return message;
    } catch (err) {
        console.log('err: ', err);
    }
};
const getMessageById = async (id) => { return await Message.findById(id); };
const deleteMessage = async (_id) => {
    const message = await getMessageById(_id);
    if (!message) return null;
    await Message.deleteOne({ _id }).exec();
    return message;
};
module.exports = { getMessageById, deleteMessage, createMessage }